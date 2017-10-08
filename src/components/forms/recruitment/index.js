import { h, Component } from "preact";


export default class RecruitmentForm extends Component {
  render() {
    return (
      <form name="contact" action="thank-you" netlify netlify-honeypot="bot-field">
        <p class="hidden">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}