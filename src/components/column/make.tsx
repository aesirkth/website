import React from "react";

import clsx from "clsx";

import styles from "./style.css";
import { Head } from "react-static";

type Props = {
  responsiveFullWidth?: boolean;
  collapse?: boolean;
  relativePositioning?: boolean;
};

type Column = React.FC<Props>;

export function makeColumn(width: number): Column {
  const className = `.${styles.column}.width-${width}`;
  const style = (
    <Head>
      <style data-id={className}>
        {[
          `${className} { width: ${width}px; }`,
          `@media (max-width: ${width + 16}px) {`,
          `${className} { width: ${width + 16}px; }`,
          `${className}.responsiveFullWidth { width: ${width}px; }`,
          "}"
        ].join(" ")}
      </style>
    </Head>
  );

  const C: React.FC<Props> = props => {
    return (
      <div
        className={clsx(styles.column, `width-${width}`, {
          [styles.responsiveFullWidth]: props.responsiveFullWidth,
          [styles.collapse]: props.collapse,
          [styles.relativePositioning]: props.relativePositioning
        })}
      >
        {props.children}
        {style}
      </div>
    );
  };
  (C as any).displayName = `Column<${width}>`;
  return C;
}
