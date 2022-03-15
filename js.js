function adicionarFilme() { //função do button onclick no HTML para add filme
    var filmeFavorito = document.getElementById("filme").value; // variavel criada filmeFavorito para pega o elemento pelo ID filme com apenas seu valor por issoo .value
    if (filmeFavorito.endsWith(".jpg")) { // if criado para que aceite o formato .jpg 
      listarFilmesNaTela(filmeFavorito); // para chamar o filme na tela, o listarFilmeNaTela é da segunda function criada
    } else {
      console.error("Endereço de filme inválido"); //gera um erro caso o link nao termine com .jpg
    }
    document.getElementById("filme").value = ""; // aqui pega o elemento pelo ID filme no HTML, apenas seu valor e sendo igual a "" para que todas vez que adcionar um filme o campo inserir filme seja limpo automaticamente
}
  
function listarFilmesNaTela(filme) { // segunda função criada para separar da primeira e ficar mais legivel, (filme) poderia ser filmeFavorito repetindo a variavel, mas resolvi mudar para mostrar que são duas diferentes fazendo a mesma função no final
    console.log(filme); // imprime no console o link do filme
    var elementoFilmeFavorito = "<img src=" + filme + ">"; // a variavel elementoFilmeFavorito criada para que adicione o filme como img
    var elementoListaFilmes = document.getElementById("listaFilmes"); // segunda variavel criada puxando do HTML dentro da DIV o ID listaFilme para que seja impresso na tela
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito; // aqui é para que o elementoListaFilme = elementoListaFilme adicione elementoFilmeFavorito, traduzindo é para que imprima um filme após o outro e fique um ao lado do outro... innerHTML significa inserir do HTML
}