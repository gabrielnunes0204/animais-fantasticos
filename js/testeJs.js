/*const animais = document.getElementById("animais");
const grid = document.getElementsByClassName("grid-section");
const ul = document.getElementsByTagName("ul");

console.log(animais);
console.log(grid);
console.log(ul);

let animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);

const gridSectionNode = document.querySelectorAll(".grid-section");

gridSectionNode.forEach(function(item, index){
	console.log(item);
});*/

/*const imagens = document.getElementsByTagName("img");
console.log(imagens);

const imagensAnimais = document.querySelectorAll('img[src^="images/imagem"]');
console.log(imagensAnimais);

const links = document.querySelectorAll("a[href^='#']");
console.log(links);

const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);

const ultimoP = document.querySelectorAll("p");
const ultimoP2 = document.querySelector("footer p");
	
console.log(ultimoP[ultimoP.length-1]);
console.log(ultimoP2);*/

/*const img = document.querySelectorAll("img");
img.forEach(function(item, index){
	console.log(item, index);
})*/

// HTMLColletion --> Array = querySelector, querySelectorAll;
// Node --> Array = btClassName, byId, byTagName;

/*const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
	console.log(item);
});

/*let i = 1;
img.forEach(() => console.log(i++));*/

/*const img = document.querySelectorAll("img");
img.forEach((item, index) => {
	console.log(item, index);
});*/

/*const paragrafos = document.querySelectorAll("p");

paragrafos.forEach(function(item){
	console.log(item);
});

paragrafos.forEach(function(item){
	console.log(item.innerText);
});*/

/* NEXT */

/*const menu = document.querySelector(".menu");

console.log(menu.className); //Nome da classe
console.log(menu.classList); //Verifica as classes
menu.classList.add('ativo'); //Adiciona classe ao elemento
menu.classList.remove('azul'); //Remove uma classe
menu.classList.contains('azul') //Verifica se a classe existe

if(menu.classList.contains('azul')){
	console.log("Possui a classe Azul");
} else {
	console.log("N??o possui a classe Azul");
}

const animais = document.querySelector(".animais");

console.log(animais.attributes); //Usado para verificar os atributos do elemento
console.log(animais.attributes[0]); //O primeiro atributo do elemento
console.log(animais.attributes[1]); //O segundo atributo do elemento

const img = document.querySelector("img");

console.log(img.getAttribute('src')); //Pegando o source da imagem
console.log(img.getAttribute('alt')); //Pegando o alt da imagem

//console.log(variavel.setAttribute('nomeAtributo', 'valor')); 
// Setando o nome do atributo e seu valor para um elemento

img.hasAttribute('alt'); //Verificar se o atributo existe

if(img.hasAttribute('alt')){
	console.log("A imagem possui ALT");
} else {
	console.log("A imagem n??o possui ALT");
}

let carro = {
	portas: 4,
	andar: function(km){
		console.log(`O carro andou ${km} km por hora`)
	}
}
console.log(carro.andar(25));*/

/* NEXT */

/*const itensMenu = document.querySelectorAll(".menu a");

itensMenu.forEach((item) => {
	item.classList.add('ativo');
})

itensMenu.forEach((item) => {
	item.classList.remove('ativo');
})

const imagens = document.querySelectorAll("img");

imagens.forEach((img) => {
	if(img.hasAttribute('alt')){
		console.log("A imagem possui o atributo ALT");
	} else {
		console.log("A imagem n??o possui o atributo ALT");
	}
});

const linkExterno = document.querySelector('a[href^="https"]');
console.log(linkExterno);
linkExterno.setAttribute('href', 'https://www.google.com/');*/

/* NEXT */

/*const listaAnimais = document.querySelector(".animais-lista");
const animaisTop = listaAnimais.offsetTop; //Dist??ncia do elemento para o topo da p??gina
const animaisLeft = listaAnimais.offsetLeft; //Dist??ncia do elemento da esquerdo para onde ele est??
const rect = listaAnimais.getBoundingClientRect(); //Mostra v??rios valores de dist??ncia do elemento

console.log(listaAnimais.clientHeight); //Height + Padding
console.log(listaAnimais.offsetHeight); // Height + Padding + Border
console.log(listaAnimais.scrollHeight); // Height total, mesmo dentro de scroll

console.log(animaisTop);
console.log(animaisLeft);
console.log(rect);

console.log(
	window.innerWidth, //Mostra a largura da tela
	window.innerHeight, //Mostra a altura da tela
	window.outerWidth, //Mostra a largura da tela de acordo com o console aberto
	window.outerHeight, ////Mostra a altura da tela de acordo com o console aberto
	window.pageYOffset, //Quanto de Scroll demos no eixo Y (Cima-Baixo)
	window.pageXOffset, ////Quanto de Scroll demos no eixo X (Lado a outro)
);

const telaPequena = window.matchMedia("(max-width: 600px)"); //Vari??vel com max-width de 600px

if(telaPequena.matches){ //Matches ?? usado como comparativo do tamanho da tela
	console.log("Tela menor que 600px");
} else {
	console.log("Tela maior que 600px");
}*/

/* NEXT */

/*const primeiraImagem = document.querySelector("img");
const imagemTopo = primeiraImagem.offsetTop;
console.log(imagemTopo);


const todasImagens = document.querySelectorAll("img");

let totalWidthImagens = 0;
todasImagens.forEach((img) => {
	if(img.clientWidth > 0){
		totalWidthImagens = img.clientWidth;
	}
});
console.log("Total da soma dos Width: " + totalWidthImagens); 


const linksPage = document.querySelectorAll("a");

linksPage.forEach((link) => {
	const linkWidth = link.offsetWidth;
	const linkHeight = link.offsetHeight;

	if(linkWidth >= 48 && linkHeight >= 48){
		console.log(linksPage + " Possui acessibilidade");
	} else {
		console.log(linksPage + " N??o possui boa acessibilidade");
	}
})


const telaMobile = window.matchMedia("(max-width: 720px)");
const menu = document.querySelector(".menu");

if(telaMobile.matches){ //Matches ?? usado como comparativo do tamanho da tela
	menu.classList.add('menu-mobile');
	console.log(menu);
} else {
	console.log("Tela maior que 720px");
}*/

/* NEXT */

// const img = document.querySelector("img");
// const animaisLista = document.querySelector(".animais-lista");
// const linkExterno = document.querySelector("a[href^='http']");

//img.addEventListener('click', () => { //Arrow Function
//	console.log("Clicou na imagem");
//});

//img.addEventListener('click', function() { //Fun????o An??nima
//	console.log("Clicou na imagem");
//});

// function mostrarMensagem(event){
// 	console.log(event);
// };
// img.addEventListener('click', mostrarMensagem); //Chamando a fun????o declarada fora

// function callback(event){
// 	console.log(event.currentTarget); //Mostra o elemento pai
// 	console.log(event.target);        //Mostra os elementos filhos
// }

// function handleLinkExterno(event){
// 	event.preventDefault(); //Usado para links externos, que ao serem clicados, n??o ser??o direcionados para //outra p??gina
// 	console.log(event);
// }

// animaisLista.addEventListener('click', callback);
// linkExterno.addEventListener('click', handleLinkExterno);

// const h1 = document.querySelector("h1");

// function handleEvent(event){
	// console.log(event.type, event);
// };

// h1.addEventListener('click', handleEvent);      //Evento de clique
// h1.addEventListener('mouseenter', handleEvent); //Evento de Mouse passando por cima
// h1.addEventListener('mousemove', handleEvent);  //Evento de Mouse movimentando por cima
// window.addEventListener('scroll', handleEvent);  //Evento de scroll na p??gina 
// window.addEventListener('resize', handleEvent);  //Evento de aumento e diminui????o da p??gina
// window.addEventListener('keydown', handleEvent);  //Evento de aumento e diminui????o da p??gina


// function handlerKeyBoard(event){
	// if(event.key === 'g'){
		// console.log("Foi usada a tecla G");
	// } else if(event.key === 'a'){
		// console.log("Foi usada a tecla A");
	// } else if(event.key === 'f'){
		// console.log("Foi usada a tecla F");
	// } else {
		// console.log("A tecla n??o se encontra na lista");
	// }
// }
// window.addEventListener('keydown', handlerKeyBoard);

// const imagens = document.querySelectorAll('img');
// function imgSrc(event){
	// const src = event.currentTarget.getAttribute('src');
	// console.log(src);
// }
// imagens.forEach((item) => {
	// item.addEventListener('click', imgSrc);
// });

/* NEXT */

//1?? Exerc??cio
// const linksInternos = document.querySelectorAll("a[href^='#']");

// function insereClasse(event){
	// event.preventDefault();
	
	// linksInternos.forEach((link) => {
		// link.classList.remove('ativo');
	// })
	
	// event.currentTarget.classList.add('ativo');
// }

// linksInternos.forEach((item) => {
	// item.addEventListener('click', insereClasse);
// });

//2?? Exerc??cio
// const todosElementos = document.querySelectorAll('body *');

// function mostraClique(event){
	// console.log(event.target);
// }

// todosElementos.forEach((item) => {
	// item.addEventListener('click', mostraClique);
// })

//3?? Exerc??cio
// const todosElementos = document.querySelectorAll('body *');

// function mostraClique(event){
	// event.target.remove();
// }

// todosElementos.forEach((item) => {
	// item.addEventListener('click', mostraClique);
// })

//4?? Exerc??cio
// const textoAumentar = document.querySelectorAll('body *'); 

// function keyCliqueTela(event){
// 	if(event.key === 't'){
// 		document.documentElement.classList.toggle('textomaior');
// 	} else {
// 		console.log("Uma tecla diferente da T foi pressionado");
// 	}
// }
// window.addEventListener('keydown', keyCliqueTela);

/* NEXT */

// const menu = document.querySelector('.menu');
// const h1 = document.querySelector('h1');

//console.log(menu.outerHTML); //Retorna o HTML inteiro do elemento
//console.log(menu.innerHTML); //Retorna o HTML interno
//console.log(menu.innerText); //Retorna o conte??do do HTML, as Strings
//console.log(menu.innerText = 'Texto'); //Substitui o conte??do por uma tag com o texto
//console.log(menu.innerHTML = 'Texto que substitui'); //Substitui o conte??do por um texto

// console.log(h1.outerHTML);
// console.log(h1.innerText);
// console.log(h1.innerHTML);

//const lista = document.querySelector('.animais-lista');

// console.log(lista.parentElement); //Retorna o Pai do elemento
// console.log(lista.parentElement.parentElement); //Retorna o Pai do Pai do elemento
// console.log(lista.previousElementSibling); //Retorna o elemento de cima do elemento requerido
// console.log(lista.nextElementSibling); //Retorna o elemento de baixo do elemento requerido

// console.log(lista.children); //Retorna um HTML Colletion com os filhos do elemento
// console.log(lista.children[0]); //Retornando o primeiro filho do HTML Colletion do elemento
// console.log(lista.children[--lista.children.length]); //Retornando o ??ltimo filho do HTML Colletion do elemento

//console.log(lista.querySelectorAll('li')); //Retornando todos os LI's do elemento

// console.log(lista.previousSibling); //Retorna o node acima - Normalmente o espa??o entre o elemento e o pr??ximo
// console.log(lista.nextSibling); //Retorna o node abaixo - Normalmente o espa??o entre o elemento e o pr??ximo

// console.log(lista.firstChild); //Retorna o 1?? Node do Child
// console.log(lista.childNodes); //Retorna todos os Nodes do Child

// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const animais = document.querySelector('.animais');
// const mapa = document.querySelector('.mapa');

// console.log(contato);
// console.log(titulo);

//animais.appendChild(titulo); //Movendo o titulo para a lista
//animais.insertBefore(lista, titulo); //Move a lista e t??tulo para animais com o lista em cima
//animais.removeChild(titulo); //Remove o t??tulo de animais
//contato.replaceChild(lista, titulo); //Substitui um elemento por outro

// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'Novo t??tulo';

// console.log(novoH1.innerText);
// novoH1.classList.add('titulo');
// console.log(novoH1.outerHTML);

// mapa.appendChild(novoH1); //Adicioando a nova tag ap??s Mapa

// const titulo1 = document.querySelector('h1');
// const titulo2 = document.querySelector('h1');
// const faq = document.querySelector('.faq');

// const adicionaNovo = titulo1.cloneNode(true); //Fazendo um clone de uma tag para usando em outra parte do site sem interferir na original

// faq.appendChild(adicionaNovo); //Adicionando o clone ao final de FAQ

//console.log(titulo1, titulo2);

//const novoTitulo = titulo1;
//console.log(novoTitulo);

//const cloneTitulo = titulo.cloneNode(true);

/* NEXT */

//1?? Exerc??cio
// const menu = document.querySelector('.menu');
// const copy = document.querySelector('.copy');

// const cloneMenu = menu.cloneNode(true);

// copy.appendChild(cloneMenu);

//2?? Exerc??cio
// const faq = document.querySelector('.faq');

// console.log(faq.children[2]); //Forma 1

// const dtFaq = faq.querySelector('dt'); //Forma 2
// console.log(dtFaq);

//3?? Exerc??cio
// const primeiroDT = document.querySelector('dt');

// console.log(primeiroDT.nextElementSibling);

//4?? Exerc??cio
// const faq = document.querySelector('.faq');
// const animais = document.querySelector('.animais');

// faq.innerHTML = animais.innerHTML;

// function Carro(marcaAtribuida, precoInicial, anoAtribuido){
	// const taxa = 1.2;
	// const precoFinal = precoInicial * taxa;
	// this.marca = marcaAtribuida;
	// this.preco = precoFinal;
	// this.ano = anoAtribuido;
// }

// const honda = new Carro('Honda', '15000', '2016');
// console.log(honda);
// console.log(honda.marca, honda.preco, honda.ano);

// const fiat = new Carro('Fiat', '6500', '2006');
// console.log(fiat);
// console.log(fiat.marca, fiat.preco, fiat.ano);

// const dom = {
	// selector: 'li', 
	// element: function(){
		// return document.querySelector(this.selector);
	// },
	// ativar: function(){
		// this.element().classList.add('ativo');
	// },
// }

// function Dom(seletor){             		    //Fun????o construtura com par??metro
	// this.element = function(){      		    //Propriedade como fun????o
		// return document.querySelector(seletor); //Pegando no documento HTML o seletor que ir?? ser passado
                                      //mais pra frente e retornando ele
	// }
	// this.ativar = function(classe){           //Propriedade como fun????o e com par??metro
		// this.element().classList.add(classe);//Pegando a propriedade/fun????o acima e adiciona uma classe 
	// }
// }

// const li = new Dom('li');            //Inst??nciado um novo objeto de DOM chamado li com o par??metro 'li'
// const liUltimo = new Dom('li:last-child'); //Inst??nciado um novo objeto de DOM chamado liUltimo que pega o
                                    //??ltimo LI da lista
// const ul = new Dom('ul');          //Inst??nciado um novo objeto de DOM chamado ul com o par??metro ul
// li.ativar('MinhaClasse');             //Ativando em li a fun????o ativar com a classe que eu quiser


// function Dom(){                       //Fun????o construtora diferente da de cima, sem par??metros
	// this.seletor = 'li';                  //Propriedade com o this e o valor 'li'
	// const elemento = document.querySelector(this.seletor); //Propriedade elemento que pega do documento
                                                    // HTML o seletor que ir?? ser passado mais a //frente
	// this.ativar = function(){            //Propriedade/Fun????o ativar com o this
		// elemento.classList.add('ativo');    //Adicionando uma classe na propriedade elemento
	// };
// }

// const lista = new Dom();  //Inst??nciado um novo objeto de DOM chamado lista
// lista.seletor = 'ul';        //Colocando o valor de 'ul' para lista 
// lista.ativar();             //Ativando a fun????o ativar()

// const ultimaLista = new Dom();
// ultimaLista.seletor = 'li:last-child';
// ultimaLista.ativar();

/* NEXT */

//1?? Exerc??cio
/*const pessoa = {
	nome: 'Nome Pessoa',
	idade: 0,
	andar(){
		console.log(this.nome + ' andou');
	}
}

function Pessoa(nome, idade){
	this.nome = nome;
	this.idade = idade;
	this.dirigir = function(){
		if(this.idade >= 18){
			console.log(this.nome + ' pode dirigir');
		} else {
			console.log('N??o pode dirigir');
		}
		
	};
}*/

//2?? Exerc??cio
/*const pessoa1 = new Pessoa('Jo??o', 20);
const pessoa2 = new Pessoa('Maria', 25);
const pessoa3 = new Pessoa('Bruno', 15);

console.log(Pessoa());
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);*/

//3?? Exerc??cio
/*function Dom(seletor){
	const elementosLista = document.querySelectorAll(seletor);
	this.elemento = elementosLista;
	this.addClass = function(classe){
		elementosLista.forEach((item) => {
			item.classList.add(classe);
		})
	}
	this.removeClass = function(classe){
		elementosLista.forEach((item) => {
			item.classList.remove(classe);
		})
	}
}

const listaItens = new Dom('li');
const ul = new Dom('ul');

listaItens.addClass('ativar');
ul.addClass('ativar-ul');

ul.removeClass('ativar-ul');
listaItens.removeClass('ativar');*/

/* NEXT */

/*function Pessoa(nome, idade){
	this.nome = nome;
	this.idade = idade;
}

const pessoa1 = new Pessoa('Gabriel', 21);*/

// console.log(Pessoa.prototype);
// console.log(pessoa1.prototype);

/*Pessoa.prototype.dirigir = function(){
	if(this.idade > 18){
		console.log(this.nome + ' pode dirigir')
	} else {
		console.log(this.nome + ' n??o pode dirigir');
	}
}

Pessoa.prototype.nadar = function(){
	const saberNadar = window.prompt("Sabe Nadar? (Responda com Sim ou N??o)");

	if(saberNadar === 'Sim' || saberNadar === 'sim'){
		console.log(this.nome + ' sabe nadar');
	} else {
		console.log(this.nome + ' n??o sabe nadar');
	}
}

const pais = 'Brasil';
const cidade = new String('Rio');

// console.log(pais.charAt(0));
// console.log(cidade.charAt(1), cidade.toUpperCase());

const lista = document.querySelectorAll('li');

const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

console.log(listaArray1);
console.log(listaArray2);*/

/* NEXT */

//1?? Exerc??cio
// function Pessoa(nome, sobrenome, idade){
// 	this.nome = nome;
// 	this.sobrenome = sobrenome;
// 	this.idade = idade;
// }

// Pessoa.prototype.nomeCompleto = function(){
// 	return this.nome + " " + this.sobrenome;
// }
// const pessoa1 = new Pessoa('Gabriel', 'Nunes', 21);
// const pessoa2 = new Pessoa('Fernanda', 'Miranda', 22);

// //2?? Exerc??cio
// console.log(NodeList.prototype);
// console.log(HTMLCollection.prototype);
// console.log(Document.prototype);

// //3?? Exerc??cio

// const li = document.querySelector('li');

// li; //HTML LI Element
// li.click; //Fun????o
// li.innerText; //String
// li.value; //Number
// li.hidden; //Boolean
// li.offsetLeft; //Number
// li.click(); //Undefined

//Qual o construtor do dado abaixo?
//li.hidden.construtor.name; //String

/* NEXT */

// const itemExistente = (typeof Object !== 'undefined') ? 'Existe' : 'N??o existe';
// console.log(itemExistente);

//1?? Exerc??cio - Listar objetos nativos
// console.log(Math);
// console.log(function(){});
// console.log(Array.from);
// console.log(Object);
// console.log(String);

// console.log('Fim');
// console.log('Come??o');

//2?? Exerc??cios - Lista objetos do browser
// console.log(window);
// console.log(document);
// console.log(NodeList);
// console.log(HTMLCollection);
// console.log(history);

// console.log('Fim');
// console.log('Come??o');

/* NEXT */

// const comida = 'Pizza';
// const liquido = new String('??gua');

// console.log(`A palavra ${comida} tem ${comida.length} letras`);
// console.log(`A palavra ${liquido} tem ${liquido.lenght} letras`);

// console.log(comida[0], comida[1], comida[2], comida[3], comida[4]);
// console.log(`A primeira letra de ${liquido} ?? ${liquido[0]}`);

// const fruta = 'Banana';
// let listaFrutas = 'Banana Laranja Melancia';

// console.log(fruta.includes(listaFrutas)); //Verifica se a vari??vel listaFrutas est?? inclusa em fruta
// console.log(listaFrutas.includes(fruta)); //Verifica se a vari??vel fruta est?? inclusa em listaFrutas

// console.log(fruta.endsWith('na'));   //Verifica a vari??vel frutas termina com 'na'
// console.log(fruta.startsWith('Ba')); //Verifica a vari??vel frutas come??a com 'Ba'
// console.log(fruta.startsWith('na')); //Verifica a vari??vel frutas come??a com 'na'

// console.log(fruta.slice(0,3)); //Mostra somente as tr??s primeiras letras da vari??vel fruta
// console.log(fruta.slice(0,5));
// console.log(fruta.slice(0,6));
// console.log(fruta.slice(2)); //Quando ?? passado um valor fixo, ele come??a a contar a partir daquela at?? a ??ltima

// console.log(fruta.indexOf('B')); //Retorna em que ??ndice est?? o que foi requerido
// console.log(fruta.indexOf('n'));

// console.log(fruta.padStart(20, '.')); //Aumenta o tamanho da vari??vel para 20 caracteres e coloco . para preencher no come??o
// console.log(fruta.padEnd(20, '.'));   ////Aumenta o tamanho da vari??vel para 20 caracteres e coloco . para preencher no final

// console.log(fruta.repeat(2)); //Repete 2 vezes o conte??do da vari??vel

// const arrayFruta = Array.from(fruta);

// let qtde = 0;
// arrayFruta.forEach((item) => {
// 	if(item === 'a'){
// 		qtde = qtde + 1;
// 	}
// });
// console.log(`Em ${fruta} tem ${qtde} letras A`);

// listaFrutas = listaFrutas.replaceAll(' ', ', '); //Muda os espa??o da vari??vel por v??rgulas
// console.log(listaFrutas);

// const arrayLista1 = Array.from(listaFrutas);
// const arrayLista2 = listaFrutas.split(', '); //Split faz com que a vari??vel vire um Array e insere o que foi passado entre par??nteses
// console.log(arrayLista1);
// console.log(arrayLista2);

/* NEXT */

// function Carro(marcaAtribuida, precoInicial, anoAtribuido){
// 	const taxa = 1.2;
// 	const precoFinal = precoInicial * taxa;
// 	this.marca = marcaAtribuida;
// 	this.preco = precoFinal;
// 	this.ano = anoAtribuido;
// }

// const honda = new Carro('Honda', '15000', '2016');
// /*honda.marca = 'Honda';
// honda.preco = 15000;
// honda.ano = 2016;*/

// const fiat = new Carro('Fiat', '6500', '2006');
// /*fiat.marca = 'Fiat',
// fiat.preco = 6500;
// fiat.ano = 2006;*/

// console.log(honda);
// console.log(honda.marca, honda.preco, honda.ano);

// console.log(fiat);
// console.log(fiat.marca, fiat.preco, fiat.ano);

/* NEXT */

//1?? Exerc??cio - Somar os valores de Taxa e Recebimento
// const transacoes = [{
// 	descricao: 'Taxa do P??o',
// 	valor: 'R$ 39',
// },
// {
// 	descricao: 'Taxa do Mercado',
// 	valor: 'R$ 129',
// },
// {
// 	descricao: 'Recebimento de Cliente',
// 	valor: 'R$ 99',
// },
// {
// 	descricao: 'Taxa do Banco',
// 	valor: 'R$ 129',
// },
// {
// 	descricao: 'Recebimento do Cliente',
// 	valor: 'R$ 49',
// },
// ]

// let valorTaxa = 0;
// let valorRecebimento = 0;
// transacoes.forEach((item) => {
// 	let valores = item.valor.slice(3,6);
// 	valores = Number(valores);
	
// 	if(item.descricao.startsWith('Taxa')){
// 		valorTaxa += valores;
// 	} else {
// 		valorRecebimento += valores;
// 	}
// });

// console.log(valorTaxa);
// console.log(valorRecebimento);

// //2?? Exerc??cio - Transformar a lista num Array
// const transportes = 'Carro;Avi??o;Trem;??nibus;Bicicleta';
// const arrayTransportes = transportes.split(';')

// console.log(arrayTransportes);

//3?? Exerc??cio - Substituir os span's por a's
// const html = `<ul>
// 				<li><span> Sobre </span></li>
// 				<li><span> Produtos </span></li>
// 				<li><span> Contato </span></li>
// 			 </ul>`;

// const htmlAlterada = html.replaceAll('span', 'a');

// console.log(html);
// console.log(htmlAlterada);

//4?? Exerc??cio - Retornar o ??ltimo caracter da vari??vel
// const frase = 'O melhor time ?? o seu';
// console.log(`O ??ltimo caracter da frase "${frase}" ?? o ${frase.slice(-1)}`);

//5?? Exerc??cio - Retornar o total de palavras 'Taxa' no Array
// const transition = ['Taxa do Banco','TAXA DO P??O','taxa do mercado','dep??sito Banc??rio','TARIFA especial'];

// let totalTaxas = 0;
// transition.forEach((item) => {
// 	item = item.toLowerCase();
// 	console.log(item)

// 	if(item.startsWith('taxa')){
// 		totalTaxas += 1;
// 	}
// });
// console.log(`O total da palavra taxa na vari??vel ?? de ${totalTaxas}`);

/* NEXT */

// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(5));

// console.log(Number.isInteger(7));
// console.log(Number.isInteger(7.2));

// const preco1 = 10.25;
// const preco2 = 10.55;
// const preco3 = 10.75;
// console.log(preco1.toFixed());
// console.log(preco2.toFixed(2));
// console.log(preco3.toFixed());

// let valor1 = 48.49;
// let valor2 = 52.77;
// valor1 = valor1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); //Transformando o valor em Real
// valor2 = valor2.toLocaleString('en-US', {style: 'currency', currency: 'BRL'}); //Transformando o valor em D??lar

// console.log(valor1);
// console.log(valor2);
// console.log(Math.PI.toFixed(2));

// console.log('Math com Ceil (Arredonda pra cima): ' + Math.ceil(5.8));
// console.log('Math com Ceil (Arredonda pra cima): ' + Math.ceil(5.1));
// console.log('Math com Floor (Arredonda pra baixo): ' + Math.floor(5.8));
// console.log('Math com Floor (Arredonda pra baixo): ' + Math.floor(5.1));
// console.log('Math com Round (Arredonda pra de acordo com o n??mero): ' + Math.round(5.9));
// console.log('Math com Round (Arredonda pra de acordo com o n??mero): ' + Math.floor(5.1));
// console.log('Math com Max (Retorna o maior n??mero): ' + Math.max(2,8,9,42,54,33));
// console.log('Math com Min (Retorna o menor n??mero): ' + Math.min(2,8,9,42,54,33));
// console.log('N??meros aleat??rios de 0 ?? 100: ' + Math.random() * 100);
// console.log('N??meros aleat??rios de 0 ?? 100: ' + Math.floor(Math.random() * 100)); //Math Floor usado para arrendondar o n??mero
//console.log('Math com floor e random entre 32 e 72: ' + Math.floor(Math.random() * (72 - 32 + 1) + 32));

/* NEXT */

//1?? Exerc??cio - N??mero aleat??rio entre 1050 e 2000
// const numeroAleatorio = Math.floor(Math.random()* (2000 - 1050 + 1) + 1050);
// console.log(`N??mero aleat??rio entre 1050 e 2000: ${numeroAleatorio}`);

// 2?? Exerc??cio - Retornar o maior n??mero
// let numeros = '24, 5, 20, 77, 9';
// const arrayNumeros = numeros.split(', ');
// const maiorNumero = Math.max(...arrayNumeros); //Os 3 pontinhos faz com que o array seja separado por cada item

// console.log(`O maior n??mero de ${numeros} ?? o: ${maiorNumero}`);

//3?? Exerc??cio - Limpar os pre??os, retornar os n??meros com centavos arredondados e retornar a soma total
// const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];
// let somaPrecos = 0;

// function editarNumeros(){
// 	listaPrecos.forEach((item) => {
// 		item = +item.trim().slice(3,8).replaceAll(' ', '').replaceAll(',', '.');
// 		item = +item.toFixed(2);
// 		somaPrecos += item;
		
// 		console.log((item));
// 	})
// 	console.log(`A soma total dos n??meros ?? de: ${somaPrecos.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
// }
// editarNumeros();

/* NEXT */

// const carros = new Array('Ferrari', 'Mustang', 'BMW', 'Camaro');
// console.log(carros);
// console.log(carros[3]);

// carros[3] = 'Bentley';
// console.log(carros);
// console.log(carros[3]);

// const lista = document.querySelectorAll('li');
// const arrayLista = Array.from(lista);

// console.log(lista);
// console.log(arrayLista);

// const objeto = {
// 	0: 'Gabriel',
// 	1: 'Nunes',
// 	2: 'Santos',
// 	length: 3,
// }
// const arrayObjeto = Array.from(objeto); //Transformando um Objeto num Array
// console.log(arrayObjeto);

// console.log(Array.isArray(lista));
// console.log(Array.isArray(arrayLista)); //Verifica se ?? um Array

// const frutas = ['Banana', 'Melancia', ['Per??', 'Ma??a']]; //Um Array dentro de outro

// console.log(frutas[2][0].length);

// const instrumentos = ['Tambor', 'Guitarra', 'Violino', 'Ukelele'];

// console.log(instrumentos.sort()); //sort() organiza o Array em ordem alfab??tica

// const nomes = ['Gabriel', 'Fernanda', 'Felipe'];
// console.log(nomes);

// nomes.unshift('Julia');
// nomes.push('Nalva', 'Gilberto');
// // nomes.shift(); // Tira o primeiro elemento do Array
// // nomes.pop();   // Tira o ??ltimo elemento do Array
// console.log(nomes);
// console.log(nomes[nomes.length-1]); //??ltimo conte??do do Array

// const cores = ['Vermelho', 'Azul', 'Amarelo'];
// console.log(cores);

// cores.splice(0,0, 'Verde', 'Laranja') //O primeiro ??ndice indica de ontem vai come??ar a inser????o e o segundo ??ndice indica quantos elementos voc?? quer apagar no Array para fazer essa inser????o
// console.log(cores);

// const esportes = ['Basquete', 'Rubgy', 'Nata????o', 'V??lei'].fill('Futebol'); //Preenche todo o Array com a mesma palavra passada na Fill
// console.log(esportes);

// const veiculos1 = ['Carro', 'Moto'];
// const veiculos2 = ['??nibus', 'Caminh??o', 'Barco'];
// const uniaoVeiculos = veiculos1.concat(veiculos2); //Concatenando duas Array's
// const cloneVeiculos = uniaoVeiculos.slice(); //Clonando um Array

// console.log(veiculos1);
// console.log(veiculos2);
// console.log(uniaoVeiculos);
// console.log(cloneVeiculos);

// console.log(veiculos1.includes('Carro'));
// console.log(veiculos1.includes('Caminh??o')); //Includes verifica se existe no Array o valor passado

// console.log(veiculos2.indexOf('??nibus'));
// console.log(veiculos2.indexOf('Caminh??o')); //IndexOf mostra em que ??ndice est?? o valor passado
// console.log(veiculos2.lastIndexOf('Barco')); //lastIndexOf mostra o ??ltimo ??ndice do valor passado
// console.log(uniaoVeiculos.join(', ')); //Join ?? usado para juntar todo o Array, e dentro dos () passo o que ir?? separa-los
// console.log(uniaoVeiculos.slice(1,4)); //Slice retorna o conte??do do primeiro at?? o ??ltimo ??ndice passados

/* NEXT */

//1?? Exerc??cio
// const comidas = ['Pizza', 'Frango', 'Carne', 'Macarr??o'];
// const primeiraComida = comidas[0];
// const ultimaComida = comidas[comidas.length-1]

// console.log(comidas);
// console.log(primeiraComida);
// console.log(ultimaComida);

// comidas.push('Arroz');
// console.log(comidas);

// comidas.unshift('Peixe', 'Batata');
// console.log(comidas);

//2?? Exerc??cio
// const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

// console.log(estudantes);
// console.log(estudantes.sort());
// console.log(estudantes.reverse());
// console.log('Joana faz parte dos estudantes? ' + estudantes.includes('Joana'));
// console.log('Juliana faz parte dos estudantes? ' + estudantes.includes('Juliana'));

//3?? Exerc??cio
// let html = `<section>
// 				<div> Sobre </div>
// 				<div> Produtos </div>
// 				<div> Contato </div>
// 			</section>`;
// console.log(html);

// html = html.split('section').join('ul').split('div').join('li');
// console.log(html);

//4?? Exerc??cio
// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// const cloneCarros = carros.slice();

// carros.pop();
// console.log(carros);
// console.log(cloneCarros);

/* NEXT */

// const carros = ['Ford', 'Fiat', 'Honda'];
// carros.forEach((item, index, array) => {
// 	console.log(item.toUpperCase(), index, array);
// });


// const veiculos = ['Ferrari', 'Bentley', 'BMW'];
// veiculos.forEach((item, index, array) => {
// 	array[index] = 'Ve??culo: ' + item; //Adiciono no item do Array a palavra 'Carro' na frente dela
// });

// console.log(veiculos);

// const nomes = ['Gabriel', 'Felipe', 'Julia'];
// nomes.map((item, index, array) => {
// 	console.log(item.toUpperCase(), index, array);
// });


// const aulas = [
// {
// 	nome: 'HTML',
// 	min: 15,
// },
// {
// 	nome: 'CSS',
// 	min: 25,
// },
// {
// 	nome: 'Javascript',
// 	min: 35,
// },
// {
// 	nome: 'Vue JS',
// 	min: 60,
// }
// ];

// let tempoAulas = 0;
// aulas.map((item) => {
// 	tempoAulas += item.min;
// });
// console.log(`O total dos minutos somados ?? de: ${tempoAulas}`);

// const aulas2 = [25,25,30];

// const reduceAulas = aulas2.reduce((acumulador, item) => { //Consigo somar os valores dos itens caso sejam Number
	// return acumulador + item;
// })
// console.log(reduceAulas);

// const numeros = [10, 25, 60, 75, 155, 10];

// const numeroMaior = numeros.reduce((anterior, atual) => { //Verificando qual n??mero ?? o maior da lista com condi????o tern??ria
	// return (anterior < atual) ? atual : anterior;
// })
// console.log(numeroMaior);

// const frutas = ['Banana', 'P??ra', 'Uva'];

// const arrayFrutas = frutas.reduceRight((acc, fruta) => { //Reduce Right inverte a ordem como ?? mostrado o Array
	// return acc + ' ' + fruta;
// });
// console.log(arrayFrutas);

// const temUva = frutas.some((item) => { //O Some verifica se h?? algum item de compara????o que exista na lista
	// return item === 'Uva';
// });
// console.log(`Tem uva? ${temUva}`);

// const temLaranja = frutas.some((item) => { //O Some verifica se h?? algum item de compara????o que exista na lista
	// return item === 'Laranja';
// });
// console.log(`Tem laranja? ${temLaranja}`);

// const indexUva = frutas.findIndex((item) => { //FindIndex verifica o index do item desejado
	// return item === 'Uva';
// });
// console.log('Index da Uva: ' + indexUva);

// const primeiraFruta = frutas.find((item) => {
	// return item;
// })
// console.log('A primeira fruta da lista ?? a: ' + primeiraFruta);


// const arrayMisturado = ['Gabriel', null, 'Felipe', 'Julia', undefined, '', 'Fernanda'];

// const limparArray = arrayMisturado.filter((item) => { //Filter pode ser usado para limpar o Array e tr
	// return item;
// })
// console.log(limparArray);

/* NEXT */

//1?? Exerc??cio
// let cursos = document.querySelectorAll('section');
// console.log(cursos);

// const arrayCursos = Array.from(cursos);
// console.log(arrayCursos);

// const retornaArray = arrayCursos.map((item) => {
	// const titulo = item.querySelector('h1').innerText;
	// const descricao = item.querySelector('p').innerText;
	// const aula = item.querySelector('.aulas').innerText;
	// const hora = item.querySelector('.horas').innerText;
	// return {
		// titulos: titulo,
		// descricoes: descricao,
		// aulas: aula,
		// horas: hora,
	// }
// });
// console.log(retornaArray);

// //2?? Exerc??cio
// const numeros = [3, 44, 333, 23, 122, 455, 33, 788];

// const numerosMaiores = numeros.filter((item) => {
	// return item > 100;
// })
// console.log(numerosMaiores);

// //3?? Exerc??cio
// const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

// const temBaixo = instrumentos.some((item) => {
	// return item === 'Baixo';
// })
// console.log('Tem BAIXO na lista? ' + temBaixo);

// //4?? Exerc??cio
// const compras = [
// {
	// item: 'Banana',
	// preco: 'R$ 4,99',
// },
// {
	// item: 'Ovo',
	// preco: 'R$ 2,99',
// },
// {
	// item: 'Carne',
	// preco: 'R$ 25,49',
// },
// {
	// item: 'Refrigerante',
	// preco: 'R$ 5,35',
// },
// {
	// item: 'Queijo',
	// preco: 'R$ 10,60',
// },
// {
	// item: 'Arroz',
	// preco: 'R$ 5,50',
// },
// ];

// let somaPrecos = 0;
// compras.map((item) => {
	// item.preco = +item.preco.slice(3).replace(',', '.');
	// somaPrecos += item.preco;
	// item.preco = item.preco.toFixed(2);
	
	// console.log('Pre??os: ' + item.preco);
// });
// console.log('A soma total dos pre??os fica: ' + somaPrecos);

/* NEXT */

// function areaQuadrado(lado){
	// return lado * lado;
// }
// console.log('A ??rea do quadrado ?? de: ' + areaQuadrado(2) + ' ' + 'e tem: ' + areaQuadrado.length + ' par??metros na fun????o');

// const areaPerimetro = new Function('lado', 'return lado * 4');

// console.log('A ??rea do per??metro ?? de: ' + areaPerimetro(5));

// const carro = {
	// marca: 'Ford',
	// anoModelo: 2018, 
// };

// function descricaoCarro(){
	// console.log(this.marca + ' ' + this.anoModelo);
// }

// // console.log(descricaoCarro()); //Undefined Undefined
// console.log(descricaoCarro.call(carro)); //Ford 2018
// console.log(descricaoCarro.call({marca: 'Ferrari', anoModelo: 2021})); //Ferrari 2021 - Colocando novos valores

// const carros = ['BMW', 'Ferrari', 'Bentley'];

// carros.forEach.call(carros, (item) => { //Percorrendo o array usando o Call
// 	console.log(item);
// })

// function Dom(seletor){
// 	this.element = document.querySelector(seletor);
// }

// const ul = new Dom('ul');
// const li = new Dom('li');

// console.log(ul.element);
// console.log(li.element);

// Dom.prototype.ativo = function(classe){ //Criando uma classe para o elemento da Function DOM
// 	this.element.classList.add(classe);
// }

// ul.ativo('ativar');

// const li = document.querySelectorAll('li');

// li.forEach((item) => {
// 	item.classList.add('ativo');
// });

// const filtro = Array.prototype.filter.call(li, (item) => { //O filter est?? sendo usado assim pois por padr??o as NodeList n??o tem o m??todo filter
// 	return item.classList.contains('ativo');
// });

// console.log(filtro);

// const numeros = [55, 6, 7, 88, 255, 27, 33, 233];

// const maior1 = Math.max.apply(null, numeros); //Apply pode ser usado pegar o maior n??mero de um Array, assim como na Call, ?? necess??rio passar um objeto no primeiro argumento 
// const maior2 = Math.max.call(null, 55, 6, 7, 88, 255, 27, 33, 233);

// console.log(maior1);
// console.log(maior2);

// const $ = document.querySelectorAll.bind(document); //Usando o bind para pegar o elemento do HTML de outra forma
// console.log($('li'));

/* NEXT */

//1?? Exerc??cio
// const paragrafos = document.querySelector('section').innerText;
// const arrayParagrafos = Array.from(paragrafos);

// let somaParagrafos = 0;
// arrayParagrafos.map((item) => {
// 	somaParagrafos += 1;
// });
// console.log('A soma total de caracteres dos par??grafos ?? de: ' + somaParagrafos);

//2?? Exerc??cio
// function criarElemento(tag, classe, conteudo){    //Fun????o para criar elementos no HTML
// 	const elemento = document.createElement(tag);
// 	classe ? elemento.classList.add(classe) : null;
// 	conteudo ? elemento.innerHTML = conteudo : null;

// 	return elemento;
// }
// console.log(criarElemento('ul', 'ativo', 'Conte??do da tag'));

//3?? Exerc??cio
// function criarH1(conteudo){
// 	const elemento = document.createElement('h1');
// 	elemento.classList.add('titulo');
// 	conteudo ? elemento.innerHTML = conteudo : null;

// 	return elemento;
// }

// console.log(criarH1('Conte??do da vari??vel'));
// console.log(criarH1('Outro conte??do'));

/* NEXT */

// const carro = {
// 	marca: 'Marca',
// 	anoModelo: 00,
// 	acelerar: function(){
// 		return this.marca + ' acelerou'; 
// 	},
// 	buzinar: function(){
// 		return this.marca + 'Buzinou';
// 	}
// }

// const honda = Object.create(carro);
// honda.marca = 'Honda';
// honda.anoModelo = 2018;

// console.log(honda);

// const funcaoAutomovel = {
// 	acelerar: function(){
// 		return 'Acelerou';
// 	},
// 	buzinar: function(){
// 		return 'buzinou';
// 	},
// }

// const moto = {
// 	rodas: 2,
// 	capacete: true,
// }
// const carro = {
// 	rodas: 4,
// 	capacete: false,
// }

// Object.assign(moto, funcaoAutomovel);  //Assing serve para juntar dois objetos, entrela??ando as mesmas propriedades
// Object.assign(carro, funcaoAutomovel);

// console.log(moto);
// console.log(carro);

// const moto = {
	
// }

// const carro = {

// }

// Object.defineProperties(moto, { //Essa fun????o define as propriedades que teremos para as propriedades do Objeto
	// rodas: {
		// value: 2,             //?? o conte??do da propriedade
		// configurable: false,  //?? poss??vel configurar o valor acima?
		// writable: false,      //?? poss??vel configurar mas n??o trocar de tipo?
		// enumerable: false,    //M??todo usado para obter o iterador
	// },
	// capacete: {
		// value: true,
		// configurable: false,
		// writable: false,
		// enumerable: false,
	// }
// })

// Object.defineProperties(carro, {
	// potencia: {
		// enumerable: true,
		// get: function(){
			// return 'A pot??ncia do carro ?? de: ' + this._potencia; //E aqui acima o c??lculo do set ?? pegado pelo get e retornado quando usamos o console.log
		// },
		// set: function(valor){
			// this._potencia = valor * 5; //Setando uma nova vari??vel com o conte??do dela sendo a multiplica????o
		// }
	// }
// })
// console.log(moto);
// console.log(carro);

// const frutas = ['Banana'];
// console.log(Object.getPrototypeOf(frutas)); //Mostrando o prototype do Array
// console.log(Array.prototype);             ////Mostrando os prototypes dos Array

// const carro = {
	// marca: 'Ford',
	// anoModelo: 2018,
// }

// Object.freeze(carro); //Impede que sejam alteradas as propriedades e impede que sejam criadas novas
// Object.seal(carro);  //Impede a adi????o de novas propriedades e impede que as atuais sejam deletadas, mas permite a mudan??a dos conte??dos
// //Object.preventExtensions(carro); //Impede que adicione propriedade, mas permite delete e altera????o conte??do

// console.log(carro);

// carro.marca = 'Ferrari';      //N??o funciona
// carro.anoModelo = 2021;   //N??o funciona
// carro.temSeguro = true;    //N??o funciona
// delete carro.marca;        //N??o funciona

// console.log(carro);

// const frutas = ['Banana', 'P??ra'];

// const fruta = 'Banana';

// console.log(Array.prototype.isPrototypeOf(frutas)); //True
// console.log(Array.prototype.isPrototypeOf(fruta));  //False

// console.log(frutas.toString());  //Retorna o Array em uma ??nica string e converte outros tipos para String

// console.log(Array.isArray(frutas)); //Verifica se ?? um Array -  Retorna True
// console.log(Array.isArray(fruta));  //Verifica se ?? um Array -  Retorna False

/* NEXT */

//1?? Exerc??cio

// const frutas = ['Banana', 'Uva', 'P??ra'];
// const fruta = 'Banana';
// const carro = {
	// marca: 'Ford',
	// anoModelo: 2018,
// }
// const verificaPreco = function(a, b){
	// return a + b;
// }

// function verificaTipo(constante){
	// return Object.prototype.toString.call(constante);
// }

// console.log(verificaTipo(frutas));
// console.log(verificaTipo(fruta));
// console.log(verificaTipo(carro));
// console.log(verificaTipo(verificaPreco));

//2?? Exerc??cio
// const quadrado = {
	// lado1: 5,
	// lado2: 5,
// }

// console.log(quadrado);

// Object.freeze(quadrado);
// quadrado.lado1 = 10;
// quadrado.lado2 = 15;

// console.log(quadrado);

// OU
// const quadrado = {
	
// }

// Object.defineProperties(quadrado, {
	// lado1: {
		// value: 5,
		// configurabe: false,
		// writable: false,
		// enumerable: false,
	// },
	// lado2: {
		// value: 5,
		// configurabe: false,
		// writable: false,
		// enumerable: false,
	// },
// })

// console.log(quadrado);

// quadrado.lado1 = 10;
// quadrado.lado2 = 15;

// console.log(quadrado);

//3?? Exerc??cio
// const configuracao = {
	// width: 800,
	// height: 600,
	// background:'#333',
// }

// console.log(configuracao);

// Object.freeze(configuracao);
// configuracao.width = 550;
// configuracao.height = 425;
// delete configuracao.background;

// console.log(configuracao);

//4?? Exerc??cio
// console.log(Object.getOwnPropertyNames(Array.prototype));
// console.log(Object.getOwnPropertyNames(String.prototype));

/* NEXT */

// const titulo = document.querySelector('h1');

// Object.prototype.toString.call(titulo);

/* setTIMEOUT e setINTERVAL */

// function espera(tempo){
// 	console.log(tempo);
// }
// setTimeout(espera, 3000, 'Depois de 3 segundos');

// //OU

// setTimeout(() => {
// 	console.log('Depois de 4 segundos');
// }, 4000);

//Meu nome no Console
// const nome = 'Gabriel';
// const arrayNome = Array.from(nome);

// for(let i = 0; i <= arrayNome.length; i++){
// 	setTimeout(() => {
// 		console.log(arrayNome[i]);
// 	}, 400 * i);
// }

// const btn = document.querySelector('button');

// function handleClick(){
// 	setTimeout(() => {
// 		btn.addEventListener('click', () => {
// 			btn.classList.add('ativo');
// 		})
// 	}, 1000);
// }
// handleClick();

/* setINTERVAL */
// function loop(texto){
// 	console.log(texto);
// }

//Em Looping
// setInterval(loop, 2000, 'Passou 2 segundos');

// let i = 0;
// setInterval(() => {
// 	console.log(i++);
// }, 2000);

//Parando um setINTERVAL
// const contagemLimitada = setInterval(callback, 1000);

// let i = 0;
// function callback(){
// 	console.log(i++);
// 	if(i > 10){
// 		clearInterval(contagemLimitada);
// 	}
// }

/* EXERC??CIOS setINTERVAL e setTimeOut*/

//01?? Exerc??cio - Mudando o background do body a cada 2s
// const body = document.querySelector('body');
// let i = 0;
// let timer;

// 	function mudarCor(){
// 	setInterval(() => {
// 		if(i % 2 === 0){
// 			body.style.background = 'blue';
// 			console.log('Ficou Azul');
// 		} else {
// 			body.style.background = 'red';
// 			console.log('Ficou Vermelho');
// 		}
// 		i++;
// 	}, 2000)
// }
// mudarCor();

//02?? Exerc??cio - Usar o setInterval para iniciar, pausar e resetar um cronometro
// const btnInit = document.querySelector('[data-init]');
// const btnPause = document.querySelector('[data-pause]');
// const btnReset = document.querySelector('[data-reset]');

// console.log(btnInit);
// console.log(btnPause);
// console.log(btnReset);

// function initContagem(){
	// btnInit.addEventListener('click', () => {
		// timer = setInterval(() => {
			// console.log(i++);
		// }, 700)
		// btnInit.setAttribute('disabled', '');
	// })
// }
// initContagem();

// function pauseContagem(){
	// btnPause.addEventListener('click', () => {
		// clearInterval(timer);
		// btnInit.removeAttribute('disabled');
	// })
// }
// pauseContagem();

// function resetContagem(){
	// btnReset.addEventListener('dblclick', () => {
		// timer = 0;
		// i = 0;
		// console.log('Resetado');
	// })
// }
// resetContagem();

/* OBJETO DATE */

// const agora = new Date();

// console.log(agora, typeof agora);

// console.log('Dia do M??s: ' + agora.getDate());
// console.log('Dia da Semana: ' + agora.getDay());
// console.log('M??s: ' + (agora.getMonth()+1));
// console.log('Ano: ' + agora.getFullYear());
// console.log('Horas e Minutos: ' + agora.getHours() + ':' + agora.getMinutes());
// console.log('Confuso: ' + agora.getTime());
// console.log('Padr??o Hor??rio de Brasi??lia: ' + (agora.getUTCHours() - 3));

// 	switch(agora.getMonth()){
// 		case 3:
// 			console.log('M??s de Abril');
// 			break;
// 		default:
// 			console.log('Indefinido');
// 	}
	
// function transformarDias(tempo){
// 	return tempo / (24 * 60 * 60 * 1000);
// }

// console.log('No total desde 1970 se passaram ' + transformarDias(agora.getTime()) + ' dias');

/* FORMUL??RIOS */

// const forms = document.querySelector()
// console.log(document.forms);                   // Pegando todos os formul??rios da p??gina
// console.log(document.forms.contato);           // Pegando o formul??rio de name/id 'Contato'
// console.log(document.forms.contato.elements);  // Pegando os elementos do formul??rio de nome/id 'Contato'
// console.log(document.forms[0].elements[0].value);  // Seleciona o 1?? form, seleciona o 1?? elemento e o valor dele

// const contato = document.querySelector('#contato');
// const texto = document.querySelector('.texto');

// function handleKeyUp(event){
// 	const target = event.target;

// 	if(!target.checkValidity()){             //checkValidity verifica se o campo de email por exemplo tem um email v??lido
// 		target.classList.add('invalido');
// 		target.nextElementSibling.innerHTML = `<br>` + target.validationMessage; //validationMessage insere uma mensagem de erro padr??o do browser
// 	} 

// console.log(event.target);        // O .target identifica em qual elemento estou usando o teclado
// console.log(event.target.value);  // O .target identifica qual foi o texto digitado no campo

// 	texto.innerText = event.target.value; // Colocando na constate 'texto' o valor de event.target.value, ou seja, o que for digitado nos campos
// }

// contato.addEventListener('change', handleKeyUp);     // Evento que identifica uso do teclado a cada tecla utilizada
// contato.addEventListener('change', handleKeyUp); // Evento que identifica uso do teclado mas somente no final do preenchimento do campo

// const dados = {};

// function handleKeyUp2(event){
// 	// console.log(event.target.value);
// 	document.body.style.backgroundColor = event.target.value; //Colocando no campo 'event.target' o value do select selecionado

// 	dados[event.target.name] = event.target.value; //Colocando no nome dos elementos o valor digitado ?? ele

// 	console.log(dados);

// 	if(event.target.checked){
// 		console.log('Marcado');
// 	} else {
// 		console.log('Desmarcado');
// 	}
// }

// contato.addEventListener('change', handleKeyUp2);

/* TRABALHANDO JS, HTML E CSS */

const controles = document.querySelector('#controls');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange);

const handleStyle = {    // Criando as fun????es de cada elemento do HTML 
	element: btn,
	texto(value){
		this.element.innerText = value;
	},
	backgroundColor(value){
		this.element.style.backgroundColor = value;
	},
	color(value){
		this.element.style.color = value;
	},
	height(value){
		this.element.style.height = value + 'px';
	},
	width(value){
		this.element.style.width = value + 'px';
	},
	border(value){
		this.element.style.border = value;
	},
	borderRadius(value){
		this.element.style.borderRadius = value + 'px';
	},
	fontFamily(value){
		this.element.style.fontFamily = value;
	},
	fontSize(value){
		this.element.style.fontSize = value + 'px';
	}

}

function handleChange(event){
	const name = event.target.name;    // Pegando o name do input
	const value = event.target.value;  // Pegando o texto/cor/n??mero ou qualquer outro par??metro/valor do input

	handleStyle[name](value); 
	saveValues(name, value);
	showCss();
}

function saveValues(name, value){    // Salvado os estilos no localStorage
	localStorage[name] = value;      // O nome do localStorage vai ser o valor que selecionarmos
}

function setValues(){
	const properties = Object.keys(localStorage);

	properties.forEach((item) => {
		handleStyle[item](localStorage[item]);
		controles.elements[item].value = localStorage[item];
	});

	showCss();
}
setValues();

function showCss(){
	cssText.innerHTML = btn.style.cssText.split('; ').join(';<br>'); 
	// Colocando no campo 'cssText' o estilo do bot??o
}


/* O que s??o Cookies? 
	S??o informa????es que voc?? deixou gravadas num site que poderam ser usadas como refer??ncia para pr??ximas visitas
*/

/* O que ?? localStorage?
	Onde ficam guardadas as informa????es/prefer??ncias que inserimos nos sites que usamos, guarda mesmo depois de fechar
	o browser
*/




