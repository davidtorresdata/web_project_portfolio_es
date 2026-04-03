
function initStickyNav() {
    const nav = document.querySelector('.hero-nav');
    if (!nav) return;

    // Quitar la clase "is-scrolled" del HTML inicial (la añadimos dinámicamente)
    nav.classList.remove('is-scrolled');

    function handleScroll() {
      if (window.scrollY > 80) {
        nav.classList.add('is-scrolled');
      } else {
        nav.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Ejecutar una vez al cargar por si ya hay scroll
    handleScroll();
  }

  // Iniciar cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', initStickyNav);
