import { FC } from "react";
import  { ICarouselItemProps } from "./types";

import "./styles.scss";

const CarouselItem: FC< ICarouselItemProps> = ({
  firstName, lastName, speciality, image,
}) => (
  <div className="CarouselItem">
    <img
      className="CarouselItem__image"
      src={image}
      alt="doctor"
    />
    <p className="CarouselItem__name">
      {lastName}
      <br />
      {firstName}
    </p>
    <p className="CarouselItem__speciality">{speciality}</p>
  </div>
);

export default CarouselItem;
