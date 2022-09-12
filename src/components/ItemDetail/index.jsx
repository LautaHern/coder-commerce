import './itemDetail.css';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';

import React, {useState} from 'react';

export const ItemDetail = ({data}) => {

  const  [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    setGoToCart(true);
  }

  return (
    <div className='container'>
      <div className='detail'>
        <img className='detail__image' src={data.image} alt="" />
        <div className='content'>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          {
            goToCart
              ? <Link to='/cart'>Terminar compra</Link>
              : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;