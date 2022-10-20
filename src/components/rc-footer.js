import {LitElement, html, css} from 'lit';
// import "../styles.css";

export class RcFooter extends LitElement {

  static styles = css`
    footer {
      font-family: 'Montserrat', sans-serif;
      user-select: none;
      text-align: center;
      font-size: 0.8em;
    }
    `;

  render() {
    return html`
    <footer><p class="text-center text-primary-500">© ${new Date().getFullYear()} Relay.Club</p></footer>
    `;
  }
}
customElements.define('rc-footer', RcFooter);
