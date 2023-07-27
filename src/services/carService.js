import { apiService } from "./apiService";

const carService = {
  getAll: () => apiService.get("/cars"),
  create: (car) => apiService.post("/cars", car),
  update: (id, car) => apiService.put(`/cars/${id}`, car),
  delete: (id) => apiService.delete(`/cars/${id}`),
};

export { carService };
