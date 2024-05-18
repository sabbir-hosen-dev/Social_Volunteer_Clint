
import useAppContex from "../../Hook/useContext";
import "./Card.css";
import { Link} from "react-router-dom";

function Card({ card }) {
  const { title, img} = card;
  const {setItem} =  useAppContex();

  const handleClick = () => {
    setItem(card)
  }


  return (
    <div className="card" onClick={handleClick} >
      <Link to="register" >
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default Card;
