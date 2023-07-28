import { apiService } from "./apiService";

const postService = {
  getById: (id) => apiService.get(`/posts/${id}`),
};

export { postService };
