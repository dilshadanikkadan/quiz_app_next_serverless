import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export const getRequest = (url:any, params:any) => {
  return axiosInstance.get(url, { params });
};

export const deleterequest = (url:any) => {
  return axiosInstance.delete(url);
};

export const postRequest = (url:any, params:any) => {
  try {
    return axiosInstance.post(url, params);
  } catch (error) {
    console.log(error);
  }
};