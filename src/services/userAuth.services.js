import { environment } from "../environments/environment";
import axios from "axios";

const baseURL = environment.serverURL;

const getUserAuthURL = baseURL;

export function fetchUserAuth() {
  return axios({
    method: "Post",
    url: getUserAuthURL,
    //body
  });
}
