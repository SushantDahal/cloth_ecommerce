import { Password } from "@mui/icons-material";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const Register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div class="h-96 flex items-center justify-center ">
      <div class="relative top-16">
        <div class="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-red-400 via-[#ff9f00] to-red-500 shadow-lg animate-pulse"></div>
        <div
          id="form-container"
          class="bg-white px-16 py-10 rounded-lg shadow-2xl max-w-[500px] relative z-10 transform transition duration-500 ease-in-out"
        >
          <h2
            id="form-title"
            class="text-center text-3xl font-bold mb-6 text-gray-800"
          >
            Sign In
          </h2>
          <form class="space-y-5">
            <input
              class="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <input
              class="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <button
              class="w-full h-12 bg-[#ff9f00] hover:bg-[#b9a076] border-2 border-black font-bold py-2 px-4 rounded "
              onClick={signIn}
            >
              Sign in
            </button>
            <a class="text-blue-500 hover:text-blue-800 text-sm" href="#">
              Forgot Password?
            </a>
          </form>
          <p className="text-[10px] my-2">
            By singing-in you agree to the eshop website Condition of Use &
            Sale. Please see our Privacy Notice, Our Cookie Notice and our
            Interest-Based Ads Notice.
          </p>
          <button
            class="w-full h-8 bg-[#b8b3b3] hover:bg-[#6d6868] border-2 border-black font-bold px-4 py-1 rounded text-xs "
            onClick={Register}
          >
            Create Your eShop account
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
