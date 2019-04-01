import React from "react";

import Document, { frontMatter, readingTime } from "@data/about/page.mdx";
import { Column } from "@components/column";
import { MarkdownWrapper } from "@components/markdown";
import { ReturnHomeLink } from "@components/returnHome";

const AboutPage: React.FC = () => {
  return (
    <Column>
      <ReturnHomeLink />
      <MarkdownWrapper title={frontMatter.title} readingTime={readingTime}>
        <Document />
      </MarkdownWrapper>
    </Column>
  );
};

export default AboutPage;
