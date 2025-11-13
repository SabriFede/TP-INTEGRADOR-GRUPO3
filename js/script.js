const cards = document.querySelectorAll('.articulo-categoria');
const buscador = document.getElementById('input-search');
let cardAnterior = null;

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {
         card.classList.add('hover');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover');
    });
    
    card.addEventListener('click', () => {        
        if (cardAnterior != null) {
            cardAnterior.classList.remove('clicked');
        }

        card.classList.add('clicked');
        cardAnterior = card;        
    });

});

function actualizarElementosSegunBusqueda() {

    const textoABuscar = buscador.value.trim().toLowerCase();

    cards.forEach(card => {
        const nombre = card.querySelector('.item-valor-nombre')?.textContent.toLowerCase();
        const autor = card.querySelector('.item-valor-autor')?.textContent.toLowerCase();
        const descripcion = card.querySelector('.item-valor-descripcion')?.textContent.toLowerCase();
        if (textoABuscar.length < 3 || nombre.includes(textoABuscar) || autor.includes(textoABuscar) || descripcion.includes(textoABuscar)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }        
    });    
}

buscador.addEventListener("keyup", actualizarElementosSegunBusqueda);

function calculoEstrellas(elemento, rating) {
   elemento.innerHTML = "";
   for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement('span');
      estrella.textContent = '★';
      estrella.classList.add("estrella");
      if (i <= rating) {
        estrella.classList.add("activa");
      }      
      elemento.appendChild(estrella);
   }
}
