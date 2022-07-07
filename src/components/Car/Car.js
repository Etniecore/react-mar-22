import css from './style.module.css';

export default function Car(props){

    let {item,deleteCar,setCar}=props;
    let {id,price,year,model} = item;

    return (
        <div className={css.container}>
            <h4>ID: {id}</h4>
            <div>Model name:{model}</div>
            <div>Price:{price}</div>
            <div>Year: {year}</div>
            <div className={css.tools}>
            <button onClick={()=>setCar(item)}> Edit </button>
            <button onClick={()=>deleteCar(id)}> Delete </button>
        </div>
        </div>
    )
}
