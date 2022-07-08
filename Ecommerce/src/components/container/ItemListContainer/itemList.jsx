import Item from "./item";

const ItemList = ({productos}) => {
    return( 
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>
            
            {productos.map ((product) =>(
                <Item productos={product} key={product.id} />
            ))}
        </div>
    )
}


export default ItemList