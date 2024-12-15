import "./CardPage.css";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import watch from "../../assets/card/watch.png";

export default function CardPage() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <div className="product_img">
              <img src={watch} alt="" />
            </div>
            <div className="product_text">
              <h1>Louis XVI ATHOS</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
                laboriosam totam atque aspernatur eaque doloremque adipisci,
                quos et est, itaque nihil perspiciatis error odio sit sed eum ea
                officiis non asperiores vel facere enim praesentium quasi
                impedit! Impedit neque obcaecati sequi quae officiis. Inventore
                architecto repellat soluta saepe nesciunt deleniti.
              </p>
              <button type="button">165 000 руб.</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
