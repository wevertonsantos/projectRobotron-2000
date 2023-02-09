	// constants

const controle = document.querySelectorAll('.controle-ajuste')

	// event forEach click

controle.forEach((elemento) => {
	elemento.addEventListener('click', (e) => {
		e.preventDefault()
		manipulaDados(e.target.textContent, e.target.parentNode)
	})
})

	// function datas manipulation

function manipulaDados(operacao, controle){
	const peca = controle.querySelector('.controle-contador')

	if(operacao === "-"){
		peca.value = parseInt(peca.value) - 1
	} else {
		peca.value = parseInt(peca.value) + 1
	}
}
