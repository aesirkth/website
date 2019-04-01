import React from "react";
import { Column } from "@components/column";
import { NavbarAntispace } from "@components/navbar";
import { VerticalCentering } from "@components/verticalCentering";
import { MarkdownWrapper } from "@components/markdown";
import { Link } from "@reach/router";

// The default 404 page
const NotFoundPage: React.FC = () => (
  <Column>
    <NavbarAntispace />
    <VerticalCentering>
      <MarkdownWrapper>
        <h1>Oh no!</h1>
        <h3>Our team of highly skilled web ninjas are unable to find that page in orbit :(</h3>
        <Link to="/">Go to home</Link>
      </MarkdownWrapper>
    </VerticalCentering>
  </Column>
);

export default NotFoundPage;
