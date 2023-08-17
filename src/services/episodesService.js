import { apiService } from "./apiService";

export const episodesService = {
  getAll: (page) => apiService.get("/episode", { params: { page } }),
};
