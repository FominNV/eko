import { FC } from "react";
import Carousel from "components/CarouselBlock/Carousel";
import bacterium from "assets/images/bacterium.png";
import { ReactComponent as Corner } from "assets/icons/corner.svg";
import doctor from "assets/images/doctor.png";
import thermometer from "assets/images/thermometer.png";

import "./styles.scss";

const Section4: FC = () => (
  <section className="Section4">
    <p className="Section4__title">САМАЯ СИЛЬНАЯ КОМАНДА РЕПРОДУКЦИИ В ЮФО</p>
    <div className="Section4__carousel-wrap">
      <Carousel />
    </div>

    <div className="Section4__info">
      <p className="Section4__text Section4__text_small-screen">
        Руководитель Центра Репродукции
        и куратор онлайн встречи
      </p>

      <div className="Section4__image-wrap">
        <img
          className="Section4__image"
          src={doctor}
          alt="doctor"
        />
        <div className="Section4__image-corner Section4__image-corner_top-right"><Corner /></div>
        <div className="Section4__image-corner Section4__image-corner_bottom-left"><Corner /></div>
      </div>

      <div className="Section4__names">
        <p className="Section4__name">
          Семенова
          <br />
          Надежда Андреевна
        </p>
        <p className="Section4__text Section4__text_large-screen">
          Руководитель Центра Репродукции
          и куратор онлайн встречи
        </p>
        <p className="Section4__text">Врач высшей категории, кандидат медицинских наук, репродуктолог</p>
        <p className="Section4__text">Стаж работы – 12 лет</p>
      </div>

      <img
        className="Section4__bacterium"
        src={bacterium}
        alt="bacterium"
      />

    </div>

    <img
      className="Section4__thermometer"
      src={thermometer}
      alt="thermometer"
    />
  </section>
);

export default Section4;
