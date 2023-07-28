import { apiService } from "./apiService";

const albumService = {
  getAll: () => apiService.get("/albums"),
};

export { albumService };
