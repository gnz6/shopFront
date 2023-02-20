import axios from "axios";

const shopApi = axios.create({
  baseURL: "http://localhost:3001",
});

shopApi.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export default shopApi;
