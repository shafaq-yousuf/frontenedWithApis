import axios from "axios";

let apiHandle = axios.create({
  baseURL: "http://localhost:5000/api",
});

let Get = (endPoint) => {
  return apiHandle.get(endPoint);
};

let GetById = (endPoint, id) => {
  return apiHandle.get(`${endPoint}/${id}`);
};

let Post = (endPoint, body) => {
  return apiHandle.post(endPoint, body);
};

let Put = (endPoint, body, id) => {
  return apiHandle.put(`${endPoint}/${id}`, body);
};

let Del = (endPoint, id) => {
  return apiHandle.delete(`${endPoint}/${id}`);
};

export { Get, GetById, Post, Put, Del };
