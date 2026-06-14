// screens
let screenHome = document.querySelector('#screen-home')
let screenSize = document.querySelector('#screen-size')
let screenTopping = document.querySelector('#screen-toppings')
let screenPayment = document.querySelector('#screen-payment')

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
let btnEscolher = document.querySelector('.btn-primary')
let btnNextTopping = document.querySelector('#btn-next-toppings')

btnEscolher.addEventListener('click', () => {
     screenSize.className = 'screen active'
     screenHome.className = 'screen hidden'
})

btnNextSize.addEventListener('click', () => {
     screenSize.className = 'screen hidden'
     screenTopping.className = 'screen active'
})

btnNextTopping.addEventListener('click', () => {
     screenTopping.className = 'screen hidden'
     screenPayment.className = 'screen active'
})

lucide.createIcons()