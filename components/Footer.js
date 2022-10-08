import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex bg-[#172337] relative bottom-0"> 
        <div className=" p-2 flex justify text-white w-full">
          <div className="text-start m-4">
            <p className="text-gray-300 m-3">ABOUT</p>
            <p className="text-white block text-xs  m-1">
              <Link href="/ContactUs">Contact Us</Link>
            </p>
            <p className="text-white block text-xs  m-1">
              <Link href="/AboutUs">About Us</Link>
            </p>   
          </div>
        </div>  

        <div className=" p-2 flex justify text-white w-full">
          <div className="text-start m-4">
            <p className="text-gray-300 m-3">HELP</p>
            <p className="text-white block text-xs  m-1">
              <Link href="#">Payments</Link>
            </p>
            <p className="text-white block text-xs  m-1">
              <Link href="#">Shipping
</Link>
            </p>
            <p className="text-white block text-xs  m-1">
              <Link href="#">Cancellation & Returns
</Link>
            </p>
            <p className="text-white block text-xs  m-1">
              <Link href="/Faq">FAQ
</Link>
            </p>
         
          </div>
        </div> 

        <div className=" p-2 flex justify text-white w-full">
          <div className="text-start m-4">
            <p className="text-gray-300 m-3">POLICY</p>
            <p className="text-white block text-xs  m-1">
              <Link href="#">Return Policy</Link>
            </p>
            <p className="text-white block text-xs  m-1">
              <Link href="#">Terms Of Use</Link>
            </p>
            <p className="text-white block text-xs  m-1">
              <Link href="#">Security</Link>
            </p>
            <p className="text-white block text-xs  m-1">
              <Link href="#">Privacy</Link>
            </p>
            <p className="text-white block text-xs  m-1">
              <Link href="#">Sitemap</Link>
            </p>
            <p className="text-white block text-xs  m-1">
              <Link href="#">EPR Compliance</Link>
            </p>
          </div>
        </div>
        <div className=" p-2 flex justify text-white w-full">
          <div className="text-start m-4">
            <p className="text-gray-300 m-3">SOCIAL</p>
            <p className="text-white block text-xs  m-1">
              <Link href="#">Facebook</Link>
            </p>
            <p className="text-white block text-xs  m-1">
              <Link href="#">Twitter</Link>
            </p>
            <p className="text-white block text-xs  m-1">
              <Link href="#">Youtube</Link>
            </p>
          </div>
        </div>

        <div className=" p-2 flex justify text-white w-full">
          <div className="text-start text-xs m-4">
            <p className="text-gray-300 m-3">Mail us:</p>
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
