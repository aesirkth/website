import { h, Component } from "preact";
import style from "./style";

import Markdown from "preact-markdown";

const context = require.context("./posts", true, /index\.js$/);
const posts = Array.from(context.keys()).map(context).map(el => el.default);

import url_textLogo from "../../assets/logo.svg";
import text_punchline from "./content/punchline.md";
import text_whoWeAre from "./content/whoweare.md";

export default class Home extends Component {
  render() {
    return (
      <div class={style.home}>
        <section>
          <img width={300} src={url_textLogo}/>
          <Markdown markdown={text_punchline}/>
        </section>
        <section>
          <header>Who we are</header>
          <Markdown markdown={text_whoWeAre}/>
        </section>
      
      </div>
    );
  }
}
