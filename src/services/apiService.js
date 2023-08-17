import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api";
export const apiService = axios.create({ baseURL });
