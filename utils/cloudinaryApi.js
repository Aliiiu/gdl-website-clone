import axios from "axios";
import React from "react";

const cloudinaryApi = () => {
  const axiosInstance = axios.create({
    baseURL: "https://api.cloudinary.com/v1_1/dbkiemdqb/image/upload",
    timeout: 30000,
  });

  return axiosInstance;
};

export default cloudinaryApi;
