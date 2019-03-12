import React from "react";
import { Root, Routes, Head } from "react-static";
import "./app.css";
import { Navbar } from "@components/navbar";
import { Location } from "@reach/router";

export const App = () => {
  return (
    <Root>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
          rel="stylesheet"
        />
      </Head>
      <Location>{props => <Navbar location={props.location} />}</Location>
      <Routes />
    </Root>
  );
};

export default App;
