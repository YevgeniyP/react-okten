import { CharacterList } from "./CharacterList/CharacterList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { characterAction } from "../../store";
import { useLocation } from "react-router-dom";

export const CharacterComponent = () => {
  const dispatch = useDispatch();

  const {
    state: { id },
  } = useLocation();

  useEffect(() => {
    dispatch(characterAction.getList({ id }));
  }, [dispatch, id]);

  return <CharacterList />;
};
