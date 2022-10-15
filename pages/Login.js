import React from "react";
import { useState, useEffect } from "react";

const Login = () => {
  const [Email, setEmail] = useState(null);
  const [Pass, setPass] = useState(null);

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    if (!Email) {
      alert("please input email");
    } else if (!Pass) {
      alert("please enter password,It can't be empty!!");
    }
    
fetchbackend();


  };

  const fetchbackend=() => {
    fetch("http://localhost:5000/api/Login")
      .then((response) => response.json())
      .then((data) => {
        console.log({data});
     
// if(data.email==Email && data.pass==Pass){
//   alert("LOGGED IN SUCCESSFULLY")
// }
// else{
//   alert("LOGIN FAILED,SORRY")
// }

      });


  };

  

  return (
    <>
      <div className="w-full mt-4 justify-center flex  flex-col text-center">
        <div className="text-3xl w-full font-bold mb-4 ">LOGIN</div>
        <form
          className=" px-56 flex flex-col items-center justify-center"
          
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
                  checked
                />
                <label class="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div class="col">
              <a href="#!">Forgot password?</a>
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
              Not a member? <a href="/Signup">Register</a>
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
