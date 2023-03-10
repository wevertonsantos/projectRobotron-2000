	// constants

const controle = document.querySelectorAll('[data-controle]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const estatisticas = document.querySelectorAll('[data-estatistica')

    // constants robotron img, colors robotron

const robotron = document.getElementById('robotron')
const robotronAtual = 'img/robotronbranco.png'
robotron.setAttribute('src', robotronAtual)

	// event forEach click

controle.forEach((elemento) => {
	elemento.addEventListener('click', (e) => {
		e.preventDefault()
		manipulaDados(e.target.dataset.controle, e.target.parentNode)
		atualizaEstatisticas(e.target.dataset.peca)
	})
})

	// function datas manipulation

function manipulaDados(operacao, controle){
	const peca = controle.querySelector('[data-contador]')

	if(operacao === "-"){
		peca.value = parseInt(peca.value) - 1
	} else {
		peca.value = parseInt(peca.value) + 1
	}
}

// function update statistics

function atualizaEstatisticas(peca){
	estatisticas.forEach((elemento) => {
		elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
	})
}

// update robotron color

function trocaImagem(cor){
   document.querySelector(".robo").src="img/robotron" + cor + ".png";
}

