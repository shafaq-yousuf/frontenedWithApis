import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { userLogin } from "../config/firebaseMethods";

const Login = () => {
  const [model, setModel] = useState({});

  let loginUser = () => {
    userLogin(model)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err.message");
      });
  };
  return (
    <>
      <div className="container py-3">
        <div>
          <h1 className="fw-bold p-2">Login</h1>
        </div>
        <div className="row">
          <div className="col-md-6 py-3">
            <input
              onChange={(e) => setModel({ ...model, name: e.target.value })}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="rounded p-2 w-75 my-1"
            />
            <input
              onChange={(e) => setModel({ ...model, lastName: e.target.value })}
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              className="rounded p-2 w-75 my-1"
            />
            <input
              onChange={(e) => setModel({ ...model, email: e.target.value })}
              type="email"
              name="email"
              id="email"
              placeholder="Email@.com"
              className="rounded p-2 w-75 my-1"
            />
            <input
              onChange={(e) => setModel({ ...model, contact: e.target.value })}
              type="number"
              name="number"
              id="number"
              placeholder="Contact"
              className="rounded p-2 w-75 my-1"
            />
            <input
              onChange={(e) => setModel({ ...model, password: e.target.value })}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="rounded p-2 w-75 my-1"
            />
            <button
              className="my-2 py-1 text-center text-dark bg-light rounded border-dark w-25 mx-2"
              onClick={loginUser}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
