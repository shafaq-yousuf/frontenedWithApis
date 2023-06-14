import React, { useEffect, useState } from "react";
import { Del, Get, GetById, Put } from "../config/apiHandle";
import Table from "../components/Table";
import { useNavigate, useNavigation } from "react-router-dom";

const StudentData = () => {
  const [model, setModel] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    Get("student")
      .then((res) => {
        setModel([...res.data.data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deleteData = (e) => {
    Del("student", e._id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const editData = (e) => {
    console.log(e._id);
    navigate(`/editStudent/${e._id}`);
  };

  const col = [
    {
      key: "firstName",
      displayName: "First Name",
    },
    {
      key: "lastName",
      displayName: "Last Name",
    },
    {
      key: "contact",
      displayName: "Contact",
    },
    {
      key: "course",
      displayName: "Course",
    },
    {
      key: "",
      displayName: "Edit",
      displayField: (e) => (
        <button className="btn btn-primary px-4" onClick={() => editData(e)}>
          Edit
        </button>
      ),
    },
    {
      key: "",
      displayName: "Delete",
      displayField: (e) => (
        <button className="btn btn-danger px-3" onClick={() => deleteData(e)}>
          Delete
        </button>
      ),
    },
  ];

  useEffect(getData, []);

  return (
    <div>
      <h1>student data</h1>
      <Table col={col} dataSource={model} />
    </div>
  );
};

export default StudentData;
