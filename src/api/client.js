import Axios from "axios";

export async function get(path) {
  const url = `https://bored-api.firebaseapp.com/api/activity${path}`;
  const { data } = await Axios.get(url);
  return data;
}
