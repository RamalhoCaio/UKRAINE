function doar(){
var agua = document.getElementById("agua").value
var arroz = document.getElementById("arroz").value
var batata = document.getElementById("batata").value
var frango = document.getElementById("frango").value
var leite = document.getElementById("leite").value
var macarrao =  document.getElementById("macarrao").value
  
document.getElementById("resultado").innerHTML = ((agua*0.005)+(arroz*6)+(batata*5)+(frango*16)+(leite*5)+(macarrao*3))

alert("Esse será o valor da sua contribuicao, preencha os dados do carta para finalizar o processo.")
}

function salvar(){
  var nome = document.getElementById("nome").value
  var numero = document.getElementById("numero").value
  var cpf = document.getElementById("cpf").value
  var validade = document.getElementById("validade").value
  var cvv = document.getElementById("cvv").value

  localStorage.setItem("Nome do titular", nome)
  localStorage.setItem("Numero do cartao", numero)
  localStorage.setItem("CPF titular", cpf)
  localStorage.setItem("Data vencimento", validade)
  localStorage.setItem("CVV", cvv)

  
  alert("as informacoes inseridas foram salvas")
}



function comprar(){
  alert("Sua doacao foi realizada, obrigado por cooperar com o bem do proximo")
}
