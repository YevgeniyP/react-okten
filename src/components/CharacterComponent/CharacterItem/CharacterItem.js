import styles from "./CharacterItem.module.css";

export const CharacterItem = ({ character }) => {
  const { id, name, status, species, gender, image } = character;

  return (
    <div className={styles.CharacterItem}>
      <img src={image} alt={name} />
      <h2>
        {id}. {name}
      </h2>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};
