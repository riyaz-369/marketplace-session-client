import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  // interceptor
  axiosSecure.interceptors.response.use(
    (res) => {
      console.log("before response");
      return res;
    },
    async (err) => {
      console.log("error from axios interceptor", err);
      if (err.response.status === 401 || err.response.status === 403) {
        await logOut();
        navigate("/logIn");
      }
      return Promise.reject(err);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
