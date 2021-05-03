//PARTE DOS TEXTOS DOS ANIMAIS AO CLICAR NA IMAGEM

export default function activeAnimals(){
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


/*export default function activeAnimals(){
	const tabMenu = document.querySelectorAll('.js-tabmenu li');
	const tabContent = document.querySelectorAll('.js-tabcontent section');

	// if(tabMenu.lenght && tabContent.length){ //Verificando se os elementos estão vazios
		
	// }
	tabContent[0].classList.add('ativo'); //Definindo o primeiro filho de tabContent como padrão ao inicializar

	function activeTab(index){
		tabContent.forEach((section) => {
			section.classList.remove('ativo'); //Removando a classe 'ativo' quando inserir em outro elemento
		});

		tabContent[index].classList.add('ativo'); //Inserindo a classe 'ativo' no elemento quando clicado
	}

	tabMenu.forEach((itemMenu, index) => { //Percorrendo o menu para pegar todos os itens
		itemMenu.addEventListener('click', () => { //Inserindo o evento de clique 
			activeTab(index); // Usando a callback da função declarada fora
		});
	});
}*/