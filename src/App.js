
import './App.css';
import {Link} from "react-router-dom";
import {Route, Routes} from "react-router";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";

function App() {
  return (
    <div >
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'users'}>Users</Link></li>
      </ul>
      <div>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'users'} element={<UserPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
