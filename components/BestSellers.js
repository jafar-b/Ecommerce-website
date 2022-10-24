import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Product_card from "./Product_card";

const BestSellers = (props)=>{



  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  


  return (
    <>
      <div className="my-1 shadow flex w-full h-64 ">
        
        <div className="m-2 w-[15%]">
          <div className="pt-[20%] text-center w-full  bg-white h-[50%] text-black text-2xl">
            {props.title}
          </div>
          <div className='  align-center bg-cover  h-1/2  bg-[url("https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90")]  bg-no-repeat '>
            <div className="w-full mx-auto flex justify-center">

            <button className="bg-blue-600 p-2 rounded shadow hover:bg-blue-700  text-center text-white ">
              VIEW ALL
            </button>
            </div>
          </div>
        </div>
 
  <div className="bg-white text-black w-[85%]  my-2">
  <Carousel responsive={responsive}>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>
    <Product_card/>



  </Carousel>
  </div>
      
  
 
          
      </div>
    </>
  );
};

export default BestSellers;


