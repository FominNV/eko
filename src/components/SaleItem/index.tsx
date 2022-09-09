import { FC, useMemo, ReactNode } from "react";
import  { ISaleItemProps } from "./types";

import "./styles.scss";

const SaleItem: FC< ISaleItemProps> = ({
  title, value, text, secondTitle,
}) => {
  const title2 = useMemo<ReactNode>(() => {
    if (secondTitle) {
      return <p className="SaleItem__title-second">{secondTitle}</p>;
    } return undefined;
  }, [secondTitle]);

  return (
    <div className="SaleItem">
      <p className="SaleItem__title">{title}</p>
      {title2}
      <p className="SaleItem__value">
        -
        {value}
        %
      </p>
      <p className="SaleItem__text">{text}</p>
    </div>
  );
};

export default SaleItem;
