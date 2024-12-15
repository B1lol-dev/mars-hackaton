import "./Card.css";

import watch_img from "../../assets/card/watch.png";

export function Card({ title, price }) {
  return (
    <div
      className="card"
      onClick={() => {
        location.pathname = "/info";
      }}
    >
      <div className="card_image">
        <img src={watch_img} alt="watch" />
      </div>
      <div className="card_info">
        <h4>{title}</h4>
        <p>{price} руб.</p>
      </div>
    </div>
  );
}
