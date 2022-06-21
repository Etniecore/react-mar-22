import './App.css';
import Characters from "./components/characters/Characters";

function App() {
  return (
    <div >
      <Characters
      id={602}
      name={"Cookies Guy"}
      status={"Alive"}
      species={"Human"}
      gender={"Male"}
      image={"https://rickandmortyapi.com/api/character/avatar/602.jpeg"}
      />
        <Characters
        id={266}
        name={"Piece of Toast"}
        status={"Alive"}
        species={"unknown"}
        gender={"Genderless"}
        image={"https://rickandmortyapi.com/api/character/avatar/266.jpeg"}
        />
        <Characters
        id={677}
        name={"Japheth's Eldest Son"}
        status={"Dead"}
        species={"Humanoid"}
        gender={"Male"}
        image={"https://rickandmortyapi.com/api/character/avatar/677.jpeg"}
        />
        <Characters
        id={90}
        name={"Daron Jefferson"}
        status={"Alive"}
        species={"Alien"}
        gender={"Male"}
        image={"https://rickandmortyapi.com/api/character/avatar/90.jpeg"}
        /> <Characters
        id={751}
        name={"Changeformer"}
        status={"Dead"}
        species={"Robot"}
        gender={"Male"}
        image={"https://rickandmortyapi.com/api/character/avatar/751.jpeg"}
        />
        <Characters
        id={95}
        name={"Dipper and Mabel Mortys"}
        status={"unknown"}
        species={"Human"}
        gender={"unknown"}
        image={"https://rickandmortyapi.com/api/character/avatar/95.jpeg"}
        />
    </div>
  );
}

export default App;
