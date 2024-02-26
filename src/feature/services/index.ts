import axios from "axios";
import { TUser } from "../../interface";

const SERVER_URL = "http://localhost:3005/api";

export const registerUser = (user: TUser) => {
  const url = `${SERVER_URL}/register`;
  return axios.post(url, user);
};

export const loginUser = (user:TUser) => {
  const url = `${SERVER_URL}/login`;
  return axios.post(url,user);
};

export const verifyToken = (token: string) => {
  const url = `${SERVER_URL}/verify_account/${token}`;
  return axios.get(url);
};

export const getBooks = () => {
  const url = `${SERVER_URL}/books`;
  return axios.get(url);
};
