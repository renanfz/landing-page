import { verify } from "./script.js" 

// screens
let screenHome = document.querySelector('#screen-home')
let screenSize = document.querySelector('#screen-size')
let screenTopping = document.querySelector('#screen-toppings')
let screenPayment = document.querySelector('#screen-payment')
let screenStatus = document.querySelector('#screen-status')


export const screen = {screenHome, screenSize, screenTopping, screenPayment, screenStatus}

// buttons back -------
let btnBackSize = document.querySelector('#btn-back-size')
let btnBackTopping = document.querySelector('#btn-back-toppings')
let btnBackPay = document.querySelector('#btn-back-payment')


btnBackSize.addEventListener('click', () => {
     screenSize.className = 'screen hidden'
     screenHome.className = 'screen active'
})

btnBackTopping.addEventListener('click', () => {
     screenSize.className = 'screen active'
     screenTopping.className = 'screen hidden'
})

btnBackPay.addEventListener('click', () => {
     screenTopping.className = 'screen active'
     screenPayment.className = 'screen hidden'
})

// buttons next --------
let btnNextSize = document.querySelector('.btn-full')
let btnEscolher = document.querySelector('#acai-card')
let btnNextTopping = document.querySelector('#btn-next-toppings')
let btnConfirm = document.querySelector('#btn-confirm')
let btnNewOrder = document.querySelector('#btn-new-order')

btnEscolher.addEventListener('click', () => {
     screenSize.className = 'screen active'
     screenHome.className = 'screen hidden'
})

btnNextSize.addEventListener('click', () => {
     if(verify.fieldSize('input[name="size"]', 'Ops! Escolha um tamanho')) {
          screenSize.className = 'screen hidden'
          screenTopping.className = 'screen active'
     }
})

btnNextTopping.addEventListener('click', () => {
     if(verify.fieldSize('input[type="checkbox"]', 'Ops! Escolha pelo menos um complemento')) {
          screenTopping.className = 'screen hidden'
          screenPayment.className = 'screen active'
     }
})

btnConfirm.addEventListener('click', () => {
     if(verify.fieldSize('input[name="payment"]', 'Selecione uma forma de pagamento')) {
          screenPayment.className = 'screen hidden'
          screenStatus.className = 'screen active'
     }
})

btnNewOrder.addEventListener('click', () => {
     screenStatus.className = 'screen hidden'
     screenHome.className = 'screen active'
})

lucide.createIcons()