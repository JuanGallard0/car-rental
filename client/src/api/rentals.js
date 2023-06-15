import axios from "axios";
import { API_FUNCTIONS_ORIGIN } from "./API_FUNCTIONS_ORIGIN";

export const url = `${API_FUNCTIONS_ORIGIN}/rentals`;

async function createRental({ userIdToken, id_user, id_car }) {
  const endpoint = `${url}/create`;
  const res = await axios.post(
    endpoint,
    { id_user, id_car },
    {
      headers: {
        Authorization: `Bearer ${userIdToken}`,
      },
    }
  );
  return res.data;
}
export { createRental };
