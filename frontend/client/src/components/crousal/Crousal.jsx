import React from "react";

const Crousal = () => {
  const images = [
    "https://images.pexels.com/photos/168438/pexels-photo-168438.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3806753/pexels-photo-3806753.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div className="sm:w-2/3 sm:h-72 bg-white flex mx-auto mt-8 mb-9 overflow-hidden ">
      {images.map((x) => {
        return (
          <div>
            <img src={x} alt="" className=" w-screen" />
          </div>
        );
      })}
    </div>
  );
};

export default Crousal;
