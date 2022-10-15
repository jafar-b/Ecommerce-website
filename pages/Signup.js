import React from "react";
import { useState } from "react";
const Signup = () => {
  const [userinput, setUserinput] = useState({
    name: "",
    email: "",
    pass: "",
    pass2: "",
  });
  let name, value;
  const handleinputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserinput({ ...userinput, [name]: value });
  };
  const postData =async () => {

    // console.log(userinput)



    const { name, email, pass, pass2 } = userinput;
console.log( JSON.stringify(

  {name,
  email,
  pass,
  pass2}

));

    const res = await fetch("http://localhost:5000/api/Signup", {
      method: "POST",
      Accept: "*/*",
      headers: { "Content-Type":"application-json"},
      body: JSON.stringify({

        name:name,
        email:email,
        pass:pass,
        pass2:pass2,
      }
      ),
    });

    const data = await res.json();

    if (!data) {
      console.log("kay tarin jhol ashe bawa data not posted");
    } else {
      console.log("Registration successfull");
    }
  };

  return (
    <>
      <div className="mb-6">
        <section class="vh-100 bg-[#eee] ">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-12 col-xl-11">
                <div class="card text-black rounded">
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>

                        <form class="mx-1 mx-md-4 " onSubmit={handleinputs}>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                name="name"
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                value={userinput.name}
                                onChange={handleinputs}
                              />
                              <label class="form-label" for="form3Example1c">
                                Your Name
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                name="email"
                                type="email"
                                id="form3Example3c"
                                class="form-control"
                                value={userinput.email}
                                onChange={handleinputs}
                              />
                              <label class="form-label" for="form3Example3c">
                                Your Email
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                name="pass"
                                type="password"
                                id="form3Example4c"
                                class="form-control"
                                value={userinput.pass}
                                onChange={handleinputs}
                              />
                              <label class="form-label" for="form3Example4c">
                                Password
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                name="pass2"
                                type="password"
                                id="form3Example4cd"
                                class="form-control"
                                value={userinput.pass2}
                                onChange={handleinputs}
                              />
                              <label class="form-label" for="form3Example4cd">
                                Repeat your password
                              </label>
                            </div>
                          </div>

                          <div class="form-check d-flex justify-content-center mb-5">
                            <input
                              class="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                            />
                            <label class="form-check-label" for="form2Example3">
                              I agree all statements in{" "}
                              <a href="#!">Terms of service</a>
                            </label>
                          </div>

                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              class="btn btn-primary text-black btn-lg"
                              onClick={postData}
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          class="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup;
