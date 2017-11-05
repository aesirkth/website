import { h, Component } from "preact";
import { Markdown } from "../section";

import urlTextLogo from "../../assets/logo.svg";
import textPunchline from "./content/punchline.md";

import style from "./style";

const Logo = () => (
  <div className={style.logo}>
    <img className={style.logoImage} src={urlTextLogo} />
    <span className={style.logoText}>ÆSIR</span>
  </div>
);

export default class Masthead extends Component {
  render(props) {
    return (
      <section className={style.masthead}>
        <Logo />
        <Markdown className={style.punchline} markdown={textPunchline} />
        {props.children}
      </section>
    );
  }
}
