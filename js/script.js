//toggle-menu

const showMenu = () => {
  const menuBtn = document.querySelector('#header .menu-btn');
  const overlay = document.querySelector('.overlay');
  const toggleMenuWrap = document.querySelector('.toggle-menu-wrap')
  
  if(!menuBtn || !overlay || !toggleMenuWrap) return false;

  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('clicked');
    overlay.classList.toggle('show');
    toggleMenuWrap.classList.toggle('show');
  });

  overlay.addEventListener('click', function(){
    menuBtn.classList.remove('clicked');
    overlay.classList.remove('show');
    toggleMenuWrap.classList.remove('show');
  });
};
showMenu();

//toggle-menu end

