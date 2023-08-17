import styles from "./Episode.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { characterAction } from "../../../store";

export const Episode = ({ episodeItem }) => {
  const { name, episode, created, characters } = episodeItem;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  return (
    <div
      className={styles.Episode}
      onClick={() => {
        navigate("/characters", { state: { id: characters } });
        dispatch(characterAction.setEpisodeName(name));
      }}
    >
      <h3>
        {episode}. {name}
      </h3>
      <p>Created: {created}</p>
    </div>
  );
};
