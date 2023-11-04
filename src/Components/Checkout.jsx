import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkoot max-w-[1240px] mx-auto my-4">
      <div className="grid md:grid-cols-6 gap-5 ">
        <div className="col-span-4 ">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/S2S/XCM_Store/IN-PR-Mob-Slash-Prime.jpg"
            alt=""
            className="h-[170px] md:h-[200px] w-screen"
          />
        </div>
        <div className="basis-[25%] max-h-[160px]  bg-[#ccc5c5] flex flex-col col-span-4 md:col-span-2 px-4 py-2">
          <Subtotal />
          <button className="bg-[#ff9f00] max-w-[300px] border-black border-2 font-bold py-1 mt-4 hover:text-white  duration-150">
            Processed to Checkout
          </button>
        </div>
      </div>
      <div>
        <h2 className=" mt-4 mb-2 font-bold text-xl">Your Shopping Basket</h2>
        <hr className="w-[67%]" />
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            price={item.price}
            title={item.title}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};
export default Checkout;
