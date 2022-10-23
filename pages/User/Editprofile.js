import React from 'react'

const Editprofile = () => {
  return (

    <div className="m-4 flex justify-center items-center  h-full bg-slate-100">
    <div class="container bootstrap snippets bootdey  ">
      <h1 class="text-primary text-3xl my-6 mx-6">Edit Profile</h1>
      <hr />
      <div class="row">
        <div class="col-md-9 personal-info w-full ">
          <div class="alert alert-info  alert-dismissable">
            <a class="panel-close close" data-dismiss="alert">
              ×
            </a>
            <i class="fa fa-coffee "></i>
            This is an <strong>.alert</strong>. Use this to show important
            messages to the user.
          </div>
          <div className="text-3xl my-4">Personal info</div>

          <form
            class="form-horizontal flex flex-col gap-3 justify-between"
            role="form"
          >
            <div class="form-group">
              <label class="col-lg-3 control-label">Name:</label>
              <div class="col-lg-8">
                <input class="form-control" type="text" placeholder="Enter Name" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label">Email:</label>
              <div class="col-lg-8">
                <input
                  class="form-control"
                  type="text"
                readOnly
                value={"Abcd@gmail.com"}
                />
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Password:</label>
                <div class="col-lg-8">
                  <input class="form-control" type="password" />
                </div>
              </div>
            </div>

            <div className="form-group flex w-full  items-center justify-center">
              <div className="text-xl w-fit  my-3  px-4 py-2 rounded shadow bg-blue-600 text-white hover:bg-blue-700 ">
                Save Changes
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <hr></hr>
  </div>
  
  
    )
}

export default Editprofile