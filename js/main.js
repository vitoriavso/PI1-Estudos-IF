/**
 * ESTUDOS IF - LÓGICA PRINCIPAL E UTILITÁRIOS GLOBAIS
 * Gerenciamento de Tema (Dark/Light), Menu Responsivo e Inicializações
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  highlightActiveNavLink();
  initButtonFeedback();
  initGlobalSearch();
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

/**
 * 4. Barra de Busca Rápida Global de Conteúdos (Estilo Toda Matéria)
 */
function initGlobalSearch() {
  const searchInput = document.getElementById('global-search-input');
  const searchResults = document.getElementById('global-search-results');
  if (!searchInput || !searchResults) return;

  searchInput.addEventListener('input', (e) => {
    if (typeof CONTEUDOS_DATA === 'undefined') return;
    const term = e.target.value.toLowerCase().trim();

    if (term.length < 2) {
      searchResults.classList.add('hidden');
      searchResults.innerHTML = '';
      return;
    }

    const matches = [];
    Object.keys(CONTEUDOS_DATA).forEach(discKey => {
      const disc = CONTEUDOS_DATA[discKey];
      disc.topicos.forEach((t, idx) => {
        if (
          t.titulo.toLowerCase().includes(term) ||
          t.subtitulo.toLowerCase().includes(term) ||
          t.resumo.toLowerCase().includes(term)
        ) {
          matches.push({ discKey, discNome: disc.nome, topico: t, idx });
        }
      });
    });

    if (matches.length === 0) {
      searchResults.innerHTML = '<div class="p-3 text-slate-400 text-center text-xs">Nenhum conteúdo encontrado para esta busca.</div>';
    } else {
      searchResults.innerHTML = matches.slice(0, 6).map(m => `
        <a href="disciplinas.html?disc=${m.discKey}&topico=${m.idx}" class="block p-2.5 rounded-lg hover:bg-emerald-500/15 text-slate-200 text-decoration-none transition-colors border-b border-white/5 last:border-b-0">
          <div class="flex items-center justify-between text-[11px] text-emerald-400 font-bold mb-0.5">
            <span><i class="fas fa-book-open mr-1"></i>${m.discNome}</span>
            <span class="font-mono text-slate-500">Tópico ${m.idx + 1}</span>
          </div>
          <div class="font-bold text-xs text-slate-100">${m.topico.titulo}</div>
          <div class="text-[11px] text-slate-400 truncate">${m.topico.resumo}</div>
        </a>
      `).join('');
    }
    searchResults.classList.remove('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.add('hidden');
    }
  });
}

