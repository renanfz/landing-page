/* import { screen } from "./navigation"; */
let sizeList = document.querySelector('.size-list').querySelectorAll('.size-card')
let btnNextSize = document.querySelector('.btn-full')
let data = ['Açaí']
let complements = []

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

function renderStatus() {
    const elements = document.querySelectorAll('.summary-value');
    elements.forEach((element, index) => {
        if (index === 2) {
            element.textContent = complements.join(', ');
        } else if (index > 2) {
            element.textContent = data[index - 1];
        } else {
            element.textContent = data[index];
        }
    });
}


function getData(nameElement, attribute) {
    // 1. Busca todos os elementos que estão MARCADOS de uma vez só
    const selectedElements = document.querySelectorAll(`${nameElement}:checked`);

    // 2. Se a lista estiver vazia, ninguém selecionou nada
    if (selectedElements.length === 0) {
        alert("Nenhum item selecionado.");
        return false;
    }

    // 3. Processa apenas os elementos que foram selecionados
    selectedElements.forEach(element => {
        
        // Cenário A: Atributo é "value"
        if (attribute === "value") {
            data.push(element.value);
        } 
        
        // Cenário B: Atributo é "dataset.algumaCoisa"
        else if (attribute.startsWith("dataset.")) {
            const chave = attribute.split(".")[1]; // Pega o que vem depois do ponto
            const valorData = element.dataset[chave];

            if (chave === 'topping') {
                complements.push(valorData);
            }
            
            data.push(valorData);
        }
    });

    return true;
}


// preciso de uma funcao que extraia o dado dos cards e armazene os em uma lista 
document.querySelector('#ice-card').addEventListener('click', randomOrder)
export const verify = {fieldSize, randomOrder, getData, renderStatus}

