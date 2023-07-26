import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const apiService = axios.create({ baseURL });
const userService = {
  create: (user) => apiService.post("/users", user),
};

export { userService };
