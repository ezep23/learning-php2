const template = document.createElement("template");
template.innerHTML = /* html */`
  <div class="card">
    <h1>Boca</h1>
  </div>`;

// Lógica Javascript del componente
class Card extends HTMLElement {
  connectedCallback() {
    const html = template.content.cloneNode(true); // el true es para clonación profunda (todos sus hijos)
    this.append(html);                             // si está en false se hace una clonación superficial solo el elemento padre
  }
}

customElements.define("container-card", Card);
