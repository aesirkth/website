import React from "react";

import style from "./style.css";
import { useField } from "formik";
import { FormItem } from "../layout";
import clsx from "clsx";
import { useLastRealValue } from "@hooks/useLastRealValue";

type FieldProps = {
  label: string;
  required?: true;
  name: string;
  type: string;
  multiline?: true;

  disabled: boolean;

  flex?: number;
};

export const Field: React.FC<FieldProps> = props => {
  const [fieldProps, fieldMetaProps] = useField(props.name, props.type);

  let Component!: React.ReactType<React.InputHTMLAttributes<any>>;
  if (props.multiline) {
    Component = "textarea";
  } else {
    Component = "input";
  }

  const [errorLabel, showErrorLabel] = useLastRealValue(
    (fieldMetaProps.touched && fieldMetaProps.error) || undefined
  );

  return (
    <FormItem flex={props.flex}>
      <div className={style.formField}>
        <label className={style.labelContainer}>
          <span className={clsx(style.label, { [style.show]: !showErrorLabel })}>
            {props.label}
          </span>
          <span className={clsx(style.label, style.errorLabel, { [style.show]: showErrorLabel })}>
            {errorLabel}
          </span>
          <Component
            disabled={props.disabled}
            className={style.input}
            required={props.required}
            autoComplete="off"
            {...fieldProps}
          />
        </label>
      </div>
    </FormItem>
  );
};
