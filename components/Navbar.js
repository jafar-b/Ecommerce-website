import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import "next/image";
import Link from "next/link";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState("hidden");
  const [display2, setDisplay2] = useState("hidden");
  const show="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
  const ontogglehover=()=>{
 display==="hidden"? setDisplay(show):setDisplay("hidden");
  }
  const ontogglehover2=()=>{
 display2==="hidden"? setDisplay2(show):setDisplay2("hidden");

  }
  const handleOnClick = () => {
    console.log(search);
  };

  return (
    <>
      <div className="bg-blue-500 w-full flex justify-center  text-white py-1">
       <a href="#" >
         <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          width={60}     
          className={"mx-2 my-4"}  
          />
          </a>
        <div className="flex w-[40%] mx-2 bg-[#a3c3e5] py-1 my-2 rounded  ">
          <input
            placeholder="Search for products,brands and more"
            className=" rounded mx-2 focus:outline-none w-[85%] px-2 text-sm"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <img
            src="search.png"
            height={20}
            className="hover:cursor-pointer hover:bg-slate-100 p-1 rounded mx-2 "
            onClick={handleOnClick}
            width={25}
          /> 
        </div>
        <a href="#" className="font-bold mx-2 mt-2 h-fit">
          Become a Seller
        </a>

        <div className="flex ">
          <a href="#" className="flex mx-2 font-bold mt-2">
            <img src="cart.png" width={20} height={10}
            className="mx-1 mb-3" />
            Cart
          </a>
        </div>

        <div class="  relative inline-block text-left">
          <div>
            <button
              type="button"
              // 
              className={`mt-2 text-black px-2 h-fit bg-white rounded focus:border-black mx-2`}
          onFocus={ontogglehover}
           >
              Your Profile
              <svg
                class="mr-1  ml-2 h-3 w-fit"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="false"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>


          <div class={display}>
            <div class="py-1" role="none">
              <a
                href="#"
                class="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                orders
            
              </a>
              <a
                href="#"
                class="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
                >
                wishlist
                
              </a>
              <a
                href="#"
                class="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
                >
               giftcard
                
              </a>
              <a
                href="#"
                class="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
                >
                 notifications
                
              </a>
              <a
                href="#"
                class="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
                >
                
                coupons  
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  class="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-slate-200 rounded"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                  >              
                  Sign out
       
                </button>
              </form>
            </div>
          </div>
          
        </div>
        <div class="  relative inline-block text-left">
          <div>
            <button
              type="button"
              class="text-black px-2 mt-2 h-fit mx-2 bg-white rounded focus:border-black"
           onClick={ontogglehover2}
           >
              More
              <svg
                class="mr-1  ml-2 h-3 w-fit"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="false"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            class={display2}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
            aria-hidden="true"
          >
            <div class="py-1" role="none">
              <a
                href="#"
                class="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Notification Preference
               
              </a>
              <a
                href="#"
                class="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Advertise
              </a>
              <a
                href="#"
                class="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                24x7 Customer Care
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  class="hover:bg-slate-200 text-gray-700 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                  >
                  Download App
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
