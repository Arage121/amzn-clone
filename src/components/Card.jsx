import React from 'react';
import '../styles/card.css'

const Card = ({filteredData}) => {
  return (
    <div className='mainDiv'>
      {
        filteredData.map(({id, title, description, images, rating, price}) => (
            <div className='cardDiv' key={id}>
                <div className='imgDiv'>
                  <img src={images[0]} alt="not available" />
                </div>
                <div className='detailsDiv'>
                    <p className='titlePara'>{title}</p>
                    <p className='ratingPara'>{rating} Rating</p>
                    <p className='pricePara'><small>&#8377;</small>{price}</p>
                  <p>{description}</p>
                  <div className='btnDiv'>
                    <button>-</button>
                    <p>0</p>
                    <button>+</button>
                  </div>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Card;
