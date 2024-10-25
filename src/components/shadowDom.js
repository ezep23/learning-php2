class AppElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" }); // Si es OPEN es accesible al shadowDOM, 
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = /* html */` 
        <style>
          span {
            background: steelblue;
            padding: 5px;
            color: white;
          }
        </style>
        <div>
          <p>¡Vuelve a la sombra, <span>CSS</span>! ¡NO... PUEDES... PASAR!</p>
        </div>
      `;
    }
  };
  
  customElements.define("app-element", AppElement);
  
  // Podemos utilizar .when() en el custom element de forma asíncronica para eventos.