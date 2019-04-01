import React from "react";
import { withRouteData } from "react-static";
import { Masthead } from "@components/masthead";

import WhoWeAre, { frontMatter as whoWeAreData } from "@data/home/whoWeAre.mdx";
import LookingFor, { frontMatter as lookingForData } from "@data/home/lookingFor.mdx";
import OurMission, { frontMatter as ourMissionData } from "@data/home/ourMission.mdx";
import SupportUs, { frontMatter as supportUsData } from "@data/home/supportUs.mdx";

import { MarkdownWrapper } from "@components/markdown";
import { Column } from "@components/column";
import { Link } from "@reach/router";
import { QuickLinks } from "@components/quickLinks";
import { Project } from "@src/types/data";

import { Statistics, StatisticsEntry } from "@components/statistics";

const ProjectsList: React.FC<{ projects: Project[] }> = props => (
  <>
    {props.projects.map(project => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { default: Route } = require("@data/projects/" + project.summary.fileInfo.path);
      return (
        <div key={project.summary.slug}>
          <h1>
            {project.summary.title}{" "}
            {project.summary.completed === false && <>(since {project.summary.started})</>}
            {project.summary.completed !== false &&
              project.summary.completed === project.summary.started && (
                <>(during {project.summary.started})</>
              )}
            {project.summary.completed !== false &&
              project.summary.completed !== project.summary.started && (
                <>
                  ({project.summary.started} to {project.summary.completed})
                </>
              )}
          </h1>
          <Route />
          <p>
            <Link to={`/projects/${project.summary.slug}`}>
              Read more about {project.summary.title}
            </Link>
          </p>
        </div>
      );
    })}
  </>
);

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

export default withRouteData(
  ({ pastProjects, currentProjects }: { pastProjects: Project[]; currentProjects: Project[] }) => (
    <>
      <Masthead>
        Association of Engineering Students in Rocketry,
        <br />
        by students from KTH Royal Institute of Technology,
        <br />
        in Stockholm, Sweden.
      </Masthead>
      <Column>
        <QuickLinks>
          <Link to={"#" + whoWeAreData.slug}>{whoWeAreData.title}</Link>
          <Link to={"#" + ourMissionData.slug}>{ourMissionData.title}</Link>
          <Link to={"#" + supportUsData.slug}>{supportUsData.title}</Link>
          <Link to={"#" + lookingForData.slug}>{lookingForData.title}</Link>
        </QuickLinks>

        <Statistics>
          <StatisticsEntry title="Members" value="~30" />
          <StatisticsEntry title="Rockets launched" value="1" />
          <StatisticsEntry title="Altitude reached" value="> 1 km" />
          <StatisticsEntry title="Hours spent in the workshop" value="countless" />
        </Statistics>

        <MarkdownWrapper leftAlign id={whoWeAreData.slug} title={whoWeAreData.title}>
          <WhoWeAre />
          <p>
            <Link to="/about">Read more about us</Link>
          </p>
        </MarkdownWrapper>
        <MarkdownWrapper leftAlign id={ourMissionData.slug} title={ourMissionData.title}>
          <OurMission />
        </MarkdownWrapper>
        <MarkdownWrapper leftAlign title="Ongoing projects">
          <p>This is what we're working on right now!</p>
          <ProjectsList projects={currentProjects} />
        </MarkdownWrapper>
        <MarkdownWrapper leftAlign title="Past projects">
          <p>
            These are our accomplishments - it may not look like much, but it's a big accomplishment
            for us.
          </p>
          <ProjectsList projects={pastProjects} />
        </MarkdownWrapper>
        <MarkdownWrapper leftAlign id={supportUsData.slug} title={supportUsData.title}>
          <SupportUs />
        </MarkdownWrapper>
        <MarkdownWrapper leftAlign id={lookingForData.slug} title={lookingForData.title}>
          <LookingFor />
        </MarkdownWrapper>
      </Column>
    </>
  )
);
