import { owuService } from "./apiService";
import { owu } from "./urls";

const carsService = {
  getAll: () => owuService.get(owu.cars),
};

export { carsService };
