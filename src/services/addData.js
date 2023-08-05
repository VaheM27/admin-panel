import axios from "axios";
const apiUrl = "https://different-dirndl-deer.cyclic.app/api/data";

export function addData(data) {
  return axios.post(apiUrl, data);
}
