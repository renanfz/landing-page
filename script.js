/* import { screen } from "./navigation"; */

let sizeList = document.querySelector('.size-list').querySelectorAll('.size-card')

let btnNextSize = document.querySelector('.btn-full')

function fieldSize(nameElement, message) {
    // Seleciona todos os radios de tamanho
    const radios = document.querySelectorAll(nameElement);
    
    // Verifica se algum está marcado
    let selected = false
    Array.from(radios).forEach(element => {
          if(element.checked) {selected = true}
    });

    if (!selected) {
         alert(message);
         return
     } else {
          return true
     }
}

export const verify = {fieldSize}