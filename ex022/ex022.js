var ListaFilme = []

function filme(){
    var nomeFilme = document.getElementById("txtFilme").value
    var imagemFilme = document.getElementById("image").value
       
    var filmes = {
        nome: nomeFilme,
        link: imagemFilme
    }

    ListaFilme.push(filmes)

        
        for(var i in ListaFilme){
        document.getElementById("lista").innerHTML += `${ListaFilme[i].nome}<br> <img src="${ListaFilme[i].link}"><br>`
    }
}
    function sortea(){
        var filmalea = parseInt(Math.random() * ListaFilme.length)
        document.getElementById("lista").innerHTML += 
        `
        <div>
        ${ListaFilme[filmalea].nome}<br>
        <img scr="${ListaFilme[filmalea].link}"> <br>
        </div>
        `
    }
    function validarCadastro(nomeFilme, imagemFilme){
        if (nomeFilme != '' && imagemFilme != ''){
            return true
        }else{
            return false
    }
}   
