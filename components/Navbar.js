import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);
  const [display2, setDisplay2] = useState(false);

  let router = new useRouter();

  const show =
    "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none";

  const hidden =
    "hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none";

  

  // to hide and show dropdown
  const handleOnDrop = () => {
    
    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
      setDisplay2(false)
    }


  };
  // to hide and show dropdown
  const handleOnDrop2 = () => {
    // console.log(search);
    if (display2) {
      setDisplay2(false);
    } else {
      setDisplay2(true);
      setDisplay(false)
    }
   
  };

  const handleOnDropClose = () => {
    setDisplay(false);
  };
  const handleOnSearch = () => {



  };

  return (
    <>
      <div className="bg-blue-500 w-full flex  justify-evenly text-white py-1 ">
        <Link href="/#">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            width={60}
            className={"mx-2 my-4"}
          />
        </Link>
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
            onClick={handleOnSearch}
            width={25}
          />
        </div>

        <div className="flex ">
          <Link href="/Cart" className="flex mx-2 text-center font-bold mt-2">
            <a className="mt-2 font-bold ">Cart</a>
          </Link>
        </div>

        <div className="flex ">
          <Link href="/Login" className="flex mx-2 text-center font-bold mt-2">
            <a className="mt-2 font-bold ">Login</a>
          </Link>
        </div>

        <div className="flex ">
          <Link href="/Signup" className="flex mx-2 text-center font-bold mt-2">
            <a className="mt-2 font-bold ">Signup</a>
          </Link>
        </div>

        <div class="relative inline-block text-left z-20" >
          <div>
            <button
              
              className={`text-black focus:outline-none px-2 mt-2 h-fit mx-2 bg-white rounded focus:border-black  `}
               onClick={handleOnDrop}
              
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

          <div class={display ? show : hidden} >
            <div class="py-1" role="none">
              <Link
                href="#"
                class="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm"
              >
                <a
                                     className="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm"
                  onClick={() => {
                    setDisplay(false);
                  }}
                >
                  Orders
                </a>
              </Link>
              <a
                href="#"
                class="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                wishlist
              </a>

              <Link href="/User/Editprofile" passHref>
                <a
                  className="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm"
                  onClick={() => {
                    setDisplay(false);
                  }}
                >
                  Edit Profile
                </a>
              </Link>

              <a
                href="#"
                class="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                notifications
              </a>
              <a
                href="#"
                class="hover:bg-slate-200 text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-4"
              >
                coupons
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  class="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-slate-200 rounded"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-5"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="  relative inline-block text-left z-20">
          <div>
            <button
              type="button"
              class="text-black focus:outline-none px-2 mt-2 h-fit mx-2 bg-white rounded focus:border-black"
              onClick={handleOnDrop2}>

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
          <div class={display2 ? show : hidden} onBlur={() => setDisplay2(false)}>

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
      </div>
    </>
  );
};

export default Navbar;
