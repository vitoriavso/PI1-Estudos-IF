/**
 * ESTUDOS IF - MÓDULO DE CURSOS DO IFSC CÂMPUS GAROPABA
 * Espelhamento fiel da página oficial de cursos, filtros por modalidade, busca e modais
 */

let filtroModalidadeAtual = 'todos';
let termoBuscaAtual = '';

document.addEventListener('DOMContentLoaded', () => {
  initFiltros();
  initBusca();
  initModal();
  renderizarCursos();
});

/**
 * Inicialização dos botões de filtro por modalidade
 */
function initFiltros() {
  const botoesFiltro = document.querySelectorAll('.filtro-curso-btn');
  botoesFiltro.forEach(btn => {
    btn.addEventListener('click', () => {
      botoesFiltro.forEach(b => {
        b.classList.remove('bg-emerald-600', 'text-white', 'border-emerald-500');
        b.classList.add('bg-black/30', 'text-slate-400');
      });

      btn.classList.remove('bg-black/30', 'text-slate-400');
      btn.classList.add('bg-emerald-600', 'text-white', 'border-emerald-500');

      if (window.anime) {
        anime({
          targets: btn,
          scale: [0.94, 1.04, 1],
          duration: 250,
          easing: 'easeOutElastic(1, .6)'
        });
      }

      filtroModalidadeAtual = btn.getAttribute('data-modalidade');
      renderizarCursos();
    });
  });
}

/**
 * Inicialização do campo de busca em tempo real
 */
function initBusca() {
  const inputBusca = document.getElementById('busca-curso-input');
  if (inputBusca) {
    inputBusca.addEventListener('input', (e) => {
      termoBuscaAtual = e.target.value.toLowerCase().trim();
      renderizarCursos();
    });
  }
}

/**
 * Renderiza os cards de cursos com base nos filtros e busca
 */
function renderizarCursos() {
  const container = document.getElementById('cursos-grid-container');
  const contadorEl = document.getElementById('contador-cursos');
  if (!container) return;

  const cursosFiltrados = CURSOS_IFSC_DATA.filter(curso => {
    const matchModalidade = (filtroModalidadeAtual === 'todos') || (curso.modalidade === filtroModalidadeAtual);
    const matchBusca = termoBuscaAtual === '' || 
      curso.nome.toLowerCase().includes(termoBuscaAtual) ||
      curso.resumo.toLowerCase().includes(termoBuscaAtual) ||
      curso.perfilEgresso.toLowerCase().includes(termoBuscaAtual);

    return matchModalidade && matchBusca;
  });

  if (contadorEl) {
    contadorEl.innerText = `${cursosFiltrados.length} curso(s) encontrado(s)`;
  }

  if (cursosFiltrados.length === 0) {
    container.innerHTML = `
      <div class="col-span-full p-12 text-center bg-black/20 border border-[var(--border-color)] rounded-2xl">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-2xl">
          <i class="fas fa-search"></i>
        </div>
        <h3 class="text-lg font-bold text-slate-200 mb-1">Nenhum curso encontrado</h3>
        <p class="text-sm text-slate-400">Tente buscar por outro termo ou selecione a categoria "Todos os Cursos".</p>
      </div>
    `;
    return;
  }

  let html = '';
  cursosFiltrados.forEach(curso => {
    html += `
      <div class="glass-card p-6 flex flex-col justify-between relative overflow-hidden group">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
              <i class="fas fa-graduation-cap"></i> ${curso.modalidadeLabel}
            </span>
            <span class="text-xs font-mono text-slate-400">
              <i class="far fa-clock mr-1"></i>${curso.duracao}
            </span>
          </div>

          <h3 class="text-xl font-bold font-heading text-slate-100 group-hover:text-emerald-400 transition-colors mb-2.5">
            ${curso.nome}
          </h3>

          <p class="text-xs md:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
            ${curso.resumo}
          </p>

          <div class="space-y-2 py-3 border-y border-[var(--border-color)] text-xs text-slate-400 mb-4">
            <div class="flex items-center justify-between">
              <span class="text-slate-500 font-medium">Turno:</span>
              <span class="text-slate-200 font-semibold">${curso.turno}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-500 font-medium">Carga Horária:</span>
              <span class="text-slate-200 font-mono">${curso.cargaHoraria}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-500 font-medium">Forma de Ingresso:</span>
              <span class="text-emerald-400 font-medium truncate max-w-[200px]" title="${curso.ingresso}">${curso.ingresso}</span>
            </div>
          </div>
        </div>

        <div class="pt-2">
          <button class="w-full btn-action justify-center py-2.5 text-xs font-bold" onclick="abrirModalCurso('${curso.id}')">
            <i class="fas fa-info-circle mr-1.5"></i> Detalhes & Matriz Curricular
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Animação de entrada dos cards com Anime.js
  if (window.anime) {
    anime({
      targets: '.glass-card',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(60),
      duration: 400,
      easing: 'easeOutQuad'
    });
  }
}

/**
 * Gerenciamento do Modal de Detalhes do Curso
 */
function initModal() {
  const backdrop = document.getElementById('modal-curso-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');

  if (backdrop && closeBtn) {
    closeBtn.addEventListener('click', fecharModalCurso);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) fecharModalCurso();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') fecharModalCurso();
    });
  }
}

function abrirModalCurso(cursoId) {
  const curso = CURSOS_IFSC_DATA.find(c => c.id === cursoId);
  if (!curso) return;

  const modalBody = document.getElementById('modal-curso-body');
  const backdrop = document.getElementById('modal-curso-backdrop');
  if (!modalBody || !backdrop) return;

  modalBody.innerHTML = `
    <div class="mb-4">
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 mb-2">
        ${curso.modalidadeLabel}
      </span>
      <h2 class="text-2xl font-extrabold font-heading text-slate-100 mb-1">${curso.nome}</h2>
      <p class="text-xs text-slate-400"><i class="fas fa-map-marker-alt text-red-400 mr-1"></i> IFSC Câmpus Garopaba • Bairro Campo Duna</p>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-xl bg-black/30 border border-white/10 mb-4 text-xs">
      <div>
        <div class="text-slate-400">Duração</div>
        <div class="font-bold text-slate-100">${curso.duracao}</div>
      </div>
      <div>
        <div class="text-slate-400">Turno</div>
        <div class="font-bold text-slate-100">${curso.turno}</div>
      </div>
      <div>
        <div class="text-slate-400">Carga Horária</div>
        <div class="font-bold font-mono text-emerald-400">${curso.cargaHoraria}</div>
      </div>
      <div>
        <div class="text-slate-400">Vagas</div>
        <div class="font-bold text-slate-100">${curso.vagas}</div>
      </div>
    </div>

    <div class="space-y-4 text-xs md:text-sm text-slate-300">
      <div>
        <h4 class="font-bold text-slate-100 uppercase tracking-wider text-xs mb-1.5 flex items-center gap-1.5">
          <i class="fas fa-user-check text-cyan-400"></i> Perfil do Profissional Formado
        </h4>
        <p class="leading-relaxed text-slate-300">${curso.perfilEgresso}</p>
      </div>

      <div>
        <h4 class="font-bold text-slate-100 uppercase tracking-wider text-xs mb-1.5 flex items-center gap-1.5">
          <i class="fas fa-briefcase text-amber-400"></i> Principais Áreas de Atuação
        </h4>
        <ul class="space-y-1.5 pl-4 list-disc text-slate-300">
          ${curso.areasAtuacao.map(area => `<li>${area}</li>`).join('')}
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-slate-100 uppercase tracking-wider text-xs mb-1.5 flex items-center gap-1.5">
          <i class="fas fa-book text-emerald-400"></i> Componentes Curriculares em Destaque
        </h4>
        <div class="flex flex-wrap gap-1.5">
          ${curso.disciplinasDestaque.map(disc => `
            <span class="px-2.5 py-1 rounded bg-black/40 border border-[var(--border-color)] text-xs text-slate-200">
              ${disc}
            </span>
          `).join('')}
        </div>
      </div>

      <div class="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs">
        <div class="font-bold text-emerald-300 mb-1 flex items-center gap-1.5">
          <i class="fas fa-door-open"></i> Requisito e Ingresso
        </div>
        <div class="text-slate-300 mb-1"><strong>Requisito:</strong> ${curso.requisito}</div>
        <div class="text-slate-300"><strong>Seleção:</strong> ${curso.ingresso}</div>
        <div class="mt-2 text-slate-400 pt-2 border-t border-emerald-500/20">
          <i class="fas fa-envelope mr-1 text-slate-400"></i> E-mail Coordenação: <strong class="text-slate-200">${curso.coordenacao}</strong>
        </div>
      </div>
    </div>

    <div class="mt-6 pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3">
      <a href="${curso.linkOficial}" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs">
        <i class="fas fa-external-link-alt mr-1"></i> Acessar Portal Oficial IFSC
      </a>
      <button class="btn-secondary text-xs" onclick="fecharModalCurso()">
        Fechar Janela
      </button>
    </div>
  `;

  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';

  if (window.anime) {
    anime({
      targets: modalBody,
      scale: [0.94, 1],
      translateY: [15, 0],
      opacity: [0, 1],
      duration: 320,
      easing: 'easeOutCubic'
    });
  }
}

function fecharModalCurso() {
  const backdrop = document.getElementById('modal-curso-backdrop');
  if (backdrop) {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

