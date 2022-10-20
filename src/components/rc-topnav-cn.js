import { LitElement, html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

export class RcTopNavCn extends LitElement {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  static styles = css`
    :host {
      color: #1C293B;
      font-family: 'Montserrat', sans-serif;
    }
    .navbar {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 1rem 3rem;
    }
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;

    }
    .nav-items {
      display: flex;
      align-items: center;
    }

    .nav-item {
      margin: 0 2rem;
      font-size: 1rem;
    }
    .nav-item:hover {
      color: #8B5CF6;
      cursor: pointer;
    }

    .logo-text {
      font-size: 1.25rem;
      padding: 0 0.25rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
    }

    .logo-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #7C3AED;
      display: inline-block;
    }

    button {
      font-size: .85rem;
      font-family: 'Montserrat', sans-serif;
      background-color: #FFFFFF;
      border: 1px solid #8B5CF6;
      border-radius: .5rem;
      box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
      color: #8B5CF6;
      cursor: pointer;
      min-height: 3rem;
      padding: calc(.75rem - 1px) calc(1.5rem - 1px);
      width: auto;
    }

    button:hover,
    button:focus {
      border-color: #6D28D9;
      box-shadow: rgba(0, 0, 0, 0.1) 0 2px 8px;
      color: #6D28D9;
    }
    `;

  render() {
    return html`
    <header class="navbar flex justify-between my-3 ">
      <div class="logo">
        <div class="logo-text text-2xl font-semibold">relay</div>
        <div class="logo-dot"></div>
        <div class="logo-text">club</div>
      </div>
      <div class="nav-items">
        <div class="nav-item">${msg('主页')}</div>
        <div class="nav-item">${msg('关于我们')}</div>
        <div class="nav-item">${msg('核心功能')}</div>
        <div class="nav-item">${msg('会员方案')}</div>
      </div>
      <button>${msg('免费试用')}</button>
    </header>
    `;
  }
}

customElements.define('rc-topnavcn', RcTopNavCn);
