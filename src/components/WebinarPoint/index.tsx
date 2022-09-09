import {
  FC, useMemo,
} from "react";
import { ReactComponent as Point } from "assets/icons/point.svg";
import  { IWebinarPointProps } from "./types";

import "./styles.scss";

const WebinarPoint: FC<IWebinarPointProps> = ({ text, underlined }) => {
  const currentText = useMemo<(string | JSX.Element)[]>(() => {
    if (underlined) {
      const textArray: string[] = text.split(underlined);
      return [textArray[0], <u>{underlined}</u>, textArray[1]];
    } return [text];
  }, [text, underlined]);

  return (
    <div className="WebinarPoint">
      <div className="WebinarPoint__point-wrap">
        <Point />
      </div>
      {currentText}
    </div>
  );
};

export default WebinarPoint;
