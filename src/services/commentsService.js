import { jsonplaceholderService } from "./apiService";
import { jsonplaceholder } from "./urls";

const commentsService = {
  getAll: () => jsonplaceholderService.get(jsonplaceholder.comments),
};

export { commentsService };
