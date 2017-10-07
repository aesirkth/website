import { h, Component } from "preact";
import PreactMarkdown from "preact-markdown";
import classnames from "classnames";

import style from "./style";

export const Markdown = (props) => (
  <PreactMarkdown markdown={props.markdown} markupOpts={{ className: classnames(style.markdown, props.className, props.class) }} />
);

export default class Section extends Component {
  render(props) {
    return (
      <section className={style.section}>
        <header className={style.header}>{ props.name }</header>
        <div className={style.content}>
          { props.children }
        </div>
      </section>
    );
  }
}
