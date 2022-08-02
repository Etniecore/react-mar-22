import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {authActions} from "../../Redux/authSlice/authSlice";


export default function LoginForm(){

    const {register,handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = async (user) =>{
        const response = await dispatch(authActions.login({user:user}));
        if(!response.error){
            navigate('/cars')
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={"text"}
                       placeholder={"username"}
                       {...register('username')}/>
                <input type={"text"}
                       placeholder={"password"}
                       {...register('password')}/>
                <button> Submit </button>
            </form>
        </div>
    )
}