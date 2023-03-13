import { environment } from "../environments/environment";
import axios from "axios";

const baseURL = environment.serverURL;

const getDogURL = baseURL;

export function fetchDog() {
  return axios({
    method: "get",
    url: getDogURL,
  });
}
