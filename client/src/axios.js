import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "mysql://root:3gf3lV1plU45pxuQ36sh@containers-us-west-125.railway.app:6115/railway/api/",
  withCredentials: true,
});