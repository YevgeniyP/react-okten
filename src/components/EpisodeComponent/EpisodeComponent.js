import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { episodesAction } from "../../store";
import { EpisodeList } from "./EpisodeList/EpisodeList";

export const EpisodeComponent = () => {
  const dispatch = useDispatch();
  const [query] = useSearchParams({ page: "1" });

  useEffect(() => {
    dispatch(episodesAction.getAll({ page: query.get("page") }));
  }, [query, dispatch]);
  return <EpisodeList />;
};
