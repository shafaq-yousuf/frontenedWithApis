import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Put } from "../config/apiHandle";

const EditTeacher = () => {
  const [model, setModel] = useState([]);
  const { id } = useParams();
  console.log(id);

  const editTeacher = () => {
    Put('teacher',model,id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div className="container py-3">
        <div>
          <h1 className="fw-bold p-2">Edit Details here</h1>
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
              onClick={editTeacher}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTeacher;
