import React from "react";
import "./Card.css";
import { Link} from "react-router-dom";

function Card({ card }) {
  const { title, img} = card;

  return (
    <article className="card" >
      <Link to="register" card={card} >
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <h3>{title}</h3>
      </Link>
    </article>
  );
}

export default Card;
