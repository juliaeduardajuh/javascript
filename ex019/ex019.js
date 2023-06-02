function movies(){
    var filmes = ['Enrolados','Scream','A princesa e o sapo','Harry Potter','Vingadores']
    for (var i = 0; i < filmes.length; i++){
        document.getElementById("toporca").innerHTML += `${i} - ${filmes[i]}<br>`
    }}