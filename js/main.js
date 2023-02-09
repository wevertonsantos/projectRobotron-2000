	// constants

const braco = document.querySelector('#braco')
const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const controle = document.querySelectorAll('.controle-ajuste')

	// event click

somar.addEventListener('click', (e) => {
	e.preventDefault()
	manipulaDados("somar")
})

subtrair.addEventListener('click', (e) => {
	e.preventDefault()
	manipulaDados("subtrair")
})

	// function datas manipulation

function manipulaDados(operacao){
	if(operacao === "subtrair"){
		braco.value = parseInt(braco.value) - 1
	} else {
		braco.value = parseInt(braco.value) + 1
	}
}
