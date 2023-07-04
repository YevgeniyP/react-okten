import ListItem from "./components/ListItem";

const App = () => {
  return (
    <div className="App">
      <ListItem
        id={162}
        name={"Ice-T"}
        status={"Alive"}
        species={"Alien"}
        gender={"Male"}
        image={"https://rickandmortyapi.com/api/character/avatar/162.jpeg"}
      />{" "}
      <ListItem
        id={183}
        name={"Johnny Depp"}
        status={"Alive"}
        species={"Human"}
        gender={"Male"}
        image={"https://rickandmortyapi.com/api/character/avatar/183.jpeg"}
      />{" "}
      <ListItem
        id={608}
        name={"Jesus Christ"}
        status={"Alive"}
        species={"Human"}
        gender={"Male"}
        image={"https://rickandmortyapi.com/api/character/avatar/608.jpeg"}
      />
    </div>
  );
};

export default App;
