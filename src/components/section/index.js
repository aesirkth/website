import { h, Component } from "preact";
import marked from "marked";
import classnames from "classnames";

import style from "./style";

marked.setOptions({
  sanitize: true
});
export const Markdown = (props) => {
  const html = marked(props.markdown);
  
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
