
class Producto extends HTMLElement {
    constructor(){
        super();

        /* Insertar HTML mediante strings */
        this.innerHTML = `<div class="card">
                            <h1>El nene</h1>
                        </div>`;
    }
}

customElements.define("card-producto", Producto);