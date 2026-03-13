function buscarCEP() {

const cep = document.getElementById("cep").value;
const resultado = document.getElementById("resultado");

fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(response => response.json())
.then(dados => {

if(dados.erro){

resultado.innerText = "CEP não encontrado.";

}else{

resultado.innerText =
`Rua: ${dados.logradouro}
Bairro: ${dados.bairro}
Cidade: ${dados.localidade}
Estado: ${dados.uf}`;

}

})
.catch(erro => {

resultado.innerText = "Erro ao buscar CEP.";
console.log(erro);

});

}