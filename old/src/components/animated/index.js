import { h } from "preact";
import style from "./style.scss";

const Animated = (props) => (
  <div class={style.animated}>
    {props.children}
  </div>
);

export default Animated;