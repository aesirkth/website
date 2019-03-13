import React from "react";
import { withSiteData } from "react-static";
import { Masthead } from "@components/masthead";

import WhoWeAre, { frontMatter as whoWeAreData } from "@data/home/whoWeAre.mdx";
import LookingFor, { frontMatter as lookingForData } from "@data/home/lookingFor.mdx";
import OurMission, { frontMatter as ourMissionData } from "@data/home/ourMission.mdx";
import SupportUs, { frontMatter as supportUsData } from "@data/home/supportUs.mdx";

import { MarkdownWrapper } from "@components/markdown";
import { Column } from "@components/column";
import { Link } from "@reach/router";

/**
 * The idea of the home page is to follow a certain flow of information.
 * Here we want to capture both potential supporters and aspiring new members.
 *
 * We first present who we are. This gives us credibility and context for the work and mission to be presented.
 *
 * Next we present our mission. This gives a logical reason for the existance of ÆSIR, as well as reasonable explanations
 * as to why our projects are what they are.
 *
 * Finally we present our current and past projects. The current projects are meant to invoke interest,
 * while past projects are meant to be means of proving we can do rocket projects.
 *
 * At last, we present actions. Here we want to capture potential new members or supporters to do something.
 */

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
      <MarkdownWrapper>
        <p>
          Quick links:
          {"  "}
          <Link to={"#" + whoWeAreData.slug}>{whoWeAreData.title}</Link>
          {"  |  "}
          <Link to={"#" + ourMissionData.slug}>{ourMissionData.title}</Link>
          {"  |  "}
          <Link to={"#" + lookingForData.slug}>{lookingForData.title}</Link>
          {"  |  "}
          <Link to={"#" + supportUsData.slug}>{supportUsData.title}</Link>
        </p>
      </MarkdownWrapper>
      <MarkdownWrapper id={whoWeAreData.slug} title={whoWeAreData.title}>
        <WhoWeAre />
      </MarkdownWrapper>
      <MarkdownWrapper id={ourMissionData.slug} title={ourMissionData.title}>
        <OurMission />
      </MarkdownWrapper>
      <MarkdownWrapper id={supportUsData.slug} title={supportUsData.title}>
        <SupportUs />
      </MarkdownWrapper>
      <MarkdownWrapper id={lookingForData.slug} title={lookingForData.title}>
        <LookingFor />
      </MarkdownWrapper>
    </Column>
  </>
));
