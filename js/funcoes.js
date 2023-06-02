//Declarando uma função sem parametro e sem retorno
function exibirInformaçao(){
    console.log (`executei a função exibir info`)
}

//chamando a minha informação
exibirInformaçao()
exibirInformaçao()
exibirInformaçao()

function ricardocalculetabuada(nr){
    for (var i=1; i<=20; 1++){
        console.log(`${nr} x ${i} = ${nr * i}`)
    }
}
//Chamando função
ricardocalculetabuada(428)