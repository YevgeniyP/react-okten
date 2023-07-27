import { apiService } from "./apiService";

const commentService = {
  create: (comment) => apiService.post("/comments", comment),
};

export { commentService };
