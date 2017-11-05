import { h } from "preact";

import classnames from "classnames";

import style from "./style.scss";

const Button = ({ className, children, ...props }) => (
  <div className={classnames(className, style.formField)}>
    <button className={classnames(style.input, style.button)} {...props}>{children}</button>
  </div>
);
export default Button;