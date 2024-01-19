import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import BasketProduct from "../components/BasketProduct";

const Cart = () => {
  const { products, total } = useContext(StoreContext);
  console.log(total);
  return (
    <div className="flex flex-col gap-12 w-full min-h-screen">
      {products.map((p, i) => (
        <BasketProduct key={i} item={p} />
      ))}
      <div className="h-10 text-3xl font-mono text-center ">
        Total: {total}.00$
      </div>
      <div className="h-10 text-3xl font-mono text-center ">
        <button className="border bg-[#3a5da8] w-44 aspect-[15/5] p-5 rounded-3xl ">
          Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
