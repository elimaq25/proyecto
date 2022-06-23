import React, {useContext} from 'react'
import {CartContext} from './CartContext'
import {Link} from 'react-router-dom'


const CartItem = ({item}) => {
    const [addItem, removeItem, clear, isInCart, items] = useContext(CartContext)
    return (
      <>
      <table className='compra'>
        <thead className='encabezado'>
          <tr>
            <th className='compraCart'>Producto</th> <th className='compraCart'>Cantidad</th> <th className='compraCart'>Precio unitario</th> <th className='compraCart'>Subtotal</th>
          </tr>
        </thead>
      <tr >
        <td className='compraCart' >{item.title}</td>
        <td className='compraCart' >{item.qty}</td>
        <td className='compraCart' >$ {item.precio}</td>
        <td className='compraCart' >$ {item.precio * item.qty}</td>
        <td >
          <Link to="/del">
            <button onClick={() =>removeItem(item.id)}>
              Eliminar
            </button>
          </Link>
            
        </td>
        
      </tr>
      </table>
      </>
    )
  }


// const CartItem = ({item}) => {
//     const [addItem, removeItem, clear, isInCart, items] = useContext(CartContext)
//     return (
//       <tr >
//         <td >{item.title}</td>
//         <td >{item.qty}</td>
//         <td >$ {item.precio}</td>
//         <td >$ {item.precio * item.qty}</td>
//         <td >
//           <Link to="/del">
//             <button onClick={() =>removeItem(item.id)}>
//               Eliminar
//             </button>
//           </Link>
            
//         </td>
//         {/* <button onClick={() => clear(items)} >Vaciar carrito</button> */}
//       </tr>
//     )
//   }

  export default CartItem