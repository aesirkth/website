import React from "react";

import style from "./style.css";

export const FormRow: React.FC = props => <div className={style.row}>{props.children}</div>;

export const FormItem: React.FC<{ flex?: number }> = props => (
  <div className={style.item} style={{ flex: props.flex }}>
    {props.children}
  </div>
);

export const FormGrid: React.FC<{ label?: string }> = props => (
  <div className={style.grid}>
    {props.label && <header>{props.label}</header>}
    <div className={style.children}>{props.children}</div>
  </div>
);
