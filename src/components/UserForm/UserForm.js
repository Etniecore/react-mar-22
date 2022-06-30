import {useForm} from "react-hook-form";
import {saveUser} from "../../service";

export default function UserForm() {

    let {register, handleSubmit} = useForm({
        defaultValues:
            {
                name: '',
                username: '',
                email: ''
            }
    });

    const submit = (obj) => {
        saveUser(obj);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'Name'} {...register('name')}/>
                <input type="text" placeholder={'Username'} {...register('username')}/>
                <input type="text" placeholder={'Email'} {...register('email')}/>
                <button> Save user</button>
            </form>
        </div>
    )
}