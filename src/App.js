
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {

  let store = useSelector(state=>state); // container like in UseState (i.e: users)
  let dispatch = useDispatch(); // setter for container as in UseState (i.e: SetUsers)

  return (
    <div >
            <div>{store}</div>
      <button onClick={()=>{dispatch({type:'inc', payload:1})}}>Inc</button>
      <button onClick={()=>{dispatch({type:'dec', payload:1})}}>Dec</button>
      <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>

    </div>
  );// type: it is a type of action we must do// payload it is like how many steps we should do.
}

export default App;
