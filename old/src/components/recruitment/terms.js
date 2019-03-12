import { h, Component } from "preact";

import styles from "./terms.scss";

export class Terms extends Component {
  state = {
    open: false
  }

  openClick = (e) => {
    e.preventDefault();
    this.setState({
      open: true
    });
  };

  closeClick = (e) => {
    e.preventDefault();
    this.setState({
      open: false
    });
  };

  cancelClick = (e) => {
    e.stopImmediatePropagation();
  };

  render() {
    return (
      <div className={styles.terms}>
        <br />
        By submitting this form, you accept that we will store your data in accordance to the <a href="#" onClick={this.openClick}>terms</a>.
        {
          this.state.open &&
          <div className={styles.modal} onClick={this.closeClick}>
            <section onClick={this.cancelClick}>
              Following the new data protection regulation (GDPR) we only use the information you enter to enable us to contact you and make a decision in which project you would be best suited in.
              The information will be removed upon request or if you do not become a member of this association.
              <br />
              Your data will be processed by the following third parties:
              <ul>
                <li>
                  <a rel="noopener noreferrer" target="_blank" href="https://policies.google.com/">Google</a>: We store your submission on Google Drive
                </li>
                <li>
                  <a rel="noopener noreferrer" target="_blank" href="https://www.netlify.com/gdpr/">Netlify</a>: The web service used to record your submission
                </li>
                <li>
                  <a rel="noopener noreferrer" target="_blank" href="https://zapier.com/privacy/">Zapier</a>: A service that takes your submission and stores it on Google Drive
                </li>
              </ul>
              <br />
              <a href="#" onClick={this.closeClick}>close</a>
            </section>
          </div>
        }
      </div>
    );
  }
}