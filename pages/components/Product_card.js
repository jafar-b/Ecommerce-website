import React from "react";

const Product_card = () => {
  return (
    <>
     
        <div className="flex flex-col justify-center text-center align-center w-full  h-fit bg-white shadow mx-2 rounded hover:cursor-pointer hover:shadow-lg ">
          <img
            src="https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"  width={120} 
            className="mx-auto mt-2"
          />

          <p className="text-sm w-full text-center my-2">
            Top Mirrorless Cameras
          </p>
          <a href="#">

          <p className="text-lg w-full text-center text-green-800 font-bold my-2">SHOP NOW!</p>
          </a>
          <p className="text-md w-full text-center text-gray-500 mb-2">CANON</p>
        </div>
      
    </>
  );
};

export default Product_card;
