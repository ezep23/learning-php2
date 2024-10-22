
class Producto extends HTMLElement {
    constructor(){
        super();
        const name = this.getAttribute("name");
        const html = `<div class="card">
        <img src="./img/${name}.jpg" alt="${name}">
        <span>${name.toUpperCase()}</span>
    </div>`;
    this.insertAdjacentHTML("beforeend", html);
    }
}

customElements.define("card-producto", Producto);