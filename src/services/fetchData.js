import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchData = async (value) => {
  const response = await instance.get("/users");
  const result = response.data.filter((user) => {
    return (
      value && user && user.name.toLowerCase().includes(value.toLowerCase())
    );
  });
  return result;
};

export const fetchDataById = async (id) => {
  const response = await instance.get(`/users/${id}`);
  return response.data;
};
