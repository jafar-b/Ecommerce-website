import React from "react";
import Carousel from "react-multi-carousel";

const ProductCheckout = () => {
  return (
    <>
      <div className="flex ">
        <div className="block align-center bg-white h-fit shadow-lg rounded w-[40%] m-8">
          <div className="flex justify-center  ">
            <img src="https://rukminim1.flixcart.com/image/832/832/l19m93k0/mobile/w/h/9/-original-imagcv2dtxp6ymzu.jpeg?q=70" />
          </div>

          <div className="flex w-full my-2 px-1 shadow ">
            <button  className="bg-orange-600  mr-1 p-3 w-1/2 h-full font-bold text-white ">
              BUY NOW
            </button>

            <button className="bg-yellow-500 p-3 w-1/2 h-full  font-bold text-white">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Product title description and price */}
        <div className="text-2xl h-fit w-[60%] ">
          <div className="font-bold mt-5 mx-4 h-fit">
            POCO X4 PRO 5G(Laser Blue,128 GB) (6GB RAM)
          </div>
          <div className="text-xs  mx-4 h-fit text-slate-500">
            33,028 Ratings & 3,308 Reviews
          </div>
          <div className="text-4xl my-3 font-bold h-fit">₹16,999/-</div>

          <div className="text-md ">
            <p className="font-bold text-lg">Available offers</p>
            <p className="text-sm">
              Bank Offer10% off on HDFC Bank Credit and Debit Card Full Swipe
              Trxns,up to ₹500.On orders of ₹5,000 and aboveT&C
            </p>
            <p className="text-sm">
              Bank Offer10% off on HDFC Bank Credit and Debit Card EMI Trxns, up
              to ₹1,000. On orders of ₹5,000 and aboveT&C
            </p>

            <p className="text-sm">
              Bank OfferExtra ₹250 off on HDFC Bank Credit Card (incl.EMI) and
              Debit EMI on order value of ₹12,499 and aboveT&C
            </p>

            <p className="text-sm">
              Special PriceGet extra ₹7000 off (price inclusive of
              cashback/coupon)T&C
            </p>
          </div>

          <div className="flex h-full">
            <div className="text-slate-400 m-4 text-lg h-full">Delivery</div>
            <div className="m-4 ">
              <input
                placeholder="Enter your city pincode"
                className="text-sm shadow-lg bg-slate-200 text-black focus:outline-none rounded text-center"
              />
              <button className="bg-blue-600 text-sm rounded shadow-lg hover:bg-blue-800 text-white px-2 mx-2">
                Check
              </button>
            </div>
          </div>

          <div className="flex h-full">
            <div className="text-slate-400 m-4 text-lg h-full">Description</div>
            <div className="m-4 ">
              <p className="text-xs">
                With 6 GB of RAM, 64 GB of internal storage, a Helio G96
                processor, UFS 2.2 WriteBooster, and Liquid Cooling Technology,
                the POCO M4 Pro is an elegantly built phone for all your
                multitasking requirements. This phone can steal the show
                everywhere you carry it due to its appealing design. This phone
                delivers a compelling visual experience with a 16.33 cm (6.43)
                savvy display, a refresh rate of 90 Hz, and a touch sampling
                rate of 180 Hz. This phone boasts a 5000 mAh battery that is
                capable of lasting for a long period. It also has a 33 W quick
                charging interface that can fully charge your phone in around 61
                minutes. Additionally, This phone has a triple camera setup that
                includes a 64 MP back camera and an 8 MP Ultrawide lens with a
                118-degree field of vision for taking high-quality photos. It is
                also equipped with a 16 MP front camera that helps capture
                stunning selfies.{" "}
              </p>
            </div>
          </div>
          <div className="flex h-full">
            <div className="text-slate-400 my-6 mx-4 text-lg h-full">Rating: </div>
            <div className="m-6 flex">
              <p className="text-lg mx-6">
                3.8⭐
              </p>
              <p className="text-lg mx-">
                32,156 Ratings
                </p>
            </div>
          </div>
        
            
          </div>
        </div>
      
    </>
  );
};

export default ProductCheckout;
