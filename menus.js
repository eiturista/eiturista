const loginCadastro = document.querySelector(".usuario");
const botaoIcone = document.querySelector(".icone_perfil");
const botaoLogin = document.querySelector(".logar");
const botaoCadastro = document.querySelector(".cadastrar");
const telaCadastrar = document.querySelector(".cadastro");
const telaLogar = document.querySelector(".login");


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

function cadastrar(){
    if(!telaCadastrar.classList.contains("active")){
        telaCadastrar.classList.add("active");
        loginCadastro.classList.remove("active");
        telaLogar.classList.remove("active");    
    }
    console.log("cadastrar");
    // else{
    //     loginCadastro.classList.remove("active");
    //     botaoIcone.classList.remove("active");
    // }
}

function logar(){
    if(!telaLogar.classList.contains("active")){
        telaLogar.classList.add("active");
        loginCadastro.classList.remove("active");
        telaCadastrar.classList.remove("active");    
    }
    console.log("logar");
    // else{
    //     loginCadastro.classList.remove("active");
    //     botaoIcone.classList.remove("active");
    // }
}

botaoIcone.onclick = aparecerMenu;
botaoCadastro.onclick = cadastrar;
botaoLogin.onclick = logar;