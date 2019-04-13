import React from "react";
import { Root, Routes, Head } from "react-static";
import "./app.css";
import { Navbar } from "@components/navbar";
import { Location } from "@reach/router";
import { Footer } from "@components/footer";

export const App = () => {
  return (
    <Root>
      <Head>
        <meta
          name="description"
          content="Association of Engineering Students in Rocketry, by students from KTH Royal Institute of Technology, in Stockholm, Sweden."
        />
        <title>Association of Engineering Students in Rocketry</title>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
          rel="stylesheet"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-113469156-1" />
      </Head>
      <main>
        <Location>{props => <Navbar location={props.location} />}</Location>
        <Routes />
      </main>
      <Footer />
    </Root>
  );
};

export default App;
