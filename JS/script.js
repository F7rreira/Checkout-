let inputCPF = document.getElementById("cpfUsuario");
let inputTel = document.getElementById("telUsuario");
let inputCep= document.getElementById("cepUsuario");
let inputCartao = document.getElementById("cartaoUsuario");
let inputConfirmarSenha=document.getElementById("confirmaUsuario");
let inputSenha=document.getElementById("senhaUsuario");
let inputCvv= document.getElementById("cvvUsuario");
let inputCpfTitular= document.getElementById("cpftitularUsuario")
let inputBairro=document.getElementById("bairroUsuario")
let inputEndereco=document.getElementById("endUsuario")
let inputCidade= document.getElementById("cidadeUsuario")


inputCPF.addEventListener("keyup",(event)=>{  // validar o campo cpf só para numeros
    //if(!isNaN(inputCPF.value)) se fosse para deletar numero ao inves de caractere
    if(isNaN(inputCPF.value)){              // uma condição para q o cliente so digite numeros
    inputCPF.value= inputCPF.value.substring(0,(inputCPF.value.length-1));     
if(inputCPF.value.length>=11){
    inputCPF.value=inputCPF.value.substring (0,11); // deixa o campo só em numericos e limita
}
    }    
})

inputTel.addEventListener("keyup",(event)=>{

    if(inputTel.value.length>=11){
        inputTel.value=inputTel.value.substring(0,11);
    }
})
function buscarcep (cep){
    let config = {
        method: "GET"
    }
fetch(`viacep.com.br/ws/${cep}/json/`,config)               //consumindo api de endereço metodo para realizar
.then(response => response.json())
.then()
}
inputCep.addEventListener("keyup",(event)=>{

    if(inputCep.value.length>=8){
        inputCep.value=inputCep.value.substring(0,8);
        
    }
})
inputCartao.addEventListener("keyup",(event)=>{

    if(inputCartao.value.length>= 16){
        inputCartao.value=inputCartao.value.substring(0,16);
    }
})


inputCvv.addEventListener("keyup",(event)=>{

    if(inputCvv.value.length>= 3){
        inputCvv.value=inputCvv.value.substring(0,3);
    }
})

inputCpfTitular.addEventListener("keyup",(event)=>{

    if(inputCpfTitular.value.length>= 11){
        inputCpfTitular.value=inputCpfTitular.value.substring(0,11);
    }
})
inputConfirmarSenha.addEventListener("keyup",(e)=>{
    if(inputConfirmarSenha.value != inputSenha.value){
        inputConfirmarSenha.setAttribute('class','form-control is-invalid')
    } else{
        inputConfirmarSenha.setAttribute ('class', 'form-control is-valid')
    }
})

