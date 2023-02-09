	// constants

const braco = document.querySelector('#braco')
const controleContador = document.querySelector(".controle-contador")
const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const controle = document.querySelectorAll('.controle-ajuste')

	// event forEach click

controle.forEach((elemento) => {
	elemento.addEventListener('click', (e) => {
		e.preventDefault()
		manipulaDados(e.target.textContent)
	})
})

	// function datas manipulation

function manipulaDados(operacao){
	if(operacao === "-"){
		braco.value = parseInt(braco.value) - 1
	} else {
		braco.value = parseInt(braco.value) + 1
	}
}
