const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  if (navLinks.classList.contains('show')) {
    // Fechar com delay para transição
    navLinks.style.maxHeight = '0';
    navLinks.style.padding = '0 15px';
    navLinks.style.boxShadow = '0 0 0 transparent';

    // Remover classe após transição (400ms)
    setTimeout(() => {
      navLinks.classList.remove('show');
      navLinks.style.maxHeight = '';
      navLinks.style.padding = '';
      navLinks.style.boxShadow = '';
    }, 400);
  } else {
    // Abrir menu
    navLinks.classList.add('show');
  }
});

