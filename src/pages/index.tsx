import React from "react";
import { withSiteData } from "react-static";
import { Masthead } from "@components/masthead";

import WhoWeAre from "@data/home/whoWeAre.mdx";
import { MarkdownWrapper } from "@components/markdown";
import { Column } from "@components/column";

export default withSiteData(() => (
  <>
    <Masthead>
      Association of Engineering Students in Rocketry,
      <br />
      by students from KTH Royal Institute of Technology,
      <br />
      in Stockholm, Sweden.
    </Masthead>
    <Column>
      <MarkdownWrapper title="Who we are">
        <WhoWeAre />
      </MarkdownWrapper>
    </Column>
  </>
));
