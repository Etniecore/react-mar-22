import './App.css';
import {Link, Route,Routes} from "react-router-dom";
import {AlbumsPage, CommentsPage, TodosPage,PostsPage} from "./Services";

function App() {
  return (
      <div>

          <div>
              <h2><Link to={'/'}> Home </Link></h2>
              <ul>
                  <li><Link to={'/todos'}> Todos </Link></li>
                  <li><Link to={'/albums'}> Albums </Link></li>
                  <li><Link to={'/comments'}> Comments </Link></li>
              </ul>
          </div>

          <div>
              <Routes>

                  <Route path={'/todos'}
                         element={<TodosPage/>}/>

                  <Route path={'/albums'}
                         element={<AlbumsPage/>}/>

                  <Route path={'/comments'}
                         element={<CommentsPage/>}>
                      <Route path={':postId'}
                             element={<PostsPage/>}/>
                  </Route>



              </Routes>



          </div>







           </div>
  );
}

export default App;
