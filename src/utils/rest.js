import axios from "axios";
const apiUrl = "http://localhost:3000/";
const REST = {
  get(route, params = {}) {
    return axios.get(apiUrl + route, { params });
  },

  post(route, data) {
    return axios.post(apiUrl + route, data);
  },
};

export default REST;

export function createUser(user) {
  return REST.post("users", user);
}
