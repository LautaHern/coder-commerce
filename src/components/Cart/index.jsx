import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart';

const Cart = () => {
  const { cart, totalPrice, deleteAll, totalProducts } = useCartContext();

  const order = {
      buyer: {
        name: 'Lalo Landa',
        email: 'lalo@coder.com.ar',
        phone: '255345',
        address: '742 Evergreen Terrace'
      },
      items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
      date: new Date(),
      total: totalPrice(),
  }

  const handleClick = ()=> {
    const db = getFirestore();
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, order)
      .then(({ id }) => (
        alert(`
        Id de compra Nº ${ id }
        Fecha: ${order.date}
        Nombre: ${order.buyer.name}
        Email: ${order.buyer.email}
        Teléfono: ${order.buyer.phone}
        Dirección: ${order.buyer.address}
        Items: ${totalProducts()}
        Total: $${order.total}
        ¡Muchas gracias por confiar en nosotros!`)))
  }

  if (cart.length === 0) {
    return(
      <div className='text-center'>
        <p>No hay elementos en el carrito</p>
        <Link className='btn btn-dark text-white rounded-pill' to='/'>Hacer compras</Link>
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
      <button className='btn btn-dark border text-white rounded-pill' onClick={handleClick}>Comprar</button>
      <Link className='btn btn-dark text-white rounded-pill' to='/'>Seguir comprando</Link>
      <button className='btn btn-dark text-white rounded-pill' onClick={deleteAll}>Vaciar carrito</button>
      </div>
      
    </>
  )
}

export default Cart;