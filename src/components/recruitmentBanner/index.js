import { h, Component } from "preact";
import style from "./style";

export class RecruitmentBanner extends Component {
  render() {
    return (
      <div className={style.banner}>
        We are recruiting!
        <nav className="noscript-hide">
          <a href="#recruitment">Join us</a>
        </nav>
      </div>
    );
  }
}
