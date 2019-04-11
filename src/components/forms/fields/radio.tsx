import React from "react";

import style from "./style.css";
import { useField } from "formik";
import { FormItem, FormGrid } from "../layout";
import clsx from "clsx";
import { useLastRealValue } from "@hooks/useLastRealValue";

type RadioProps = {
  label: string;
  required?: true;
  name: string;

  choices: string[];

  flex?: number;
};

export const Radio: React.FC<RadioProps> = props => {
  const [fieldProps, fieldMetaProps] = useField(props.name);

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
          <FormGrid>
            {props.choices.map(choice => (
              <label className={style.radioLabel} key={choice}>
                <input
                  type="radio"
                  className={style.radio}
                  required={props.required}
                  {...fieldProps}
                  value={choice}
                  checked={fieldProps.value === choice}
                />
                <div
                  className={clsx(style.checkbox, { [style.checked]: fieldProps.value === choice })}
                />
                {choice}
              </label>
            ))}
          </FormGrid>
        </label>
      </div>
    </FormItem>
  );
};
