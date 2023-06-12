import axios from "axios";
import { API_FUNCTIONS_ORIGIN } from "./API_FUNCTIONS_ORIGIN";

const url = `${API_FUNCTIONS_ORIGIN}/auth`;

async function signIn({ email, password }) {
  const endpoint = `${url}/login`;
  const res = await axios.post(endpoint, { email, password });
  return res.data;
}

async function signUp({ email, password, first_name, last_name }) {
  const endpoint = `${url}/register`;
  const res = await axios.post(endpoint, {
    email,
    password,
    first_name,
    last_name,
  });
  return res.data;
}

export { signIn, signUp };
