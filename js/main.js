const braco = document.querySelector('#braco')
const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')

somar.addEventListener('click', (evento) => {
	evento.preventDefault()
	braco.value = parseInt(braco.value) + 1
})

subtrair.addEventListener('click', (evento) => {
	evento.preventDefault()
	braco.value = parseInt(braco.value) - 1
})