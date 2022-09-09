import { FC, useMemo } from "react";
import { dataLinks } from "./data";

import "./styles.scss";

const Footer: FC = () => {
  const links = useMemo(() => (
    dataLinks.map((elem) => (
      <a
        className="Footer__link"
        href={elem.path}
      >
        <div className="Footer__icon">
          {elem.icon}
        </div>
      </a>
    ))
  ), []);

  return (
    <div className="Footer">
      <div className="Footer__content">
        <div className="Footer__links">{links}</div>
        <p className="Footer__date">© 2008 - 2020 «Клиника Екатерининская»</p>
      </div>
    </div>
  );
};

export default Footer;
