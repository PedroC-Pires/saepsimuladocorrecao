let link = ""

function goto(link){
    window.location.href = link
}

function entrar(){
    if(document.getElementById("estudante").checked) {
        goto("estudante.html")
    } else if(document.getElementById("biblio").checked){
        goto("biblio.html")
    } else{
        alert("Você deve selecionar 'Estudante' ou 'Bibliotecário' nas caixas de seleção.")
    }
}