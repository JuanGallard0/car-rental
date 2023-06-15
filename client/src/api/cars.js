import axios from "axios";
import { API_FUNCTIONS_ORIGIN } from "./API_FUNCTIONS_ORIGIN";

export const url = `${API_FUNCTIONS_ORIGIN}/cars`;

async function getAllCars() {
  const endpoint = `${url}/`;
  const res = await axios.get(endpoint);
  return res.data;
}

async function updateAvailability({ userIdToken, id_car, is_available }) {
  const endpoint = `${url}/updateavailability`;
  const res = await axios.patch(
    endpoint,
    { id_car, is_available },
    {
      headers: {
        Authorization: `Bearer ${userIdToken}`,
      },
    }
  );
  return res.data;
}

export { getAllCars, updateAvailability };
