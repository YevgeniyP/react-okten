import { apiService } from "./apiService";

const postService = {
  getAll: () => apiService.get("/posts"),
};

export { postService };
