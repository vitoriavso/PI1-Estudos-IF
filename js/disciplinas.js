/**
 * ESTUDOS IF - MÓDULO DE DISCIPLINAS
 * Gerenciamento do Navegador em Pastas (Master-Detail), Renderização Rica e Quizzes de Fixação
 */

let disciplinaAtual = 'historia';
let topicoAtualIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Ler disciplina da URL (?disc=historia) se existir
  const params = new URLSearchParams(window.location.search);
  const discParam = params.get('disc');
  if (discParam && CONTEUDOS_DATA[discParam]) {
    disciplinaAtual = discParam;
  }

  const topicoParam = parseInt(params.get('topico'), 10);
  if (!isNaN(topicoParam) && topicoParam >= 0 && topicoParam < 3) {
    topicoAtualIndex = topicoParam;
  }

  // 2. Inicializar abas superiores de disciplinas
  initAbasDisciplinas();

  // 3. Renderizar pastas da disciplina atual
  renderizarPastas();

  // 4. Renderizar o conteúdo do tópico selecionado
  renderizarConteudoDetalhado();
});

/**
 * Inicializa os botões das disciplinas na barra superior
 */
function initAbasDisciplinas() {
  const tabs = document.querySelectorAll('.disciplina-tab');
  tabs.forEach(tab => {
    const disc = tab.getAttribute('data-disciplina');
    if (disc === disciplinaAtual) {
      tab.classList.add('active', 'border-ifsc-green', 'text-ifsc-green-light');
    }

    tab.addEventListener('click', () => {
      if (disciplinaAtual === disc) return;

      tabs.forEach(t => t.classList.remove('active', 'border-ifsc-green', 'text-ifsc-green-light'));
      tab.classList.add('active', 'border-ifsc-green', 'text-ifsc-green-light');

      disciplinaAtual = disc;
      topicoAtualIndex = 0;

      // Atualiza URL sem recarregar a página
      const newUrl = `${window.location.pathname}?disc=${disciplinaAtual}&topico=0`;
      window.history.pushState({}, '', newUrl);

      renderizarPastas();
      renderizarConteudoDetalhado();

      // Animação de transição com Anime.js nos botões e pastas
      if (window.anime) {
        anime({
          targets: tab,
          scale: [0.94, 1.04, 1],
          duration: 300,
          easing: 'easeOutElastic(1, .6)'
        });

        anime({
          targets: '.folder-item',
          translateX: [-15, 0],
          opacity: [0, 1],
          delay: anime.stagger(60),
          duration: 350,
          easing: 'easeOutQuad'
        });

        anime({
          targets: '#content-detail-pane',
          opacity: [0, 1],
          translateY: [15, 0],
          duration: 400,
          easing: 'easeOutCubic'
        });
      }
    });
  });
}

/**
 * Renderiza a lista de pastas (submenu master-detail à esquerda)
 */
function renderizarPastas() {
  const container = document.getElementById('folders-container');
  if (!container) return;

  const discInfo = CONTEUDOS_DATA[disciplinaAtual];
  const topicos = discInfo.topicos;

  let html = `
    <div class="flex items-center justify-between mb-3 px-1">
      <span class="text-xs uppercase tracking-wider font-semibold text-slate-400">Pastas de Conteúdo (${topicos.length})</span>
      <span class="text-xs text-ifsc-green-light font-mono font-medium">${discInfo.nome}</span>
    </div>
  `;

  topicos.forEach((topico, idx) => {
    const isActive = idx === topicoAtualIndex;
    html += `
      <div class="folder-item ${isActive ? 'active' : ''}" onclick="selecionarTopico(${idx})">
        <div class="flex items-center gap-3">
          <div class="folder-icon">
            <i class="fas ${isActive ? 'fa-folder-open' : 'fa-folder'}"></i>
          </div>
          <div class="text-left">
            <h4 class="text-sm font-bold text-slate-100 ${isActive ? 'text-ifsc-green-light' : ''}">
              ${idx + 1}. ${topico.titulo}
            </h4>
            <div class="flex items-center gap-2 mt-1 text-xs text-slate-400">
              <span><i class="far fa-clock mr-1"></i>${topico.tempoLeitura}</span>
              <span>•</span>
              <span class="text-emerald-400 font-mono font-medium">${topico.questoes.length} Questões</span>
            </div>
          </div>
        </div>
        <div class="text-slate-500">
          <i class="fas fa-chevron-right text-xs"></i>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

/**
 * Troca o tópico selecionado
 */
function selecionarTopico(index) {
  if (topicoAtualIndex === index) return;
  topicoAtualIndex = index;

  // Atualiza visual das pastas
  const folderItems = document.querySelectorAll('.folder-item');
  folderItems.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add('active');
      const icon = item.querySelector('.folder-icon i');
      if (icon) icon.className = 'fas fa-folder-open';
    } else {
      item.classList.remove('active');
      const icon = item.querySelector('.folder-icon i');
      if (icon) icon.className = 'fas fa-folder';
    }
  });

  // Atualiza URL
  const newUrl = `${window.location.pathname}?disc=${disciplinaAtual}&topico=${index}`;
  window.history.pushState({}, '', newUrl);

  renderizarConteudoDetalhado();

  // Animação de troca com Anime.js
  if (window.anime) {
    const activeFolder = folderItems[index];
    if (activeFolder) {
      anime({
        targets: activeFolder,
        scale: [0.97, 1.02, 1],
        duration: 280,
        easing: 'easeOutElastic(1, .6)'
      });
    }

    anime({
      targets: '#content-detail-pane',
      opacity: [0, 1],
      translateY: [15, 0],
      duration: 350,
      easing: 'easeOutQuad'
    });
  }

  // Scroll suave e seguro para topo do conteúdo no mobile (sem quebras)
  if (window.innerWidth < 1024) {
    const pane = document.getElementById('content-detail-pane');
    if (pane) {
      const rect = pane.getBoundingClientRect();
      if (rect.top < 70 || rect.top > 300) {
        window.scrollTo({ top: window.scrollY + rect.top - 85, behavior: 'smooth' });
      }
    }
  }
}

/**
 * Renderiza o painel completo de conteúdo detalhado à direita
 * Padrão Editorial Toda Matéria + Identidade Visual IFSC + Tech André
 */
function renderizarConteudoDetalhado() {
  const container = document.getElementById('content-detail-pane');
  if (!container) return;

  const discInfo = CONTEUDOS_DATA[disciplinaAtual];
  const topico = discInfo.topicos[topicoAtualIndex];
  if (!topico) return;

  const totalTopicosDisc = discInfo.topicos.length;
  const proxIndex = (topicoAtualIndex + 1 < totalTopicosDisc) ? topicoAtualIndex + 1 : null;
  const prevIndex = (topicoAtualIndex > 0) ? topicoAtualIndex - 1 : null;

  // 1. Cabeçalho com Breadcrumbs, Badges e Autores (Estilo Toda Matéria + IFSC)
  let html = `
    <div class="p-6 md:p-8 border-b border-[var(--border-color)] bg-gradient-to-b from-black/10 to-transparent">
      <!-- Breadcrumb Navegacional -->
      <nav class="breadcrumb-nav">
        <a href="index.html"><i class="fas fa-home mr-1"></i>Início</a>
        <i class="fas fa-chevron-right text-[10px] text-slate-500"></i>
        <a href="disciplinas.html">Disciplinas</a>
        <i class="fas fa-chevron-right text-[10px] text-slate-500"></i>
        <span class="text-emerald-400 font-semibold">${discInfo.nome}</span>
        <i class="fas fa-chevron-right text-[10px] text-slate-500"></i>
        <span class="text-slate-400 font-medium truncate max-w-[200px]">${topico.titulo}</span>
      </nav>

      <div class="flex flex-wrap items-center gap-2 mb-3">
        <span class="badge-disc badge-disc-${disciplinaAtual}">
          <i class="fas ${discInfo.icone}"></i> ${discInfo.nome}
        </span>
        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-black/30 border border-white/10 text-slate-300">
          <i class="far fa-clock"></i> ${topico.tempoLeitura}
        </span>
        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-500/15 border border-emerald-500/35 text-emerald-400">
          <i class="fas fa-check-double"></i> Alinhado ao Edital IFSC
        </span>
      </div>

      <h1 class="text-2xl md:text-3.5xl font-black font-heading text-slate-100 mb-2.5 leading-tight">
        ${topico.titulo}
      </h1>
      <p class="text-sm md:text-base text-slate-400 leading-relaxed font-normal mb-4">
        ${topico.subtitulo}
      </p>

      <!-- Cartão dos Autores e Validação Pedagógica -->
      <div class="pt-3 border-t border-dashed border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-full bg-emerald-600/30 border border-emerald-500/50 text-emerald-400 flex items-center justify-center font-bold text-xs">
            <i class="fas fa-pen-nib"></i>
          </div>
          <div>
            <span>Escrito por: <strong class="text-slate-200">Vitória Ortiz</strong> e <strong class="text-slate-200">Brenda Carneiro</strong></span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <i class="fas fa-chalkboard-teacher text-cyan-400"></i>
          <span>Revisão: <strong class="text-slate-200">Professores do IFSC Câmpus Garopaba</strong></span>
        </div>
      </div>
    </div>

    <div class="p-6 md:p-8 space-y-7">

      <!-- Sumário Interno do Artigo (Estilo Toda Matéria "Neste Artigo") -->
      <div class="sumario-box">
        <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
          <i class="fas fa-list-ul text-emerald-400"></i> Neste Conteúdo Você Vai Encontrar:
        </div>
        <div class="flex flex-wrap gap-2">
          <a href="#sec-resumo" class="sumario-pill"><i class="fas fa-align-left text-xs"></i> 1. Resumo</a>
          <a href="#sec-dica-ifsc" class="sumario-pill"><i class="fas fa-bullseye text-xs text-emerald-400"></i> 2. Dica de Prova IFSC</a>
          <a href="#sec-contexto" class="sumario-pill"><i class="fas fa-book text-xs"></i> 3. Teoria Completa</a>
          <a href="#sec-conceitos" class="sumario-pill"><i class="fas fa-layer-group text-xs text-amber-400"></i> 4. Conceitos-Chave</a>
          <a href="#sec-timeline" class="sumario-pill"><i class="fas fa-stream text-xs text-cyan-400"></i> 5. Linha do Tempo</a>
          <a href="#sec-glossario" class="sumario-pill"><i class="fas fa-spell-check text-xs text-purple-400"></i> 6. Glossário</a>
          <a href="#sec-videoaula" class="sumario-pill"><i class="fab fa-youtube text-xs text-red-500"></i> 7. Videoaula</a>
          <a href="#sec-exercicios" class="sumario-pill"><i class="fas fa-pencil-alt text-xs text-emerald-400"></i> 8. Exercícios Resolvidos</a>
        </div>
      </div>

      <!-- 2. Resumo Essencial -->
      <div id="sec-resumo" class="bg-emerald-950/20 border border-emerald-500/25 rounded-xl p-4 md:p-5">
        <h3 class="text-sm uppercase tracking-wider font-bold text-emerald-400 flex items-center gap-2 mb-2">
          <i class="fas fa-lightbulb"></i> Visão Geral & Resumo Essencial
        </h3>
        <p class="text-sm md:text-base text-slate-300 leading-relaxed">
          ${topico.resumo}
        </p>
      </div>

      <!-- Callout: Dica Especial para o Exame de Ingresso do IFSC -->
      <div id="sec-dica-ifsc" class="callout-box callout-dica-ifsc">
        <div class="flex items-center gap-2 font-bold text-emerald-400 text-sm mb-1.5">
          <i class="fas fa-bookmark"></i> Fique Atento! Dica para o Processo Seletivo do IFSC
        </div>
        <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
          ${topico.dicaIFSC || "Foque nos conceitos estruturais e aplicações práticas deste tema nos editais do IFSC."}
        </p>
      </div>

      <!-- Callout: Você Sabia? (Toda Matéria Style) -->
      ${topico.voceSabia ? `
        <div class="callout-box callout-vocesabia">
          <div class="flex items-center gap-2 font-bold text-cyan-400 text-sm mb-1.5">
            <i class="fas fa-compass"></i> Você Sabia?
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            ${topico.voceSabia}
          </p>
        </div>
      ` : ''}

      <!-- 3. Contexto e Fundamentação Teórica -->
      <div id="sec-contexto">
        <h3 class="text-lg font-bold font-heading text-slate-100 mb-3 flex items-center gap-2">
          <i class="fas fa-book-reader text-cyan-400"></i> Contexto & Fundamentação Teórica
        </h3>
        <p class="text-sm md:text-base text-slate-300 leading-relaxed font-light text-justify">
          ${topico.contexto}
        </p>
      </div>
  `;

  // 4. Tópicos Chave / Conceitos Fundamentais
  if (topico.topicosChave && topico.topicosChave.length > 0) {
    html += `
      <div id="sec-conceitos">
        <h3 class="text-lg font-bold font-heading text-slate-100 mb-4 flex items-center gap-2">
          <i class="fas fa-layer-group text-amber-400"></i> Conceitos e Estruturas Fundamentais
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    `;

    topico.topicosChave.forEach(item => {
      html += `
        <div class="bg-black/25 border border-[var(--border-color)] rounded-xl p-4 hover:border-emerald-500/40 transition-all">
          <h4 class="text-sm font-bold text-slate-100 mb-1.5 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            ${item.titulo}
          </h4>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            ${item.explicacao}
          </p>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  }

  // 5. Linha do Tempo / Esquema Didático
  if (topico.timeline && topico.timeline.length > 0) {
    html += `
      <div id="sec-timeline" class="pt-2">
        <h3 class="text-lg font-bold font-heading text-slate-100 mb-4 flex items-center gap-2">
          <i class="fas fa-stream text-emerald-400"></i> Linha do Tempo e Etapas Metodológicas
        </h3>
        <div class="timeline">
    `;

    topico.timeline.forEach(item => {
      html += `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">${item.data}</div>
          <div class="timeline-title">${item.titulo}</div>
          <div class="timeline-desc">${item.descricao}</div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  }

  // 6. Termos-Chave e Glossário
  if (topico.termosChave && topico.termosChave.length > 0) {
    html += `
      <div id="sec-glossario" class="pt-2">
        <h3 class="text-lg font-bold font-heading text-slate-100 mb-3 flex items-center gap-2">
          <i class="fas fa-spell-check text-purple-400"></i> Glossário de Termos Essenciais
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
    `;

    topico.termosChave.forEach(item => {
      html += `
        <div class="bg-black/30 border border-white/10 rounded-lg p-3">
          <div class="text-xs font-bold text-emerald-300 font-mono mb-1">${item.termo}</div>
          <div class="text-xs text-slate-400 leading-snug">${item.definicao}</div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  }

  // 7. Recomendação de Videoaula (YouTube)
  if (topico.videoAula) {
    html += `
      <div id="sec-videoaula" class="bg-gradient-to-r from-red-950/20 to-black/30 border border-red-500/25 rounded-xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/40 text-red-500 flex items-center justify-center text-xl flex-shrink-0">
            <i class="fab fa-youtube"></i>
          </div>
          <div>
            <div class="text-xs uppercase tracking-wider font-bold text-red-400 mb-0.5">Sugestão de Videoaula</div>
            <h4 class="text-sm md:text-base font-bold text-slate-100">${topico.videoAula.titulo}</h4>
            <p class="text-xs text-slate-400">${topico.videoAula.canal} • Duração aproximada: ${topico.videoAula.duracao}</p>
          </div>
        </div>
        <a href="${topico.videoAula.url}" target="_blank" rel="noopener noreferrer" class="btn-action flex-shrink-0 bg-red-600/20 border-red-500/40 hover:bg-red-600 hover:text-white">
          <i class="fas fa-play mr-1.5"></i> Assistir Aula
        </a>
      </div>
    `;
  }

  // 8. Exercícios com Gabarito e Justificativa (Estilo Toda Matéria)
  if (topico.questoes && topico.questoes.length > 0) {
    html += `
      <div id="sec-exercicios" class="quiz-container">
        <div class="flex items-center justify-between mb-4 border-b border-[var(--border-color)] pb-3">
          <div>
            <h3 class="text-lg font-bold font-heading text-slate-100 flex items-center gap-2">
              <i class="fas fa-pencil-alt text-emerald-400"></i> Exercícios com Gabarito Comentado
            </h3>
            <p class="text-xs text-slate-400">Resolva as questões simuladas do IFSC e confira a resolução comentada passo a passo.</p>
          </div>
          <span class="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
            ${topico.questoes.length} Questões
          </span>
        </div>

        <div class="space-y-6">
    `;

    topico.questoes.forEach((q, qIdx) => {
      html += `
        <div class="p-4 rounded-xl bg-black/20 border border-[var(--border-color)]" id="box-quiz-${q.id}">
          <div class="flex items-start gap-2.5 mb-3">
            <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5">
              ${qIdx + 1}
            </span>
            <p class="text-sm font-semibold text-slate-200 leading-snug">
              ${q.enunciado}
            </p>
          </div>

          <div class="space-y-2 mb-3">
      `;

      q.alternativas.forEach((alt, aIdx) => {
        const letra = String.fromCharCode(65 + aIdx);
        html += `
          <div class="quiz-option" id="opt-${q.id}-${aIdx}" onclick="selecionarAlternativaQuiz('${q.id}', ${aIdx})">
            <span class="w-5 h-5 rounded-full border border-slate-500 text-xs flex items-center justify-center font-mono font-bold text-slate-400 flex-shrink-0">
              ${letra}
            </span>
            <span class="text-xs md:text-sm text-slate-300 leading-snug">${alt}</span>
          </div>
        `;
      });

      html += `
          </div>

          <div class="flex items-center justify-between pt-2">
            <button class="btn-action text-xs" onclick="verificarRespostaQuiz('${q.id}', ${q.correta})">
              <i class="fas fa-check mr-1"></i> Verificar Resposta
            </button>
            <span class="text-xs text-slate-500" id="status-${q.id}">Selecione uma alternativa</span>
          </div>

          <div class="quiz-feedback" id="feedback-${q.id}">
            <div class="font-bold flex items-center gap-1.5 mb-1" id="feedback-title-${q.id}"></div>
            <div class="text-xs leading-relaxed text-slate-300" id="feedback-text-${q.id}">${q.explicacao}</div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  }

  // 9. Citação Acadêmica ABNT (Estilo Toda Matéria)
  html += `
    <div class="citacao-abnt">
      <div class="text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
        <i class="fas fa-quote-left text-emerald-400"></i> Como Citar este Conteúdo (Normas ABNT):
      </div>
      <div>
        ORTIZ, Vitória V. S.; CARNEIRO, Brenda L. V. <strong>${topico.titulo}</strong>. Portal Educacional Estudos IF — Instituto Federal de Santa Catarina (Câmpus Garopaba), 2026. Disponível em: &lt;https://www.ifsc.edu.br/web/campus-garopaba&gt;.
      </div>
    </div>
  `;

  // 10. Navegação Sequencial / Próximo Tópico (Toda Matéria "Veja Também")
  html += `
    <div class="pt-6 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3">
      <div>
        ${prevIndex !== null ? `
          <button class="btn-secondary text-xs" onclick="selecionarTopico(${prevIndex})">
            <i class="fas fa-arrow-left mr-1.5"></i> Tópico Anterior: ${discInfo.topicos[prevIndex].titulo}
          </button>
        ` : '<span></span>'}
      </div>

      <div>
        ${proxIndex !== null ? `
          <button class="btn-primary text-xs" onclick="selecionarTopico(${proxIndex})">
            Próximo Tópico: ${discInfo.topicos[proxIndex].titulo} <i class="fas fa-arrow-right ml-1.5"></i>
          </button>
        ` : `
          <a href="simulado.html" class="btn-primary text-xs">
            <i class="fas fa-trophy mr-1.5"></i> Fazer Simulado desta Matéria
          </a>
        `}
      </div>
    </div>
  `;

  html += `</div>`; // fecha div space-y-7

  container.innerHTML = html;
}

/**
 * Lógica do Quiz do Conteúdo (Seleção de alternativa)
 */
const quizRespostasSelecionadas = {};

function selecionarAlternativaQuiz(qId, altIdx) {
  quizRespostasSelecionadas[qId] = altIdx;

  // Atualiza classes visuais
  const options = document.querySelectorAll(`[id^="opt-${qId}-"]`);
  options.forEach((opt, idx) => {
    if (idx === altIdx) {
      opt.classList.add('selected');
    } else {
      opt.classList.remove('selected');
    }
  });

  // Animação de pulso elástico na opção selecionada
  const selectedOpt = document.getElementById(`opt-${qId}-${altIdx}`);
  if (selectedOpt && window.anime) {
    anime({
      targets: selectedOpt,
      scale: [0.97, 1.02, 1],
      duration: 250,
      easing: 'easeOutElastic(1, .6)'
    });
  }

  const statusEl = document.getElementById(`status-${qId}`);
  if (statusEl) {
    statusEl.innerText = `Alternativa ${String.fromCharCode(65 + altIdx)} selecionada`;
    statusEl.className = 'text-xs text-emerald-400 font-medium';
  }
}

/**
 * Validação do Quiz do Conteúdo com Feedback e Animações de Resultado
 */
function verificarRespostaQuiz(qId, indexCorreto) {
  const selecionado = quizRespostasSelecionadas[qId];
  const feedbackEl = document.getElementById(`feedback-${qId}`);
  const feedbackTitle = document.getElementById(`feedback-title-${qId}`);
  const statusEl = document.getElementById(`status-${qId}`);

  if (selecionado === undefined) {
    alert("Por favor, selecione uma alternativa antes de verificar a resposta.");
    return;
  }

  const options = document.querySelectorAll(`[id^="opt-${qId}-"]`);
  options.forEach((opt, idx) => {
    opt.classList.remove('correct', 'incorrect');
    if (idx === indexCorreto) {
      opt.classList.add('correct');
    } else if (idx === selecionado && selecionado !== indexCorreto) {
      opt.classList.add('incorrect');
    }
  });

  if (selecionado === indexCorreto) {
    feedbackEl.className = 'quiz-feedback show-correct';
    feedbackTitle.innerHTML = '<i class="fas fa-check-circle text-emerald-400"></i> Correto! Excelente raciocínio!';
    if (statusEl) statusEl.innerHTML = '<span class="text-emerald-400 font-bold">Acertou! (+1)</span>';

    // Animação de celebração com Anime.js
    if (window.anime) {
      anime({
        targets: `#opt-${qId}-${indexCorreto}`,
        scale: [1, 1.03, 1],
        duration: 400,
        easing: 'easeOutElastic(1, .5)'
      });

      anime({
        targets: feedbackEl,
        opacity: [0, 1],
        translateY: [12, 0],
        duration: 350,
        easing: 'easeOutCubic'
      });
    }
  } else {
    feedbackEl.className = 'quiz-feedback show-incorrect';
    feedbackTitle.innerHTML = '<i class="fas fa-times-circle text-red-400"></i> Resposta incorreta. Veja a justificativa abaixo:';
    if (statusEl) statusEl.innerHTML = '<span class="text-red-400 font-bold">Incorreto</span>';

    // Animação de shake de erro com Anime.js
    if (window.anime) {
      anime({
        targets: `#box-quiz-${qId}`,
        translateX: [-8, 8, -6, 6, -3, 3, 0],
        duration: 450,
        easing: 'easeInOutQuad'
      });

      anime({
        targets: feedbackEl,
        opacity: [0, 1],
        translateY: [12, 0],
        duration: 350,
        easing: 'easeOutCubic'
      });
    }
  }
}

