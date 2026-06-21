/* import { screen } from "./navigation"; */
let sizeList = document.querySelector('.size-list').querySelectorAll('.size-card')
let btnNextSize = document.querySelector('.btn-full')

function fieldSize(nameElement, message) {
     const radios = document.querySelectorAll(nameElement);
     let valorTotal 
    // Seleciona todos os radios de tamanho
    
    // Verifica se algum está marcado
    let selected = false
    Array.from(radios).forEach(element => {
          if(element.checked) {
               selected = true
               valorTotal = element.dataset.price || element.dataset.priceTopping
          }
    });

    if (!selected) {
         alert(message);
         return
     } else {
          alert(valorTotal)
          return true
     }
}

function openModal() {
     let modal = document.querySelector('dialog')
     modal.showModal()
}


function op(nameElement) {
     let radios = document.querySelectorAll(nameElement)

     Array.from(radios).forEach(element => {
          if(element.checked) {selected = true}
     radios.forEach(element => {
          alert(element.dataset.price)
     });
})}


/* document.querySelector('#ice-card').addEventListener('click', op('input[name="size"]'))
 */export const verify = {fieldSize}

