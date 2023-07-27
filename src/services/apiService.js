import axios from "axios";

const baseURL = "http://owu.linkpc.net/carsAPI/v1";

const apiService = axios.create({ baseURL });

export { apiService };
