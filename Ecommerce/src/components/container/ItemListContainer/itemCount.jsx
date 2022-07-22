import{useState} from "react"
export const ItemCount = ({stock, onAdd, initial})=>{
    const [count, setCount] = useState(initial);

    const restar = ()=>{
        if (count > initial) {
            setCount(count - 1)
        }
    }
    const sumar = ()=>{
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return(
        <>
        <button onClick={restar}> - </button>
        <span> {count} </span>
        <button onClick={sumar}> + </button>
        <button disabled={count===0 } onClick={()=>onAdd(count)}> Agregar al carrito </button>
        </>
    )

}