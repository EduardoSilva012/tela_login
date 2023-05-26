let btn = document.querySelector("#senha");
let btncheck = document.querySelector("#check");

let name = document.querySelector("#name");
let label_name = document.querySelector("#label_name");
let validnome = false;

let email = document.querySelector("#email");
let label_email = document.querySelector("#label_email");
let validemail = false;

let username = document.querySelector("#username");
let label_username = document.querySelector("#label_username");
let validusername = false;

let password = document.querySelector("#password");
let label_password = document.querySelector("#label_password");
let validpassword = false;

let checkpassword = document.querySelector("#checkpassword");
let label_checkpassword = document.querySelector("#label_checkpassword");
let validcheckpassword = false;

let msgError = document.querySelector(".msgError");
let msgSuccess = document.querySelector(".msgSuccess");

name.addEventListener('keyup', () => {
    if (name.value.length <= 2) {
        label_name.setAttribute('style', 'color: #FF4500;');
        name.setAttribute('style', 'border-color: #FF4500;');
        label_name.innerHTML = 'Nome invalido!';
        validnome = false;
    }else{
        label_name.setAttribute('style', 'color: green;');
        name.setAttribute('style', 'border-color: green;');
        label_name.innerHTML = 'Nome';
        validnome = true;
    }
});


username.addEventListener('keyup', () => {
    if (username.value.length <= 10) {
        label_username.setAttribute('style', 'color: #FF4500;');
        username.setAttribute('style', 'border-color: #FF4500;');
        label_username.innerHTML = 'Usuário invalido!';
        validusername = false;
    }else{
        label_username.setAttribute('style', 'color: green;');
        username.setAttribute('style', 'border-color: green;');
        label_username.innerHTML = 'Usuário';
        validusername = true;
    }
});

email.addEventListener('keyup', () => {
    if (email.value.length <= 10) {
        label_email.setAttribute('style', 'color: #FF4500;');
        email.setAttribute('style', 'border-color: #FF4500;');
        label_email.innerHTML = 'E-mail invalido!';
        validemail = false;
    }else{
        label_email.setAttribute('style', 'color: green;');
        email.setAttribute('style', 'border-color: green;');
        label_email.innerHTML = 'E-mail';
        validemail = true;
    }
});

password.addEventListener('keyup', () => {
    if (password.value.length <= 10) {
        label_password.setAttribute('style', 'color: #FF4500;');
        password.setAttribute('style', 'border-color: #FF4500;');
        label_password.innerHTML = 'Senha invalida!';
        validpassword = false;
    }else{
        label_password.setAttribute('style', 'color: green;');
        password.setAttribute('style', 'border-color: green;');
        label_password.innerHTML = 'Senha';
        validpassword = true;
    }
});

checkpassword.addEventListener('keyup', () => {
    if ( password.value != checkpassword.value) {
        label_checkpassword.setAttribute('style', 'color: #FF4500;');
        checkpassword.setAttribute('style', 'border-color: #FF4500;');
        label_checkpassword.innerHTML = 'As senhas não correspondem';
        validcheckpassword = false;
    }else{
        label_checkpassword.setAttribute('style', 'color: green;');
        checkpassword.setAttribute('style', 'border-color: green;');
        label_checkpassword.innerHTML = 'Confirmar senha';
        validcheckpassword = true;
    }
});

console.log(password,checkpassword);

btn.addEventListener("click", () => {
    let inputSenha = document.querySelector("#password")
   
    
    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.setAttribute("type", "text")
    }else{
        inputSenha.setAttribute("type", "password")
       
    }

});

btncheck.addEventListener("click", () => {
    
    let inputcheckpassword = document.querySelector("#checkpassword")
    
    if(inputcheckpassword.getAttribute("type") == "password"){
        inputcheckpassword.setAttribute("type", "text")
    }else{
        inputcheckpassword.setAttribute("type", "password")
       
    }

});


function cadastrar() {

    if (validnome && validemail && validusername && validpassword && validcheckpassword) {
        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Usuário cadastrado com sucesso!</strong>'; 
        
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = ''; 

    }else{
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = '<strong><p>Falha ao cadastar usuário.</p> <p>Todos os campos devem ser preenchidos corretamente.</p></strong>'; 

        msgSuccess.setAttribute('style', 'display: none');
        msgSuccess.innerHTML = ''; 

    }
}