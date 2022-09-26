
let sliderElement = document.querySelector("#slider");/* referenciando e pegar o intem slider para uso */
let buttonElement = document.querySelector("#button");/* referenciando e pegar o intem button para uso */

let sizePassword = document.querySelector("#valor");/* referenciando e pegar o intem valor para uso */
let password = document.querySelector("#password");/* referenciando e pegar o intem password para uso */

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijlmnopqrstuvxzwykABCDEFGHIJLMNOPQRSTUVXZWYK1234567890!@#$%&*";/* "alfabeto"possiblidade de caracteres para gerar senha*/
let novaSenha = ""; /*Para começar com a primeira senha vazia */

sizePassword.innerHTML = sliderElement.value; /*mostrar os caraceteres do slide = tamanho */

slider.oninput = function(){ /*função*/
    sizePassword.innerHTML = this.value;/*Toda vez que é alterado o valor do slider, o sizePassword recebe e motra esse valor */
}

function generatePassword(){ /*função do botao gerar senha obs"ATRIBUIR ESSA FUNÇAO AO BOTÃO"*/
    /*alert("VAMOS GERAR A SENHA ")Add ao index.html dentro do botao, função - onclick="generatePassword()" */
   let pass =""; /*Começando com senha vazia */
   for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));/*Gerando um numero aleatorio com base no tamanho de caracteres digitado no charset */
   }

  containerPassword.classList.remove("hide");/*Lista a classe containerPassword e remove para pode aparecer a descrição */
  password.innerHTML = pass;
  novaSenha = pass; /*Passando para a nova senha o valor de pass 'senha nova gerada' */
}

function copyPassword(){ /* função para o usuario copiar a senha */
  alert("Senha copiada com sucesso!")
  navigator.clipboard.writeText(novaSenha);/*Copia o que estiver dentro da variavel novaSenha */
}/*Para que a funça seja completa e copiada para qualquer area é preciso add a função ao index.html */


