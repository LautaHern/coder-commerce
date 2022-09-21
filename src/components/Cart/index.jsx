import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return(
      <div className='text-center'>
        <p>No hay elementos en el carrito</p>
        <Link className='text-white' to='/'>Hacer compras</Link>
      </div>
    )
  }

  return (
    <>
      {
       cart.map(product => <ItemCart key={product.id} product={product} />) 
      }
      <div className='text-center'>
        <p className='h3'>
        Total: $ {totalPrice()}
      </p>
      <Link className='text-white' to='/'>Seguir comprando</Link>
      </div>
      
    </>
  )
}

export default Cart;