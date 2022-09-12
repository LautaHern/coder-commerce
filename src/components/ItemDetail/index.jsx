import './itemDetail.css';

import React from 'react';

export const ItemDetail = ({data}) => {
  return (
    <div className='container'>
      <div className='detail'>
        <img className='' src={data.image} alt="" />
        <div className='content'>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;