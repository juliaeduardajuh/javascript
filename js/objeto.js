var listaCarros = []

//Declarando um objeto e informando atributos
//Todo objeto declarado com {}
var carro = {
    ano: '2020',
    modelo: 'Gol',
    marca:'vw'
} 
 //Para exibir o atributo do objeto faço da seguinte forma
 //Objeto.atribuido
console.log (carro.ano + ' - ' + carro.modelo)
console.log (`${carro.ano} - ${carro.modelo}`)

//Adicionando o objeto carroao vetor listaCarro
listaCarros.push(carro)

console.log (listaCarros.length) // 1 - Só existe 1 item
//Novo objeto
carro = {
    ano: '2020',
    modelo: 'Onix',
    marca:'GM'
} 
//Adicionando novo objeto carro no vetor listaCarro
listaCarros.push(carro)
console.log (listaCarros)
 //Exibindo uma lista apenas com o modelo do carro   
    for (var pos in listaCarros) {
        //Acessando o indice do vetor e o atributo modelo
        console.log (listaCarros[pos].modelo)
    }