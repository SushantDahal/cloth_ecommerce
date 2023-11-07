import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

const Navbar = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <header className="w-full  bg-[#131921]">
      <div className="text-white max-w-[1240px] mx-auto py-2">
        <div className="flex justify-between items-center sticky z-50">
          <Link to="/">
            <div className=" flex items-center">
              <StorefrontIcon className="text-[#ff9f00] mr-2" />
              <h2>eShop</h2>
            </div>
          </Link>
          <div className=" flex flex-1">
            {/* <input
              type="text "
              className="w-[20%] ml-10  text-black h-5 p-3 header_searchInput"
            /> */}
            {/* <SearchIcon className="bg-[#ff9f00] text-black" /> */}
          </div>
          <div className="flex justify-evenly items-center">
            <Link to="/login">
              <div className=" flex flex-col mx-2 text-white">
                <span className="text-xs">Hello Guest</span>
                <span className="font-bold">Sign in</span>
              </div>
            </Link>
            <div className=" flex flex-col mx-2 text-white">
              <span className="text-xs">Your</span>
              <span className="font-bold">Shop</span>
            </div>
            <Link to="/basket">
              <div className=" flex  mx-4 text-white item_basket">
                <ShoppingBasketIcon className="mx-2 " />
                <span className="basket_count">{basket.length}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
