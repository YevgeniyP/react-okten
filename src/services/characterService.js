import { apiService } from "./apiService";

export const characterService = {
  getList: (id) => apiService.get(`/character/${id}`),
};
