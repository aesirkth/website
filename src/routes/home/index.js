import { h, Component } from "preact";
import style from "./style";

import { Column } from "../../components/layout";
import Masthead from "../../components/masthead";
import Section, { Markdown } from "../../components/section";

const projectsContext = require.context("./content/projects", true, /index\.js$/);
const projects = Array.from(projectsContext.keys()).map(projectsContext).map(el => el.default);

const activitiesContext = require.context("./content/activities", true, /index\.js$/);
const activities = Array.from(activitiesContext.keys()).map(activitiesContext).map(el => el.default);

import urlTeamPicture from "./content/team.jpg";
import urlAmbitionsPicture from "./content/ambitions.svg";

import textWhoWeAre from "./content/whoweare.md";
import textMission from "./content/mission.md";
import textWhySupportUs from "./content/whysupportus.md";
import textJoinUs from "./content/joinus.md";

export default class Home extends Component {
  render() {
    return (
      <Column className={style.home}>
        <Masthead>
          <Section name="Who we are">
            <Markdown markdown={textWhoWeAre} />
            <img className={style.teamPicture} src={urlTeamPicture} alt="The team of ÆSIR" />
          </Section>
        </Masthead>
        <Section name="Our projects">
          { projects.map(project => (
            <div>{project.title}</div>
          )) }
        </Section>
        <Section name="Our activities">
          { activities.map(activity => (
            <div>{activity.title}</div>
          )) }
        </Section>
        <img className={style.ambitionsPicture} src={urlAmbitionsPicture} alt="The team of ÆSIR" />
        <Section name="Our mission">
          <Markdown markdown={textMission} />
        </Section>
        <Section name="Why support us">
          <Markdown markdown={textWhySupportUs} />
        </Section>
        <Section name="Join us">
          <Markdown markdown={textJoinUs} />
        </Section>
      </Column>
    );
  }
}
