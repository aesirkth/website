import React from "react";

import classnames from "clsx";

import style from "./style.css";
import { FormItem } from "../layout";

const Button: React.FC<React.ButtonHTMLAttributes<any>> = ({
  disabled,
  className,
  children,
  ...props
}) => (
  <FormItem>
    <button disabled={disabled} className={classnames(style.input, style.button)} {...props}>
      {children}
    </button>
  </FormItem>
);
export default Button;
