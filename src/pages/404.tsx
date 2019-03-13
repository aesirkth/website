import React from "react";
import { Column } from "@components/column";
import { NavbarAntispace } from "@components/navbar";
import { VerticalCentering } from "@components/verticalCentering";
import { MarkdownWrapper } from "@components/markdown";
import { Link } from "@reach/router";

const NotFoundPage: React.FC = () => (
  <Column>
    <NavbarAntispace />
    <VerticalCentering>
      <MarkdownWrapper>
        <h1>Oh no!</h1>
        <h3>That page could not be found :(</h3>
        <Link to="/">Go to home</Link>
      </MarkdownWrapper>
    </VerticalCentering>
  </Column>
);

export default NotFoundPage;
