import React, { useState } from "react";
import { Post } from "../config/apiHandle";

const Teacher = () => {
  const [model, setModel] = useState([]);

  const postData = () => {
    Post("teacher", model)
      .then((res) => {
        alert("Your response has been restored");
      })
      .catch((err) => console.log(err.message));
  };

  const submitTeacher = () => {
    postData();
  };

  return (
    <>
      <div className="container py-3">
        <div>
          <h1 className="fw-bold p-2">Student</h1>
        </div>
        <div className="row">
          <div className="col-md-6 py-3">
            <input
              onChange={(e) =>
                setModel({ ...model, name: e.target.value })
              }
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              className="rounded p-2 w-75 my-1"
            />
            <input
              onChange={(e) => setModel({ ...model, course: e.target.value })}
              type="text"
              name="course"
              id="course"
              placeholder="Enter Course Name"
              className="rounded p-2 w-75 my-1"
            />
            <input
              onChange={(e) => setModel({ ...model, contact: e.target.value })}
              type="number"
              name="contact"
              id="contact"
              placeholder="Enter Contact"
              className="rounded p-2 w-75 my-1"
            />
            <button
              className="my-2 py-1 text-center text-dark bg-light rounded border-dark w-25 mx-2"
              onClick={submitTeacher}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher;
