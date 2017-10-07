import { h, Component } from "preact";
import marked from "marked";
import classnames from "classnames";

import style from "./style";

const renderer = new marked.Renderer({
  sanitize: true
});
renderer.link = function(href, title, text) {
  const a = document.createElement("a");
  a.href = href;
  a.title = title;
  a.text = text;

  a.target = "_blank";
  a.rel = "noopener noreferrer";

  return a.outerHTML;
};

export const Markdown = (props) => {
  const html = marked(props.markdown, { renderer });
  return (
    <div dangerouslySetInnerHTML={ {__html: html} } className={classnames(style.markdown, props.className, props.class)} />
  );
};

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
