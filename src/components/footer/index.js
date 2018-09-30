import { h, Component } from "preact";
import style from "./style";

import { Column } from "../layout";

const Data = {
  organisationNumber: "802506-0568",
  home: "Drottning Kristinas väg 15-19, 114 28 Stockholm, Sweden",
  contact: "contact@aesir.se"
};

export default class Footer extends Component {
  render() {
    return (
      <Column>
        <footer className={style.footer}>
          <div>
            <header>Organisation number</header>
            <div>{Data.organisationNumber}</div>
          </div>
          <div>
            <header>Location</header>
            <div>{Data.home}</div>
          </div>
          <div>
            <header>Contact us</header>
            <div><a href={"mailto:" + Data.contact}>{Data.contact}</a></div>
          </div>
        </footer>
      </Column>
    );
  }
}
