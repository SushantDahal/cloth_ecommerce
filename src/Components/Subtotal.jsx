import React from "react";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../Reducer";

const CurrencyFormat = (value) => {
  return `$${value.toFixed(2)}`;
};

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const subtotal = getBasketTotal(basket);

  return (
    <div>
      <p className="text-[14px]">
        Subtotal ({basket.length} items):{" "}
        <strong>{CurrencyFormat(subtotal)}</strong>
      </p>
      <small className="text-[14px] ">
        <input type="checkbox" className="my-2 mr-2" />
        This order contains a gift
      </small>
    </div>
  );
};

export default Subtotal;
