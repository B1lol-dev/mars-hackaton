import "./About.css";

import { Card } from "../Card/Card";

export function About() {
  return (
    <section id="about">
      <div className="about_wrapper">
        <div className="about_cards">
          <h2>СЕЗОН 2020/21</h2>

          <div className="about_cards_wrapper">
            <Card title={"Louis XVI ATHOS"} price={"165 000"} />
            <Card title={"Louis XVI ATHOS"} price={"165 000"} />
            <Card title={"Louis XVI ATHOS"} price={"165 000"} />
          </div>
        </div>
        <div className="about_collection">
          <h2>Новая коллекция</h2>
          <button type="button">Каталог</button>
        </div>
        <div className="about_suit"></div>
        <div className="about_info">
          <h2>коллекция 2018</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum
            ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis
            nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque
            magna consectetur. Amet convallis quis gravida facilisis vulputate.
            Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit
            quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent
            viverra nulla nullam natoque volutpat curabitur auctor. Viverra
            viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam
            a aliquam egestas leo orci pharetra sed diam.
          </p>
          <button type="button">посмотреть коллекцию</button>
        </div>
      </div>
    </section>
  );
}
