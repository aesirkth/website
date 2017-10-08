import { h } from "preact";

import classnames from "classnames";

import style from "./style.scss";

const Field = ({ className, lines, options, type, pattern, children, ...props }) => {
  let Component;
  if (lines === "single") Component = "input";
  else if (lines === "multiple") Component = "textarea";

  return (
    <div className={classnames(className, style.formField)}>
      <label className={style.labelContainer}>
        <span className={style.label}>{children}</span>
        <Component className={style.input} type={type} pattern={pattern} required autocomplete="off" {...props} />
      </label>
    </div>
  );
};
export default Field;