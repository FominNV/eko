import { FC } from "react";
import Section1 from "components/MainPageBlock/Section1";
import Section2 from "components/MainPageBlock/Section2";
import Section3 from "components/MainPageBlock/Section3";
import Section4 from "components/MainPageBlock/Section4";
import Section5 from "components/MainPageBlock/Section5";
import Section6 from "components/MainPageBlock/Section6";

import "./styles.scss";
import Footer from "components/Footer";

const Main: FC = () => (
  <div className="Main">
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Footer />
  </div>
);

export default Main;
