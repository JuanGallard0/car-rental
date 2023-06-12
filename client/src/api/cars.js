import axios from "axios";
import { API_FUNCTIONS_ORIGIN } from "./API_FUNCTIONS_ORIGIN";

export const url = `${API_FUNCTIONS_ORIGIN}/cars`;

async function getAllCars() {
  const endpoint = `${url}/`;
  const res = await axios.get(endpoint);
  return res.data;
}
export { getAllCars };
