import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const BasketProduct = ({ key, item }) => {
  const { removeFromBasket } = useContext(StoreContext);

  const handleRemove = (item) => {
    removeFromBasket(item);
  };

  return (
    <div className="flex justify-around items-center mt-3 bg-white">
      <div className="">
        <img src={item.thumbnail} alt="" className="w-40 h-40" />
      </div>
      <div className="text-x font-mono text-xl">Price: {item.price}.00$</div>
      <div className="text-x  ">
        <button
          className="border bg-[#fb641b] w-44 aspect-[15/5] p-5 rounded-3xl "
          onClick={() => {
            handleRemove(item);
          }}
        >
          Remove item
        </button>
      </div>
    </div>
  );
};

export default BasketProduct;
