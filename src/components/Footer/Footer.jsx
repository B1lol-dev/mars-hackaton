import "./Footer.css";

import brend_img from "../../assets/footer/brend.png";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <h1>наши бренды</h1>

        <div className="footer_brends">
          <Brend />
          <Brend />
          <Brend />
          <Brend />
        </div>
      </div>
    </footer>
  );
}

export function Brend() {
  return (
    <div className="brend">
      <img src={brend_img} alt="cocofine jewelery" />
    </div>
  );
}
