import axios from "axios";

import { jsonplaceholder, owu } from "./urls";

const jsonplaceholderService = axios.create({
  baseURL: jsonplaceholder.baseURL,
});

const owuService = axios.create({
  baseURL: owu.baseURL,
});

export { jsonplaceholderService, owuService };
