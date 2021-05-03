//PARTE DAS QUESTÕES QUE SOMEM E APARECEM AO CLICAR
export default function questionsTab(){
	const accordionDT = document.querySelectorAll('.js-accordion dt');
	const acordionDD = document.querySelectorAll('.js-accordion dd');

	acordionDD[0].classList.add('ativo'); //Definindo o primeiro filho de tabContent como padrão ao inicializar

	function activeAccordion(index){
		acordionDD.forEach((section) => {
			section.classList.remove('ativo'); //Removando a classe 'ativo' quando inserir em outro elemento
		});

		acordionDD[index].classList.add('ativo'); //Inserindo a classe 'ativo' no elemento quando clicado
	}

	accordionDT.forEach((itemMenu, index) => { //Percorrendo o menu para pegar todos os itens
		itemMenu.addEventListener('click', () => { //Inserindo o evento de clique 
			activeAccordion(index); // Usando a callback da função declarada fora
		});
	});
}
