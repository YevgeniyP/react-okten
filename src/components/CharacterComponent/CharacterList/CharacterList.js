import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CharacterItem } from "../CharacterItem/CharacterItem";
import styles from "./CharacterList.module.css";

export const CharacterList = () => {
  const { characters } = useSelector((state) => state.characters);
  const navigate = useNavigate();

  return (
    <div>
      <input type="button" value={"Back"} onClick={() => navigate(-1)} />
      <div className={styles.CharacterList}>
        {characters.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};
