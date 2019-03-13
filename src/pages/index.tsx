import React from "react";
import { withSiteData } from "react-static";
import { Masthead } from "@components/masthead";

export default withSiteData(() => (
  <>
    <Masthead image={"https://picsum.photos/200/300/?blur"}>
      Association of Engineering Students in Rocketry,
      <br />
      by students from KTH Royal Institute of Technology,
      <br />
      in Stockholm, Sweden.
    </Masthead>
  </>
));
