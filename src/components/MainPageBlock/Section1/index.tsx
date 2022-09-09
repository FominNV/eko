import { FC } from "react";
import logo from "assets/images/logo.png";
import test from "assets/images/test.png";
import Button from "../../Button";

import "./styles.scss";

const Section1: FC = () => (
  <section className="Section1">
    <div className=" Section1__background Section1__background_left" />
    <div className="Section1__background Section1__background_right" />
    <div className="Section1__line" />

    <div className="Section1__container">
      <div className="Section1__logo">
        <img
          src={logo}
          alt="logo"
          className="Section1__logo_image"
        />
        <p className="Section1__logo_text">
          Клиника
          <br />
          Екатерининская
        </p>

        <p className="Section1__logo_text-md">
          Центр репродукции
          <br />
          Клиники Екатерининская
        </p>
      </div>

      <div className="Section1__content">
        <img
          className="Section1__image-test"
          src={test}
          alt="test"
        />

        <div className="Section1__info">
          <p className="Section1__text1">14 Августа в 14:00</p>
          <p className="Section1__text-md">ЭТАПЫ ЭКО</p>
          <p className="Section1__text2">
            ОНЛАЙН ЗНАКОМСТВО С КОМАНДОЙ ЭКО
            ВМЕСТЕ С РЕПРОДУКТОЛОГОМ
          </p>
          <p className="Section1__text3">В прямом эфире мы пройдем через все этапы ЭКО вместе с действующей командой Клиники Екатерининская.</p>
          <p className="Section1__text4">
            ЭКО
            <br />
            <p className="Section1__text4 Section1__text4_small">ПРОСТО О СЛОЖНОМ</p>
          </p>

          <div className="Section1__btn-wrap">
            <Button
              name="ХОЧУ ВЫИГРАТЬ"
              fullfilled
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Section1;
