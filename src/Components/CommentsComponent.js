import {Link} from "react-router-dom";

export default function CommentsComponent({item}){

    const {body,id}=item;

    return(
        <div>
            <Link to={item.id.toString()}> Comment{id}:</Link>
            <div>{body}</div>
        </div>
    )//Lift item.id to Route ID of PostPage element and then retrieve it via UseParams
}