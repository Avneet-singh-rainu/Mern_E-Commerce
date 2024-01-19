import React from "react";
import { useState, useEffect } from "react";
import Category from "../components/section/Category";
import { useParams,Link } from "react-router-dom";
import Product from "../components/products/product";

const SingleCategory = () => {
  const name = useParams();

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

  const newData = data.filter(
    (d) => d.category == name.name || d.category.includes(name.name)
  );
  console.log(newData);

  return (
    <>
      <Category />
      <div className="flex flex-wrap justify-evenly gap-12 w-full h-full ">
        {newData.map((obj) => {
          return (
            <div className="border w-1/5 h-96 bg-white rounded-lg overflow-hidden">
              <Link
                to={{ pathname: `${obj._id}`, state: { id: obj._id } }}
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
    </>
  );
};

export default SingleCategory;
