import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct flex items-center  my-4">
      <div className="">
        <img
          src={image}
          className="max-h-[130px] min-h-[90px] object-contain"
        />
      </div>
      <div className="mx-4">
        <p className="text-xs lg:text-xl">{title}</p>
        <p className="checkout_price py-1">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex  text-4xl ">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <AiFillStar className="text-[yellow] " />
            ))}
        </div>
        <button
          onClick={removeFromBasket}
          className="bg-yellow-700 w-[150px] my-2 border-black border-2 r text-xs hover:text-white duration-200"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
