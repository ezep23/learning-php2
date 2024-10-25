class AppElement extends HTMLElement {
    constructor() {
      super();

      /* Forma más jodida pero permite ser utilizada
      en buclesy con mejor eficiencia utilizando el DOM */
        const card = document.createElement("div");
        card.classList.add("card");
        this.append(card);

        const heading = document.createElement("h1");
        heading.textContent = "ManzDev";
        card.append(heading);
    }
  }
  
  customElements.define("app-element", AppElement);