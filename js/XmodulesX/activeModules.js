/* ATIVANDO O MENU*/

export default function activeModules(){
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
}
activeModules();