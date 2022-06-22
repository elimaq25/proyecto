import React, { useContext, useState, useEffect } from 'react'
import carrito from "../imagenes/carrito.png"
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'



const CartWidget = () => {
 const [addItem, removeItem, clear, isInCart, devuelveCantItems, items] = useContext(CartContext)

  return (
    <>
    <div>
        <div className='cart' >
        <Link to="/cart" >
        <img src={carrito} alt="logo" width="25"></img>
        </Link>
            <span className='item__total'>{devuelveCantItems()}</span>
            
        </div>
    </div>
    </>
  )
}

export default CartWidget