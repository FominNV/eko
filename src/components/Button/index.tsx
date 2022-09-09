import { FC } from "react";
import classNames from "classnames";
import  { IButtonProps } from "./types";

import "./styles.scss";

const Button: FC< IButtonProps> = ({ name, fullfilled }) => {
  const curtainClassName = classNames("Button__curtain", {
    Button__curtain_active: !fullfilled,
  });

  const nameClassName = classNames("Button__name", {
    Button__name_black: !fullfilled,
  });

  return (
    <button className="Button">
      <p className={nameClassName}>{name}</p>
      <div className={curtainClassName} />
    </button>
  );
};

export default Button;
