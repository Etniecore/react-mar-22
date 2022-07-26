import {Outlet} from "react-router-dom";
import {Header} from "../index";

export default function MainLayout(){
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}