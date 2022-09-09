import { FC, ReactNode, useMemo } from "react";
import present1 from "assets/images/present1.png";
import present2 from "assets/images/present2.png";
import SaleItem from "components/SaleItem";
import uuid from "react-uuid";
import { dataSaleItems, dataSaleItemsSmallScreen } from "./data";

import "./styles.scss";

const Section2: FC = () => {
  const saleItems = useMemo<ReactNode>(() => (
    dataSaleItems.map((elem) => (
      <SaleItem
        key={uuid()}
        title={elem.title}
        value={elem.value}
        text={elem.text}
      />
    ))
  ), []);

  const saleItemsSmallScreen = useMemo<ReactNode>(() => (
    dataSaleItemsSmallScreen.map((elem) => (
      <SaleItem
        key={uuid()}
        title={elem.title}
        secondTitle={elem.secondTitle}
        value={elem.value}
        text={elem.text}
      />
    ))
  ), []);

  return (
    <div className="Section2">
      <section className="Section2__content">
        <div className="Section2__sale-items">
          {saleItems}
        </div>
        <div className="Section2__sale-items-sm">
          {saleItemsSmallScreen}
        </div>

        <div className="Section2__presents">
          <img
            className="Section2__present1"
            src={present1}
            alt="present"
          />
          <img
            className="Section2__present2"
            src={present2}
            alt="present"
          />
        </div>
      </section>
    </div>
  );
};

export default Section2;
