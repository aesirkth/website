import { h, Component } from "preact";
import style from "./style";

export class RecruitmentBanner extends Component {
  render() {
    return (
      <div className={style.banner}>
        We are recruiting!
        <nav>
          <a href="#positions">Open positions</a>
          <a href="#recruitment">Join us</a>
        </nav>
      </div>
    );
  }
}