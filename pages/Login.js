import React from "react";


import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Link from 'next/link';
// import usermodel from "../backend/api/Models/UserSchema";

const Login = () => {
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["user"]);
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [loggedin, setloggedin] = useState(false);
  const userinput = { Email, Pass };
  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    if (!Email) {
      alert("please input email");
    } else if (!Pass) {
      alert("please enter password,It can't be empty!!");
    }

    fetchbackend();
  };

  const fetchbackend = () => {
    console.log("user input frontend: ", userinput);
    fetch("http://localhost:5000/Login/", {
      method: "POST",
      body: `email=${Email}&pass=${Pass}`,
      Accept: "*/*",
      headers:{
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        if (res.status === 200) return res.json();
      })
      .then((data) => {
        if (data) {
          setCookie("token_id", data.token, { path: "/" });
          setCookie("user_id", data.user, { path: "/" });
          if (cookie) console.log("cookie-set");
          alert("Login successful");
          console.log(data);
        } else {
          console.log("user not found");
          console.log("res.status not 200..error.");
        }
    
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="w-full mt-4 justify-center flex  flex-col text-center">
        <div className="text-3xl w-full font-bold mb-4 ">LOGIN</div>
        <form
          className=" px-56 flex flex-col items-center justify-center"
          method="post"
        >
          <div class="form-outline mb-4 ">
            <input
              type="email"
              id="form2Example1"
              class="form-control "
              onChange={(e) => setEmail(e.target.value)}
            />
            <label class="form-label" for="form2Example1">
              Email address
            </label>
          </div>

          <div class="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              class="form-control"
              onChange={(e) => setPass(e.target.value)}
            />
            <label class="form-label" for="form2Example2">
              Password
            </label>
          </div>

          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                />
                <label class="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div class="col">
              <Link href="#!">Forgot password?</Link>
            </div>
          </div>

          <button
            type="submit"
            class="btn btn-primary text-black btn-block mb-4"
            onClick={handleOnFormSubmit}
          >
            Sign in
          </button>

          <div class="text-center">
            <p>
              Not a member? <Link href="/Signup">Register</Link>
            </p>
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;











// COMMENTED CODE:

// FOR FETCH: 
    // console.log("helllo");
        // try {
        //   if (res.status === 200) {
        //     setCookie("token_id", data.token, { path: "/" });
        //     setCookie("user_id", data.user, { path: "/" });
        //     if (cookie) console.log("cookie-set");
        //     alert("Login successful");
        //     setloggedin(true);
        //   } else {
        //     console.log("user not found");
        //     // alert("User not found please signup first");
        //     // router.replace("/Signup");
        //   }
        // } catch (err) {
        //   console.log("error in try" + err);
        // }



