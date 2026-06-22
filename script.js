/* import { screen } from "./navigation"; */
let sizeList = document.querySelector('.size-list').querySelectorAll('.size-card')
let btnNextSize = document.querySelector('.btn-full')

function fieldSize(nameElement, message) {
    const radios = document.querySelectorAll(nameElement);

    // Seleciona todos os elementos de preço
    const priceElements = document.querySelectorAll('.price-carrinho');

    // Pega o valor atual do primeiro elemento e converte para número
    let valorTotal = priceElements.length > 0 
        ? Number(priceElements[0].innerText.replace(/[^\d,]/g, '').replace(',', '.')) || 0
        : 0;

    let selected = false;

    Array.from(radios).forEach(element => {
        if (element.checked) {
            selected = true;
            valorTotal += Number(element.dataset.price) || Number(element.dataset.priceTopping) || 0;
        }
    });

    // Atualiza todos os elementos de preço
    priceElements.forEach(el => {
        el.innerText = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valorTotal);
    });

    if (!selected) {
        alert(message);
        return false;
    } else {
        return true;
    }
}

function openModal() {
     let modal = document.querySelector('dialog')
     modal.showModal()
}

function randomOrder() {
     const numeroCincoDigitos = Math.floor(Math.random() * 300) + 100;
     document.getElementById('order-number').textContent = numeroCincoDigitos
}

function getData(element) {
     const radios = document.querySelectorAll(nameElement);

     // Seleciona todos os elementos de preço
     let selected = false
     let data = []
     Array.from(radios).forEach(element => {
     if (element.checked) {
          selected = true
          data.append(element.value)
     }})

     if (!selected) {
     } else {
          alert(data)
          return true
     }
}
// preciso de uma funcao que extraia o dado dos cards e armazene os em uma lista 
document.querySelector('#ice-card').addEventListener('click', randomOrder)
export const verify = {fieldSize, randomOrder, getData}

