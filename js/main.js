/**
 * ESTUDOS IF - LÓGICA PRINCIPAL E UTILITÁRIOS GLOBAIS
 * Gerenciamento de Tema (Dark/Light), Menu Responsivo e Inicializações
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  highlightActiveNavLink();
  initButtonFeedback();
});

/**
 * 1. Inicialização do Tema Dark / Light
 */
function initTheme() {
  const savedTheme = localStorage.getItem('estudos_if_theme') || 'dark';
  applyTheme(savedTheme);

  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('estudos_if_theme', newTheme);

      if (window.anime) {
        anime({
          targets: '.theme-toggle-icon',
          rotate: '+=360deg',
          scale: [0.7, 1.2, 1],
          duration: 400,
          easing: 'easeOutElastic(1, .6)'
        });
      }
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcons = document.querySelectorAll('.theme-toggle-icon');
  themeIcons.forEach(icon => {
    if (theme === 'dark') {
      icon.className = 'fas fa-sun theme-toggle-icon text-amber-400';
    } else {
      icon.className = 'fas fa-moon theme-toggle-icon text-slate-700';
    }
  });
}

/**
 * Micro-interações táteis e animações elásticas em botões via Anime.js
 */
function initButtonFeedback() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-primary, .btn-secondary, .btn-action, .theme-toggle-btn, .filtro-curso-btn');
    if (btn && window.anime && !btn.disabled) {
      anime({
        targets: btn,
        scale: [0.94, 1.02, 1],
        duration: 260,
        easing: 'easeOutElastic(1, .6)'
      });
    }
  });
}

/**
 * 2. Menu Responsivo Mobile
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-nav-menu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

/**
 * 3. Destaque do link ativo no cabeçalho
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });
}

/**
 * Utilitário para formatar tempo (min:seg)
 */
function formatarTempo(segundos) {
  const mins = Math.floor(segundos / 60);
  const segs = segundos % 60;
  return `${mins.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
}

