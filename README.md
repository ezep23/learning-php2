
# Webcomponents

Repositorio creado para aprender y crear Webcomponents comenzando de forma vanilla y después utilizando Lit de framework.


## Estructura de carpetas -> ManzDev
Forma webcomponent vanilla
```javascript
-- src 
    +-- components/         // Utilizando PascalCase
        +-- CardProduct.js
        +-- CardAnasdhasd.js   
    -- index.html
    -- index.css
    -- index.js
```

1. Importar todos los componentes al index.js y después en index.html importarlos mediante un script de type="module"

2. crear los componentes
```javascript
class CardProduct extends HTMLElement {

  constructor() { // para instanciar los componentes
    super(); // llamar al padre HTMLElement
  }

}

// Acá definimos el custom element a su clase
customElements.define("card-product", CardProduct);
```
3. Escribir los C.E en el html, crear con javascript y pushearlos mediante instancias o con el DOM