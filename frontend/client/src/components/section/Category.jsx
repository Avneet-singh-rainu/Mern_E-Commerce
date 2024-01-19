import React from "react";
import { Link } from "react-router-dom";

const Category = ({ data }) => {
  return (
    <div className="bg-white mt-3 h-16 overflow-hidden flex items-center justify-center gap-12 px-5 mb-12">
      <div className="h-full  overflow-hidden cursor-pointer">
        <Link to="/category/fragrances" state={{ data: { data } }}>
          <div className=" h-full text-2xl font-mono flex mt-4 ">FRAGRANCES</div>
        </Link>
      </div>
      <div className="h-full overflow-hidden cursor-pointer">
        <Link to="/category/groceries" state={{ data: { data } }}>
          <div className=" h-full text-2xl font-mono flex mt-4">GROCERIES</div>
        </Link>
        L
      </div>
      <div className="h-full  overflow-hidden cursor-pointer">
        <Link to="/category/skincare" state={{ data: { data } }}>
          <div className=" h-full text-2xl font-mono flex mt-4">SKINCARE</div>
        </Link>
      </div>
      <div className="h-full  overflow-hidden cursor-pointer">
        <Link to="/category/home-decoration" state={{ data: { data } }}>
          <div className=" h-full text-2xl font-mono flex mt-4">HOME DECOR</div>
        </Link>
      </div>{" "}
      <div className="h-full  overflow-hidden cursor-pointer">
        <Link to="/category/furniture" state={{ data: { data } }}>
          <div className=" h-full text-2xl font-mono flex mt-4">FURNITURE</div>
        </Link>
      </div>{" "}
      <div className="h-full  overflow-hidden cursor-pointer">
        <Link to="/category/mens" state={{ data: { data } }}>
          <div className=" h-full text-2xl font-mono flex mt-4">  STYLING</div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
