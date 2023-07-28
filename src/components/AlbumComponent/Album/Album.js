const Album = ({ album }) => {
  const { id, title } = album;
  return (
    <h3>
      {id}. {title}
    </h3>
  );
};

export { Album };
