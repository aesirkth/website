import { h, Component } from "preact";
import style from "./style";

export class RecruitmentBanner extends Component {
  render() {
    return (
      <div className={style.banner}>
        We are recruiting!
        <nav>
          <a href="#positions">Open positions</a>
          <a className="noscript-hide" href="#recruitment">Join us</a>
        </nav>
      </div>
    );
  }
}