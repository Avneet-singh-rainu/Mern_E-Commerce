import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-evenly gap-12 w-full h-full ">
      {data.map((obj) => {
        return (
          <div className="border w-1/5 h-96 bg-white rounded-lg overflow-hidden">
            <Link
              to={{ pathname:`${obj._id}`, state: { id: obj._id } }}
              className="border w-1/5 h-80 bg-white rounded-lg"
            >
              <div id={obj._id} className=" flex flex-col gap-4 ">
                <div className=" self-center text-2xl p-2">{obj.title}</div>

                <div className=" w-full h-40">
                  <img
                    src={obj.thumbnail}
                    alt="image"
                    className=" w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <p>Ratings: {obj.rating}</p>
                  <p>Brand: {obj.brand}</p>
                  <p>Price: {obj.price}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
