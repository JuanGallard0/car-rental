import axios from "axios";
import { API_FUNCTIONS_ORIGIN } from "./API_FUNCTIONS_ORIGIN";

const url = `${API_FUNCTIONS_ORIGIN}/users`;

async function getUserById({ userIdToken, userId }) {
  const endpoint = `${url}/users/${userId}`;
  console.log(`userIdToken: ${userIdToken}`);
  const res = await axios.get(endpoint, {
    headers: {
      Authorization: `Bearer ${userIdToken}`,
    },
  });
  return res.data;
}

export { getUserById };
