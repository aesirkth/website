module "*.mdx" {
  import React from "react";

  declare const Component: React.FC;

  declare const frontMatter: {
    [name: string]: string;
  };

  declare const tableOfContents: {
    [name: string]: string;
  };

  declare const readingTime: any;

  export default Component;
  export { frontMatter, tableOfContents, readingTime };
}

module "*.md" {
  export * from "*.mdx";
}
