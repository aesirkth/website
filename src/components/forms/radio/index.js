import { h } from "preact";

import classnames from "classnames";

import style from "./style.scss";

const Radio = ({ className, children, ...props }) => (
  <div className={classnames(className, style.formField)}>
    <label className={style.labelContainer}>
      <input className={style.input} type="radio" {...props} />
      <span className={style.label}>{children}</span>
    </label>
  </div>
);
export default Radio;