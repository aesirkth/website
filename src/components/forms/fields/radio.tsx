import React from "react";

import classnames from "clsx";

import style from "./style.css";

const Radio: React.FC<React.InputHTMLAttributes<any>> = ({ className, children, ...props }) => (
  <div className={classnames(className, style.formField)}>
    <label className={style.labelContainer}>
      <input className={style.input} type="radio" {...props} />
      <span className={style.label}>{children}</span>
    </label>
  </div>
);
export default Radio;
