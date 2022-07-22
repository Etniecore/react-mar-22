import {useSelector} from "react-redux";

export default function Count(){

    const {count} = useSelector (state=>state.countReducer);

    return(
        <div>
            <h1>Count state: {count} </h1>
        </div>
    )
}