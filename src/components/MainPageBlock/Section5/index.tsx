import WebinarPoint from "components/WebinarPoint";
import { FC, ReactNode, useMemo } from "react";
import bacterium2 from "assets/images/bacterium2.png";
import uuid from "react-uuid";
import Button from "components/Button";
import nipple from "assets/images/nipple.png";
import { dataWebinarPoints } from "./data";
import { dataButtons } from "../Section4/data";

import "./styles.scss";

const Section5: FC = () => {
  const webinarPoints = useMemo<ReactNode>(() => {
    const underlinedText: (string | undefined)[] = [undefined, undefined, undefined, "стандартной программы"];

    return (
      dataWebinarPoints.map((elem, index) => (
        <div className="Section5__points_column">
          {elem.map((item) => (
            <WebinarPoint
              key={uuid()}
              text={item}
              underlined={underlinedText[index]}
            />
          ))}
        </div>
      ))
    );
  }, []);

  const buttons = useMemo<ReactNode>(() => (
    dataButtons.map((elem) => (
      <div className="Section5__button-wrap">
        <Button
          key={uuid()}
          name={elem.name}
          fullfilled={elem.fullfilled}
        />
      </div>
    ))
  ), []);

  return (
    <section className="Section5">
      <div className="Section5__content">
        <p className="Section5__title">ПРОГРАММА ВЕБИНАРА</p>
        <p className="Section5__date">14 августа 2020</p>
        <p className="Section5__channel">Youtube-канал «Клиника Екатерининская»</p>

        <div className="Section5__points">{webinarPoints}</div>

        <img
          className="Section5__image-bacterium"
          src={bacterium2}
          alt="bacterium2"
        />

        <img
          className="Section5__image-nipple"
          src={nipple}
          alt="nipple"
        />

        <div className="Section5__buttons">{buttons}</div>
      </div>
    </section>
  );
};

export default Section5;
