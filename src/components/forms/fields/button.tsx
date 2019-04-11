import React from "react";

import classnames from "clsx";

import style from "./style.css";

const Button: React.FC<React.ButtonHTMLAttributes<any>> = ({
  disabled,
  className,
  children,
  ...props
}) => (
  <div className={classnames(className, style.formField)}>
    <button disabled={disabled} className={classnames(style.input, style.button)} {...props}>
      {children}
    </button>
  </div>
);
export default Button;
