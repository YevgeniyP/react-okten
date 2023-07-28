import { apiService } from "./apiService";

const commentService = {
  getAll: () => apiService.get("/comments"),
};

export { commentService };
