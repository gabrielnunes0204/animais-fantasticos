//PARTE DO SCROLL SUAVES NAS SECTIONS GERAIS
export default function animationScroll(){
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
