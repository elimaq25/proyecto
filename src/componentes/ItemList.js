import React from 'react'
import Item from "../componentes/Item";


    const ItemList = ({productos}) => {
      return (

        <div>
           {productos.map((iterar) => {
              return <Item key={iterar.id} item={iterar}/> 
               })}
     </div>
    
        );
      };


export default ItemList







