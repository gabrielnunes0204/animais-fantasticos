/* DATASET */ 
// const div = document.querySelector('div');
// const div = document.querySelector('[data-cor]'); //Pegando o atributo data-cor da div no HTML

// div.dataset.height = 550; //Atribuindo um novo data para a div no HTML
// delete div.dataset.height; //Deletando o atributo data da div no HTML

// console.log(div);
// console.log(div.dataset);
// console.log(div.dataset.cor);

/* EXERCÍCIOS - DATASET */

//01° Exercício
const section = document.querySelectorAll('.animais-descricao section');

section.forEach((item) => {
	item.dataset.animeDown = 'show-down';    //Atribuindo um novo atributo 'data' para a constante
	item.dataset.animeRight = 'show-right';  //Atribuindo um novo atributo 'data' para a constante
})

// console.log(section);

//02° Exercício
function textAnimals(){
	const tabMenu = document.querySelectorAll('.js-tabmenu li');
	const tabContent = document.querySelectorAll('.js-tabcontent section');

	tabContent[0].classList.add('ativo');

	function activeTab(index){
		tabContent.forEach((section) => {
			section.classList.remove('ativo');
		});
		const direcRight = tabContent[index].dataset.animeRight;
		const directDown = tabContent[index].dataset.animeDown;
		tabContent[index].classList.add('ativo', direcRight, directDown); //Adicionando essas classes as TabContent's
	}

	tabMenu.forEach((itemMenu, index) => {
		itemMenu.addEventListener('click', () => { 
			activeTab(index);
		});
	});
}
textAnimals();

/* NEXT */

const carros = ['Carro1', 'Carro2'];
const pessoa = {
	nome: 'Gabriel',
	idade: 21,
	casado: false,
}

// console.log(Object.prototype.toString.call(carros)); //Verificar o tipo de variável
// console.log(Object.prototype.toString.call(pessoa)); //Verificar o tipo de variável
