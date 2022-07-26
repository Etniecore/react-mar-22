import {useNavigate} from "react-router-dom";
import css from './header.module.css'


export default function Header(){
    const navigate = useNavigate();
    return(
        <div className={css.Header}>
            <button className={css.btn} onClick={()=>navigate('/login')}>Login</button>
            <button className={css.btn}onClick={()=>navigate('/register')}>Register</button>
        </div>
    )
}