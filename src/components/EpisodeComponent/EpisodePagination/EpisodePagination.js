import styles from "./EpisodePagination.module.css";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const EpisodePagination = () => {
  const [, setQuery] = useSearchParams();

  const { prevPage, nextPage } = useSelector((state) => state.episodes);
  const next = () => {
    setQuery((prevState) => ({
      ...prevState,
      page: +prevState.get("page") + 1,
    }));
  };

  const prev = () => {
    setQuery((prevState) => ({
      ...prevState,
      page: +prevState.get("page") - 1,
    }));
  };

  return (
    <div className={styles.Pagination}>
      <input
        type="button"
        value={"Prev"}
        onClick={() => prev()}
        disabled={!prevPage}
      />
      <input
        type="button"
        value={"Next"}
        onClick={() => next()}
        disabled={!nextPage}
      />
    </div>
  );
};
