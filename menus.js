const loginCadastro = document.querySelector(".usuario");
const botaoIcone = document.querySelector(".icone_perfil");
const botaoLogin = document.querySelector(".logar");
const botaoCadastro = document.querySelector(".cadastrar");
const telaCadastrar = document.querySelector(".cadastro");
const telaLogar = document.querySelector(".login");
const linkLogin = document.querySelector(".link_login");
const linkCadastro = document.querySelector(".link_cadastro");

function aparecerMenu(){
        if(!botaoIcone.classList.contains("active")){
            loginCadastro.classList.add("active");
            botaoIcone.classList.add("active");   
        }
        else{
            loginCadastro.classList.remove("active");
            botaoIcone.classList.remove("active");
            telaCadastrar.classList.remove("active"); 
            telaLogar.classList.remove("active"); 
        }
}

function mostrarTelaCadastrar(){
    if(!telaCadastrar.classList.contains("active")){
        telaCadastrar.classList.add("active");
        loginCadastro.classList.remove("active");
        telaLogar.classList.remove("active");    
    }
}

function mostrarTelaLogar(){
    if(!telaLogar.classList.contains("active")){
        telaLogar.classList.add("active");
        loginCadastro.classList.remove("active");
        telaCadastrar.classList.remove("active");    
    }
}

botaoIcone.onclick = aparecerMenu;
botaoCadastro.onclick = mostrarTelaCadastrar;
botaoLogin.onclick = mostrarTelaLogar;
linkLogin.onclick = mostrarTelaLogar;
linkCadastro.onclick = mostrarTelaCadastrar;