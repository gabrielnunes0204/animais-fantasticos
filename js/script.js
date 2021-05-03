/* MODULES */

/* AO CLICAR NOS ANIMAIS, O TEXTO APARECE */ 
function activeAnimals(){
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
activeAnimals();

/* AO DESCER A PAGE, AS SECTIONS APARECEM COM EFEITO SMOOTH LATERAL */
function activeAnimationsSection(){
	const section = document.querySelectorAll(".js-scroll");
	const windowMetade = window.innerHeight * 0.6;

	function animaScroll(){
		section.forEach((item) => {
			const sectionTop = item.getBoundingClientRect().top - windowMetade;
			if(sectionTop < 0){
				item.classList.add('ativo');
			}
		});
	}

	animaScroll();
	window.addEventListener('scroll', animaScroll);
}
activeAnimationsSection();

/* PARTE DAS QUESTÕES COM ACCORDION */
function activeQuestionsTab(){
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
activeQuestionsTab();

/* PARTE DOS LINKS INTERNOS COM SCROLL SUAVE */
function activeLinksScroll(){
	const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

	function scrollToSection(event){
		event.preventDefault(); //Prevenindo o padrão
		const href = event.currentTarget.getAttribute('href'); //Pegando o HREF do link 
		const section = document.querySelector(href); //Ligando o HREF acima do link com a sessão especifica dele	

		//window.scrollTo(0, topo); - Para mover nos eixos x e y respectivamente
		
		//Uma das formas de se fazer
		//const topo = section.offsetTop; //Leva o link selecionado para o topo da sessão dele
		// window.scrollTo({
			// top: topo,
			// behavior: 'smooth', //Behavior = Comportamento e Smooth= Suave
		// });
		
		//Outra forma de se fazer
		section.scrollIntoView({           //Método que liga o link com a sessão dele
			behavior: 'smooth',
			block: 'start',
		}); 
	}

		linksInternos.forEach((item) => {
			item.addEventListener('click', scrollToSection);
		});
}
activeLinksScroll();

/* ATIVANDO MODAL COM CLIQUE */
function activeModal(){
	const btnClose = document.querySelector('.modal .fechar');
	const btnOpen = document.querySelector("[data-modal='abrir']");
	const sectionModal = document.querySelector("[data-modal='container']");

	if(btnClose && btnOpen && sectionModal){
		function openModal(){
			btnOpen.addEventListener('click', () => {
				sectionModal.classList.add('ativo');
			})
		}
		openModal();

		function closeModal(){
			btnClose.addEventListener('click', () => {
				sectionModal.classList.remove('ativo');
			})
		}
		closeModal();

		// function clickOutModal(event){
		// 	if(event.target === this){
		// 		closeModal(event);
		// 	}
		// }
		// clickOutModal();

		// sectionModal.addEventListener('click', clickOutModal);
	}
}
activeModal();

/* ATIVANDO O TOOLTIP */
function activeTooltip(){
	const tooltip = document.querySelectorAll('[data-tooltip');

	tooltip.forEach((item) => {
		item.addEventListener('mouseover', onMouseOver);
	})

	function onMouseOver(event){
		const tooltipBox = creacteTooltipBox(this);
		tooltipBox.style.top = event.pageY + 'px';
		tooltipBox.style.left = event.pageX + 'px';
		
		function onMouseLeave(){
			tooltipBox.remove();
		}
		
		this.addEventListener('mouseleave', onMouseLeave);
	}

	function creacteTooltipBox(element){
		const tooltipBox = document.createElement('div');
		const text = 'Estamos localizados ao lado do estacionamento'; /*element.getAttribute('aria-label')*/
		tooltipBox.classList.add('tooltip');
		tooltipBox.innerText = text;
		// document.body.appendChild(tooltipBox); //Isso faz com o tooltip funcione e também não funcione
		
		return tooltipBox;
	}
	creacteTooltipBox();
}
activeTooltip();

/* ATIVANDO O DROPDOWN */
const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach((item) => {
	item.addEventListener('touchstart', handleClick);
	item.addEventListener('click', handleClick);
})

function handleClick(event){
	event.preventDefault();
	this.classList.toggle('ativo');
}

/* ATIVANDO O MENU MOBILE */
const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

function openMenu(event){
	menuList.classList.add('ativo');
	menuButton.classList.add('ativo');
}

function closeMenu(event){
	menuList.classList.remove('ativo');
	menuButton.classList.remove('ativo');
}

menuButton.addEventListener('click', openMenu);
menuButton.addEventListener('dblclick', closeMenu);

/* ATIVANDO A ANIMAÇÃO DE NÚMEROS */
/*  Assistir Aula 0510 Anima Números - Exemplo do Professor*/

let lobos = document.querySelector('[data-numero1]');
let raposas = document.querySelector('[data-numero2]');
let esquilos = document.querySelector('[data-numero3]');
let ursos = document.querySelector('[data-numero4]');

let i = 0;
function animationNumber(){
	setInterval(() => {
		if(i <= 1122){
			lobos.innerText = i++;
		}
	}, 100)
	
	setInterval(() => {
		if(i <= 1100){
			raposas.innerText = i++;
		}
	}, 100)

	setInterval(() => {
		if(i <= 1350){
			esquilos.innerText = i++;
		}
	}, 0)

	setInterval(() => {
		if(i <= 1050){
			ursos.innerText = i++;
		}
	}, 100)

}
animationNumber();


/* ATIVANDO O FUNCIONAMENTO - COM O OBJECT DATE */
const funcionamento = document.querySelector('[data-semana]'); //[1,2,3,4,5] <- String
const diasSemana = funcionamento.dataset.semana.split(',').map(Number); // [1,2,3,4,5] <- Number
//Acima estou usando o split para transformar os números em Array, e o map para trasnformar o Array de String em Number
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number); // [8,18] <-Number

const dataAgora = new Date();
const diaAgora = dataAgora.getDay(); // 4 <- Quinta
const horarioAgora = dataAgora.getHours(); // 19 <- Horário Agora

const diaAberto = diasSemana.indexOf(diaAgora) !== -1; //True
const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]) ? true : false; //True

if(diaAberto && horarioAberto){
	funcionamento.classList.add('aberto');
}



















