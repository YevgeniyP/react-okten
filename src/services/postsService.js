import { jsonplaceholderService } from "./apiService";
import { jsonplaceholder } from "./urls";

const postsService = {
  getAll: () => jsonplaceholderService.get(jsonplaceholder.posts),
};

export { postsService };
