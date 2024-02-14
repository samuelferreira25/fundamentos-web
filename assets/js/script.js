let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
let  txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
txtNome.innerHTML= 'Nome invalido'
txtNome.style.color = 'red' 
    }else{
        txtNome.innerHTML = 'Nome valido'
        txtNome.style.color = 'green '
    }
}

function validaEmail () {
    let txtEmail = document.querySelector('txtEmail')

    if (email.value.indexOf('@') == -1){
        txtEmail.innerHTML = "Email invalido"
        txtEmail.style.color = "red"

    }else{
        txtEmail.innerHTML = "Email valido"
        txtEmail.style.color = "green"
    }
}