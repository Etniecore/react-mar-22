import {Route, Navigate, Routes} from "react-router-dom";

import {MainLayout} from "./Components";
import {LoginPage,RegisterPage} from "./Pages";
import {Cars} from "./Components";



function App() {
  return (
    <div>
   <Routes>
       <Route path={''} element={<MainLayout/>}>
           <Route index element={<Navigate to={'login '}/>}/>
           <Route path={'login'} element={<LoginPage/>}/>
           <Route path={'register'} element={<RegisterPage/>}/>
           <Route path={'cars'} element={<Cars/>}/>

       </Route>
   </Routes>
    </div>
  );
}

export default App;
