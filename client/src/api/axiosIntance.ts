import axios, { Axios } from "axios";

export const baseURL = "http://localhost:8080/api/v1";

const axiosInstance: Axios = axios.create({ baseURL });

export default axiosInstance;
