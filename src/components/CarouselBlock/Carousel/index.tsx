import { FC, ReactNode, useMemo } from "react";
import { ReactComponent as Arrow } from "assets/icons/arrow.svg";
import { dataDoctors } from "components/MainPageBlock/Section4/data";
import { ReactComponent as Corner } from "assets/icons/corner.svg";
import doctor from "assets/images/doctor.png";
import classNames from "classnames";
import uuid from "react-uuid";
import CarouselItem from "../CarouselItem";

import "./styles.scss";

const Carousel: FC = () => {
  const carouselItems = useMemo<ReactNode>(() => (
    dataDoctors.map((elem) => (
      <CarouselItem
        key={uuid()}
        firstName={elem.firstName}
        lastName={elem.lastName}
        speciality={elem.speciality}
        image={doctor}
      />
    ))
  ), []);

  const pointButtons = useMemo(() => (
    Array.from({ length: 7 }).map((_, index) => {
      const buttonClassName = classNames("Carousel__button-point", {
        "Carousel__button-point_active": index === 3,
      });

      return (
        <button
          key={uuid()}
          className={buttonClassName}
        />

      );
    })
  ), []);

  return (
    <div className="Carousel">
      <div className="Carousel__content">
        <button className="Carousel__button-arrow Carousel__button-arrow_left"><Arrow /></button>

        <div className="Carousel__wrap">
          <div className="Carousel__image-corner Carousel__image-corner_top-right"><Corner /></div>
          <div className="Carousel__image-corner Carousel__image-corner_bottom-left"><Corner /></div>
          {carouselItems}
        </div>

        <button className="Carousel__button-arrow"><Arrow /></button>

      </div>
      <div className="Carousel__button-points">{pointButtons}</div>
    </div>
  );
};

export default Carousel;
