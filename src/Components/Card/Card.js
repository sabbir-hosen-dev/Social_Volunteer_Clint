import React from 'react'
import "./Card.css"

function Card({card}) {
  const {title,img} = card
  return (
    <article className='card'>
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <h3>{title}</h3>
    </article>
  )
}

export default Card
