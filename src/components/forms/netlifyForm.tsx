import React from "react";

type Props = {
  id: string;

  potName: string;
  potDefaultValue: string;

  formAction: string;
  formName: string;

  className?: string;

  valid: boolean;
};

export const NetlifyForm: React.FC<Props> = props => {
  const isServerRender = typeof window === "undefined";

  // Props that aren't part of the form element, but need to be set as attributes
  const extensionProps = {
    netlify: true,
    "netlify-honeypot": isServerRender ? props.potName : null
  };
  return (
    <form
      id={props.id}
      method="post"
      className={props.className}
      action={props.formAction}
      name={props.formName}
      {...extensionProps}
    >
      <input
        type="hidden"
        name="form-name"
        value={props.valid ? props.formName : "invalid-forms"}
      />
      {props.children}
      <div hidden style={{ display: "none" }}>
        <label>
          resistance is futile
          <input name={props.potName} value={!props.valid ? props.potDefaultValue : null} />
        </label>
      </div>
    </form>
  );
};
