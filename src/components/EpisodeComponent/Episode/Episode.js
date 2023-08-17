import styles from "./Episode.module.css";
import { useNavigate } from "react-router-dom";

export const Episode = ({ episodeItem }) => {
  const { name, episode, created, characters } = episodeItem;
  const navigate = useNavigate();

  return (
    <div
      className={styles.Episode}
      onClick={() => navigate("/characters", { state: { id: characters } })}
    >
      <h3>
        {episode}. {name}
      </h3>
      <p>Created: {created}</p>
    </div>
  );
};
