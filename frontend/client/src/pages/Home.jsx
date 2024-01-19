import React from "react";
import Category from "../components/section/Category";
import Crousal from "../components/crousal/Crousal";
import { useEffect, useState } from "react";
import Product from "../components/products/product";

export const Home = () => {
  const [data, setData] = useState([]);

  const fetchdata = () => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <Category data={data} />
      <Crousal />
      <Product data={data} />
    </div>
  );
};
