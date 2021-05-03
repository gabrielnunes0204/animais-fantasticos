//PARTE DO SCROLL SUAVE DOS LINKS INTERNOS
export default function scrollSmooth(){
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