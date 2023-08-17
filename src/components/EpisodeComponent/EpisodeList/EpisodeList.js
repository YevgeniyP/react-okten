import { useSelector } from "react-redux";

import { Episode } from "../Episode/Episode";
import { EpisodePagination } from "../EpisodePagination/EpisodePagination";
import styles from "./EpisodeList.module.css";

export const EpisodeList = () => {
  const { isLoading, episodes } = useSelector((state) => state.episodes);

  return (
    <>
      {isLoading && <div>LOADING...</div>}
      {!isLoading && (
        <>
          <div className={styles.EpisodeList}>
            {episodes.map((episode) => (
              <Episode key={episode.id} episodeItem={episode} />
            ))}
          </div>
          <EpisodePagination />
        </>
      )}
    </>
  );
};
