import { html, render } from "https://cdn.jsdelivr.net/npm/lit-html@3.1.2/+esm";
const template = html`
  <div class="card">
    <h1>Elneneee</h1>
  </div>`;

class Cartitas extends HTMLElement {
  constructor() {
    super();
    render(template, this);
  }
}

customElements.define("cartitas-container", Cartitas);
