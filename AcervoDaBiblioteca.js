let titulos = ["Copa do Mundo", "Guerra", "Pandemia", "Carros", "Pelé", "Guerra", "Política", "Programação"]
let autores = ["João", "Zé", "Maria", "Rodrigo", "Francisco", "Zé", "João", "Jorge"]
let anos = [2006, 1890, 2020, 2000, 1950, 2000, 2014, 2021]
let idiomas = ["Português", "Inglês", "Português", "Espanhol", "Inglês", "Alemão", "Português", "Inglês"]
let contador = 7

console.log(titulos)
console.log(autores)
console.log(anos)
console.log(idiomas)

let autor = prompt(`Qual o autor deseja procurar ?`)
BuscarAutor(autor)

let ano = prompt(`Qual ano deseja buscar?`)
BuscarAno(ano)

autor = prompt(`Qual o autor deseja procurar ?`)
ano = parseInt(prompt(`A partir de qual ano quer fazer a busca?`))
BuscarLivrosDoAno(autor, ano)

let nome = prompt(`Qual o nome do livro que deseja buscar?`)
BuscarPeloNome(nome)

let idioma = prompt(`Digite o idioma que deseja buscar!`)
BuscarPeloIdioma(idioma)

OrdenarPeloAno()

function BuscarAutor(autorParametro) {
    let livros = []
    let ano = []
    let idioma = []
    let contadorLivros = 0
    for (let index = 0; index <= contador; index++) {
        if (autorParametro == autores[index]) {
            livros[contadorLivros] = titulos[index]
            ano[contadorLivros] = anos[index]
            idioma[contadorLivros] = idiomas[index]
            contadorLivros++
        }
    }
    console.log(livros, ano, idioma)
}

function BuscarAno(anoParametro) {
    let livros = []
    let escritor = []
    let idioma = []
    let contadorLivros = 0
    for (let index = 0; index < contador; index++) {
        if (anoParametro == anos[index]) {
            livros[contadorLivros] = titulos[index]
            escritor[contadorLivros] = autores[index]
            idioma[contadorLivros] = idiomas[index]
            contadorLivros++
        }
    }
    console.log(livros, escritor, idioma)
}

function BuscarLivrosDoAno(autorParametro, anoParametro) { 
    let livros = []
    let escritor = []
    let ano = []
    let idioma = []
    let contadorLivros = 0

    for (let index = 0; index <= contador; index++) {
        if (autorParametro == autores[index] && anos[index] > anoParametro) {
            livros[contadorLivros] = titulos[index]
            escritor[contadorLivros] = autores[index]
            ano[contadorLivros] = anos[index]
            idioma[contadorLivros] = idiomas[index]
            contadorLivros++
        }
    }
    console.log(livros, escritor, ano, idioma)
}

function BuscarPeloNome(nomeParametro) {
    let livrosTodosIdiomas = []
    let contadorLivros = 0
    for (let index = 0; index <= contador; index++) {
        if (nomeParametro == titulos[index]) {
            livrosTodosIdiomas[contadorLivros] = idiomas[index]
            contadorLivros++
        }
    }
    console.log(`O livro ${nomeParametro} tem nas versões - ${livrosTodosIdiomas}`)
}

function BuscarPeloIdioma(idiomaParametro) {
    let livros = []
    let escritor = []
    let ano = []
    let contadorLivros = 0

    for (let index = 0; index <= contador; index++) {
        if (idiomaParametro == idiomas[index]) {
            livros[contadorLivros] = titulos[index]
            escritor[contadorLivros] = autores[index]
            ano[contadorLivros] = anos[index]
            contadorLivros++
        }
    }
    console.log(livros, escritor, ano)
}

function OrdenarPeloAno() {
    let anosAux, titulosAux, autoresAux, idiomasAux
    for (let atual = 0; atual <= contador - 1; atual++) {
        for (let seguinte = atual + 1; seguinte <= contador; seguinte++) {
            anosAux = anos[seguinte]
            titulosAux = titulos[seguinte]
            autoresAux = autores[seguinte]
            idiomasAux = idiomas[seguinte]
            if (anos[atual] > anos[seguinte]) {
                anos[seguinte] = anos[atual]
                titulos[seguinte] = titulos[atual]
                autores[seguinte] = autores[atual]
                idiomas[seguinte] = idiomas[atual]
                titulos[atual] = titulosAux
                autores[atual] = autoresAux
                anos[atual] = anosAux
                idiomas[atual] = idiomasAux
            }
        }
    }
    console.log(titulos, autores, anos, idiomas)
}

