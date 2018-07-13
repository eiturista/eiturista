const logincadastro = document.querySelector("#usuario");
const botaoicone = document.querySelector("#icone_perfil");

function aparecer(){
        if(logincadastro.classList.contains("active")){
            logincadastro.classList.remove("active");
            botaoicone.classList.remove("active");
        }
        else{
            logincadastro.classList.add("active");
            botaoicone.classList.add("active");
        
    }
    
    botaoicone.onclick = aparecer;
}