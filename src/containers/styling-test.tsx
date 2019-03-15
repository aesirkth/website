import React from "react";

import Document, { frontMatter, readingTime } from "@data/markdownStyling/test.mdx";
import { Column } from "@components/column";
import { MarkdownWrapper } from "@components/markdown";

const StylingTestPage: React.FC = () => {
  return (
    <Column>
      <MarkdownWrapper title={frontMatter.title} readingTime={readingTime}>
        <Document />
      </MarkdownWrapper>
    </Column>
  );
};

export default StylingTestPage;
