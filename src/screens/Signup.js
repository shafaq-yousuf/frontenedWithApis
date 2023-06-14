import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { UserSignup } from "../config/firebaseMethods";

const Signup = () => {
  const [model, setModel] = useState({});
  const navigate = useNavigate();
  let signupUser = () => {
    UserSignup(model)
      .then((res) => {
        console.log('res done');
      })
      .catch((err) => {
        console.log(err.message);
      });
    navigate("/home");
    console.log(model)
  };
  const loginNow = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="container py-3">
        <div>
          <h1 className="fw-bold p-2 py-3">Signup</h1>
        </div>
        <div className="row">
          <div className="col-md-6 py-3">
            <input
              required
              onChange={(e) => setModel({ ...model, name: e.target.value })}
              type="text"
              name="name"
              id="name"
              placeholder="User Name"
              className="rounded p-2 py-3 w-75 my-1"
            />
            <input
              required
              onChange={(e) => setModel({ ...model, email: e.target.value })}
              type="email"
              name="email"
              id="email"
              placeholder="Email@.com"
              className="rounded p-2 py-3 w-75 my-1"
            />
            <input
              required
              onChange={(e) => setModel({ ...model, password: e.target.value })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="rounded p-2 py-3 w-75 my-1"
            />
            <input
              required
              onChange={(e) => setModel({ ...model, confirmpassword: e.target.value })}
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Confirm Password"
              className="rounded p-2 py-3 w-75 my-1"
            />
            <input
              required
              onChange={(e) => setModel({ ...model, contact: e.target.value })}
              type="number"
              name="contact"
              id="contact"
              placeholder="Contact"
              className="rounded p-2 w-75 py-3 my-1"
            />
            <select
              className="rounded p-2 py-3 w-75 my-1"
              onChange={(e) => setModel({ ...model, usertype: e.target.value })}
            >
              <option>User Type</option>
              <option value="transporter">Transporter</option>
              <option value="user">User</option>
            </select>
            <button
              className="my-2 py-1 text-center text-dark bg-light rounded border-dark w-25 mx-2"
              onClick={signupUser}
            >
              Signup
            </button>
          </div>
          <div className="col-md-6 py-3 text-center py-3">
            <h1 className="py-3">
              If you are already signup then login please...
            </h1>
            <button
              className="my-2 btn-lg py-2 text-center text-dark bg-light rounded border-dark w-25 mx-2"
              onClick={loginNow}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
