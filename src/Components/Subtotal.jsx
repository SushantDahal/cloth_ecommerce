import React from "react";
// import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../Reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      {/* <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="text-[14px]">
              Subtotal ({basket.length} items): <strong>${value}</strong>
            </p>
            <small className="text-[14px] ">
              <input type="checkbox" className="my-2 mr-2" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
      /> */}
      <h1>Subtotal</h1>
    </div>
  );
};
export default Subtotal;
