import axios from "axios";
import { useState } from "react";

const baseURL = "https://test-site.gdlapi.com.ng";
export const useRequest = ({ url, method, onSuccess }) => {
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const {error, addError} = useError()

  const makeRequest = async body => {
    setLoading(true);

    try {
      setErrors([]);
      const response = await axios[method](baseURL + url, body);
      setLoading(false);
      if (onSuccess) onSuccess(response.data.data);
      // console.log(response.data);
      setData(response.data.data || response.data);
      return response.data;
    } catch (err) {
      setLoading(false);
      setErrors(err.response);
      console.log(err.response);
    }
  };

  return { makeRequest, errors, loading, data };
};
