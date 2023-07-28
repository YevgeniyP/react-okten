import { apiService } from "./apiService";

const todoService = {
  getAll: () => apiService.get("/todos"),
};

export { todoService };
