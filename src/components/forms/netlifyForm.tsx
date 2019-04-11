import React from "react";
import { Form, useFormikContext } from "formik";

type Props = {
  id: string;

  potName: string;
  potDefaultValue: string;

  formAction: string;
  formName: string;

  className?: string;
};

export const NetlifyForm: React.FC<Props> = props => {
  const isServerRender = typeof window === "undefined";

  const { isValid } = useFormikContext();

  // Props that aren't part of the form element, but need to be set as attributes
  const extensionProps = {
    netlify: "true",
    "netlify-honeypot": isServerRender ? props.potName : null
  };
  return (
    <Form
      id={props.id}
      method="post"
      className={props.className}
      action={props.formAction}
      name={props.formName}
      {...extensionProps}
    >
      <input type="hidden" name="form-name" value={isValid ? props.formName : "invalid-forms"} />
      {props.children}
      {!isValid && (
        <div hidden style={{ display: "none" }}>
          <label>
            resistance is futile
            <input name={props.potName} defaultValue={props.potDefaultValue} />
          </label>
        </div>
      )}
    </Form>
  );
};
