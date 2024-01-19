import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category from "../components/section/Category";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { StoreContext } from "../context/StoreContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SingleProduct = () => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const id = useParams().id;
  const { addToBasket } = useContext(StoreContext);

  const handleAdd = () => {
    toast("Added to basket");
    addToBasket(data);
  };

  const fetchdata = async () => {
    await fetch(`http://localhost:3000/api/users/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
        setImages(json.data.images);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="max-w-screen ">
      <Category />
      <div className="w-full h-full bg-white mt-9 flex justify-around p-5 flex-col sm:flex-row">
        <div className="flex gap-2 flex-col sm:flex-row">
          <div></div>
          <div className="flex flex-col  gap-7">
            <img src={data.thumbnail} alt="" />
            <div className="flex justify-evenly">
              <div>
                <button
                  className="border bg-[#fb641b] w-44 aspect-[15/5] p-5 rounded-3xl "
                  onClick={handleAdd}
                >
                  ADD TO CART
                </button>
              </div>
              <div>
                <button className="border w-44 aspect-[15/5] p-5 rounded-3xl bg-[#FFA900]">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className=" flex justify-between items-center text-4xl mb-7">
            <span className="mr-4"> {data.title}</span>
            <span className="text-xl font-mono font-bold ">
              Ratings: {data.rating}/5
            </span>
          </div>

          <div className="text-3xl font-bold">Price: {data.price}Rs</div>
          <div className="text-2xl text-wrap ">{data.description}Rs</div>
          <div className="flex flex-wrap justify-center items-center gap-12 ">
            {images.map((i) => {
              return (
                <div className=" w-40 h-40">
                  <img src={i} alt="" className=" w-full h-full object-cover" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-left" />
    </div>
  );
};
