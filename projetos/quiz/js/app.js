
var i = 0

var j = 0

var pontuacao = 0

function nextQuestion(){


	document.getElementById('resposta-1').className = 'option'
	document.getElementById('resposta-2').className = 'option'
	document.getElementById('resposta-3').className = 'option'
	document.getElementById('resposta-4').className = 'option'
	
	var perguntas = []


  	perguntas[0] = 'Qual é o nome do filho mais novo de Harry Potter?'    
    perguntas[1] = 'Qual a materia a professora Minerva McGonagal leciona em hogwarts'	
    perguntas[2] = 'Qual objeto faz o Dobby ser livre?'
    perguntas[3] = 'Qual é o apelido dos Marotos?'
    perguntas[4] = 'Qual é o animal que sempre vem ajudar um Dumbledore?'
    perguntas[5] = 'Quem Criou a pedra filosofal?'    
    perguntas[6] = 'Qual é o patrono de Rony weasley?'
    perguntas[7] = 'Qual é o nome completo de Alvo Dumbledore'
    perguntas[8] = 'Em todos os tempo, qual foi o bruxo mais forte que estudou em Hogwarts'	
    perguntas[9] = 'Qual magia fez a cicatriz na testa de Harry Potter'
    perguntas[10] = ''	

    var pergunta = document.getElementById('pergunta').innerHTML = perguntas[i]


    var respostas = []

    respostas[0] = ['Alvo Severo Potter','Tiago Sirius Potter','Tiago Severo Potter','Alvo Tiago Potter']
	  respostas[1] = ['Feitiços','Artes das Trevas','Transfiguração','História da Magia']
    respostas[2] = ['Uma Calça','Um livro','Um cueca','Uma Meia']
    respostas[3] = ['Fofuxo, Aluado, Rabixo, Galhado','Almofadinhas, Rabixo, Pontas, Aluado ','Almofadinhas, Aluado, Galhado, Rabixo','Pontas, Lupin, Rabixo, Almofadinhas']
    respostas[4] = ['Uma fenix','Uma Folks','Uma aguia','Um falcão']
    respostas[5] = ['Nicolau Flamel','Alvo Dumbledore','Ignotus Peverell','Godric Gryffindor']
    respostas[6] = ['Uma lontra','Um rato','Um cachorro','Um coelho']
    respostas[7] = ['Alvo Wulfrico Brian Percival Dumbledore','Alvo Percival Brian Dumbledore','Alvo Percival Dumbledore','Alvo Percival Wulfrico Brian Dumbledore']
	  respostas[8] = ['Godric Gryffindor','Tom Riddle','Alvo Dumbledore','Merlin']   
    respostas[9] = ['Sectumsempra','Expelliarmus ','Avada Kedavra','Cruciatus']  
    respostas[10] = ['','','','']       

	console.log(i)
	var resposta1 = document.getElementById('resposta-1').innerHTML = respostas[i][0]
	var resposta2 = document.getElementById('resposta-2').innerHTML = respostas[i][1]
	var resposta3 = document.getElementById('resposta-3').innerHTML = respostas[i][2]
	var resposta4 = document.getElementById('resposta-4').innerHTML = respostas[i][3]
		
	
	i += 1

	if (i > 10) {
		document.getElementById('pergunta').className = 'text-center'
		var level = ''

		if (pontuacao >= 0 && pontuacao <= 5) {
			level = 'Portanto você ainda é iniciante em conhecimento do mundo de Harry Potter'
		}
		if (pontuacao >= 6 && pontuacao <= 8) {
			level = 'Portanto você é intermediário em conhecimento do mundo de Harry Potter'
		}
		if (pontuacao >= 9 && pontuacao <= 10) {
			level = 'Ora Ora Temos um Manjador a nivel Excelente! PARABÉNS!!'
		}


		document.getElementById('pergunta').innerHTML = 'Você acertou ' + pontuacao.toString() + ' de 10. ' + level.toString()
		document.getElementById('pergunta').className = 'mb-5'
		resposta1 = document.getElementById('resposta-1').remove() 
		resposta2 = document.getElementById('resposta-2').remove()
		resposta3 = document.getElementById('resposta-3').remove()
		resposta4 = document.getElementById('resposta-4').remove()
		
		var group = document.getElementById('group')
		var div = document.createElement('div')
		group.appendChild(div)
		div.setAttribute('class','option')
		div.setAttribute('onclick','window.location.reload()')
		div.innerHTML = 'Reiniciar Quiz'
		}
	}



function validarResposta(escolha){

	var escolha_correta = ''

	
	//pergunta 0


	if (i == 1) {
		var escolha_correta = 'Alvo Severo Potter'
		
		if (escolha_correta === 'Alvo Severo Potter' && escolha === 'a') {
			console.log('Resposta correta')
			document.getElementById('resposta-1').className = 'option-correta'
			pontuacao += 1
			setTimeout(nextQuestion,800)

		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}
			if (escolha === 'd') {
				document.getElementById('resposta-4').className = 'option-incorreta'
			}

			setTimeout(nextQuestion,800)
			
			
		}

	console.log(`escolha do jogador:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}

  //pergunta 1

  if (i == 2) {
		escolha_correta = 'Transfiguração'

		if (escolha_correta === 'Transfiguração' && escolha === 'c') {
			console.log('Resposta correta')
			document.getElementById('resposta-3').className = 'option-correta'
			pontuacao += 1
			setTimeout(nextQuestion,800)

		}else {	
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'a') {
				document.getElementById('resposta-1').className = 'option-incorreta'
			}
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'd') {
				document.getElementById('resposta-4').className = 'option-incorreta'
			}

			setTimeout(nextQuestion,800)
		
		}

	console.log(`escolha do jogador:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}

	//pergunta 2

	if (i == 3) {
		escolha_correta = 'Uma Meia'

		if (escolha_correta === 'Uma Meia' && escolha === 'd') {
			console.log('Resposta correta')
			document.getElementById('resposta-4').className = 'option-correta'
			pontuacao += 1
			setTimeout(nextQuestion,800)
		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'a') {
				document.getElementById('resposta-1').className = 'option-incorreta'
			}
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}

			setTimeout(nextQuestion,800)
		}

	console.log(`escolha do jogador:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}
	

	//pergunta 3

	if (i == 4) {
		escolha_correta = 'Almofadinhas, Rabixo, Pontas, Aluado'

		if (escolha_correta === 'Almofadinhas, Rabixo, Pontas, Aluado' && escolha === 'b') {
			console.log('Resposta correta')
			document.getElementById('resposta-2').className = 'option-correta'
			pontuacao += 1
			setTimeout(nextQuestion,800)
		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'a') {
				document.getElementById('resposta-1').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}
			if (escolha === 'd') {
				document.getElementById('resposta-4').className = 'option-incorreta'
			}

			setTimeout(nextQuestion,800)
		}

	console.log(`escolha do jogador:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}


	//pergunta 4


	if (i == 5) {
		escolha_correta = 'Uma fenix'

		if (escolha_correta === 'Uma fenix' && escolha === 'a') {
			console.log('Resposta correta')
			document.getElementById('resposta-1').className = 'option-correta'
			pontuacao += 1
			setTimeout(nextQuestion,800)
		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}
			if (escolha === 'd') {
				document.getElementById('resposta-4').className = 'option-incorreta'
			}

			setTimeout(nextQuestion,800)
		}

	console.log(`escolha do jogador:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}


	//pergunta 5

	if (i == 6) {
		escolha_correta = 'Nicolau Flamel'

		if (escolha_correta === 'Nicolau Flamel' && escolha === 'a') {
			console.log('Resposta correta')
			document.getElementById('resposta-1').className = 'option-correta'
			pontuacao += 1
			setTimeout(nextQuestion,800)
		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}
			if (escolha === 'd') {
				document.getElementById('resposta-4').className = 'option-incorreta'
			}

			setTimeout(nextQuestion,800)
		}

	console.log(`escolha do jogador:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}


	//pergunta 6


	if (i == 7) {
		escolha_correta = 'Um Cachorro'

		if (escolha_correta === 'Um Cachorro' && escolha === 'c') {
			console.log('Resposta correta')
			document.getElementById('resposta-3').className = 'option-correta'
			pontuacao += 1
			setTimeout(nextQuestion,800)

			
		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'a') {
				document.getElementById('resposta-1').className = 'option-incorreta'
			}
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'd') {
				document.getElementById('resposta-4').className = 'option-incorreta'
			}

			setTimeout(nextQuestion,800)
		}

	console.log(`escolha do jogador:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}


	//pergunta 7 


	if (i == 8) {
		escolha_correta = 'Alvo Percival Wulfrico Brian Dumbledore'

		if (escolha_correta === 'Alvo Percival Wulfrico Brian Dumbledore' && escolha === 'd') {
			console.log('Resposta correta')
			document.getElementById('resposta-4').className = 'option-correta'
			pontuacao += 1
			setTimeout(nextQuestion,800)			

		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'a') {
				document.getElementById('resposta-1').className = 'option-incorreta'
			}
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}

			setTimeout(nextQuestion,800)
		}

	console.log(`escolha do jogador:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}

	//pergunta 8

  if (i == 9) {
		escolha_correta = 'Merlin'

		if (escolha_correta === 'Merlin' && escolha === 'd') {
			console.log('Resposta correta')
			document.getElementById('resposta-4').className = 'option-correta'
			pontuacao += 1
			setTimeout(nextQuestion,800)			

		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'a') {
				document.getElementById('resposta-1').className = 'option-incorreta'
			}
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}

			setTimeout(nextQuestion,800)
		}

	console.log(`escolha do jogador:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}

  
	//pergunta 9


	if (i == 10) {
		escolha_correta = 'Avada Kedavra'

		if (escolha_correta === 'Avada Kedavra' && escolha === 'c') {
			console.log('Resposta correta')
			document.getElementById('resposta-3').className = 'option-correta'
			pontuacao += 1
			setTimeout(nextQuestion,800)	


		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'a') {
				document.getElementById('resposta-1').className = 'option-incorreta'
			}
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'd') {
				document.getElementById('resposta-4').className = 'option-incorreta'
			}

			setTimeout(nextQuestion,800)
		}

	console.log(`escolha do jogador:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}


}



















