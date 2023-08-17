import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CharacterItem } from "../CharacterItem/CharacterItem";
import styles from "./CharacterList.module.css";
import { characterAction } from "../../../store";

export const CharacterList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { characters, header } = useSelector((state) => state.characters);

  return (
    <div>
      <input
        type="button"
        value={"Back"}
        onClick={() => {
          dispatch(characterAction.setEpisodeName(""));
          navigate(-1);
        }}
      />
      <div className={styles.CharacterList}>
        {characters.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};
