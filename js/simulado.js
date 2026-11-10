/**
 * ESTUDOS IF - ENGINE DE SIMULADO INTERATIVO & GABARITO LÚDICO
 * Sorteio aleatório de questões, cronômetro, navegação completa, Anime.js e efeitos de confetti
 */

let questoesSimulado = [];
let indiceQuestaoAtual = 0;
let respostasUsuario = {}; // { [index]: alternativaEscolhida }
let tempoTotalSegundos = 0;
let temporizadorInterval = null;
let modoCronometroAtivo = true;

document.addEventListener('DOMContentLoaded', () => {
  initConfiguracoesSimulado();
});

/**
 * 1. Configurações Iniciais e Event Listeners
 */
function initConfiguracoesSimulado() {
  const btnIniciar = document.getElementById('btn-iniciar-simulado');
  if (btnIniciar) {
    btnIniciar.addEventListener('click', (e) => {
      e.preventDefault();
      animarCliqueBotao(btnIniciar);
      iniciarSimulado();
    });
  }

  const btnRefazer = document.getElementById('btn-refazer-simulado');
  if (btnRefazer) {
    btnRefazer.addEventListener('click', (e) => {
      e.preventDefault();
      animarCliqueBotao(btnRefazer);
      reiniciarSimuladoParaConfig();
    });
  }

  const btnAnterior = document.getElementById('btn-anterior-questao');
  if (btnAnterior) {
    btnAnterior.addEventListener('click', (e) => {
      e.preventDefault();
      animarCliqueBotao(btnAnterior);
      anteriorQuestao();
    });
  }

  const btnProxima = document.getElementById('btn-proxima-questao');
  if (btnProxima) {
    btnProxima.addEventListener('click', (e) => {
      e.preventDefault();
      animarCliqueBotao(btnProxima);
      proximaQuestao();
    });
  }

  const btnFinalizar = document.getElementById('btn-finalizar-simulado');
  if (btnFinalizar) {
    btnFinalizar.addEventListener('click', (e) => {
      e.preventDefault();
      animarCliqueBotao(btnFinalizar);
      finalizarSimulado();
    });
  }
}

/**
 * Animação de clique responsiva para botões via Anime.js
 */
function animarCliqueBotao(elemento) {
  if (window.anime && elemento) {
    anime({
      targets: elemento,
      scale: [0.94, 1.02, 1],
      duration: 300,
      easing: 'easeOutElastic(1, .5)'
    });
  }
}

/**
 * Scroll suave sem saltos abruptos (respeitando header sticky)
 */
function scrollSuaveAte(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const headerOffset = 90;
  // Só rola a página se o elemento estiver fora do campo de visão confortável
  if (rect.top < 70 || rect.top > 320) {
    const targetY = window.scrollY + rect.top - headerOffset;
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
  }
}

/**
 * 2. Início do Simulado
 */
function iniciarSimulado() {
  const selectDisc = document.getElementById('filtro-simulado-disciplina');
  const selectQtd = document.getElementById('filtro-simulado-qtd');
  const checkTempo = document.getElementById('filtro-simulado-tempo');

  const discEscolhida = selectDisc ? selectDisc.value : 'todas';
  const rawQtd = selectQtd ? parseInt(selectQtd.value, 10) : 10;
  const qtdEscolhida = (!isNaN(rawQtd) && rawQtd > 0) ? rawQtd : 10;
  modoCronometroAtivo = checkTempo ? checkTempo.checked : true;

  // 1. Obter banco de questões
  let poolQuestoes = obterTodasAsQuestoes();
  if (discEscolhida !== 'todas') {
    poolQuestoes = poolQuestoes.filter(q => q.disciplinaKey === discEscolhida);
  }

  if (poolQuestoes.length === 0) {
    alert("Não foram encontradas questões suficientes para o filtro selecionado.");
    return;
  }

  // 2. Embaralhar questões (Algoritmo de Fisher-Yates)
  const questoesEmbaralhadas = [...poolQuestoes];
  for (let i = questoesEmbaralhadas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questoesEmbaralhadas[i], questoesEmbaralhadas[j]] = [questoesEmbaralhadas[j], questoesEmbaralhadas[i]];
  }

  // 3. Limitar à quantidade escolhida
  questoesSimulado = questoesEmbaralhadas.slice(0, Math.min(qtdEscolhida, questoesEmbaralhadas.length));

  // 4. Resetar estados
  indiceQuestaoAtual = 0;
  respostasUsuario = {};
  tempoTotalSegundos = 0;

  // 5. Alternar telas
  const painelConfig = document.getElementById('painel-config-simulado');
  const painelExecucao = document.getElementById('painel-execucao-simulado');
  const painelGabarito = document.getElementById('painel-gabarito-simulado');

  if (painelConfig) painelConfig.classList.add('hidden');
  if (painelGabarito) painelGabarito.classList.add('hidden');
  if (painelExecucao) painelExecucao.classList.remove('hidden');

  // 6. Iniciar cronômetro
  if (temporizadorInterval) clearInterval(temporizadorInterval);
  const timerDisplay = document.getElementById('timer-display');

  if (modoCronometroAtivo) {
    if (timerDisplay) timerDisplay.classList.remove('hidden');
    temporizadorInterval = setInterval(() => {
      tempoTotalSegundos++;
      const timeSpan = document.getElementById('tempo-decorrido-texto');
      if (timeSpan) timeSpan.innerText = formatarTempo(tempoTotalSegundos);
    }, 1000);
  } else {
    if (timerDisplay) timerDisplay.classList.add('hidden');
  }

  // 7. Renderizar mapa de questões e primeira questão
  renderizarMapaQuestoes();
  renderizarQuestaoAtual('init');

  // Scroll suave e sem cortes
  scrollSuaveAte('painel-execucao-simulado');
}

/**
 * 3. Renderização da Questão Atual
 */
function renderizarQuestaoAtual(direction = 'next') {
  const container = document.getElementById('questao-conteudo-container');
  if (!container || questoesSimulado.length === 0) return;

  const q = questoesSimulado[indiceQuestaoAtual];
  const total = questoesSimulado.length;
  const respostaSalva = respostasUsuario[indiceQuestaoAtual];

  // Atualizar progresso visual
  const progressoBarra = document.getElementById('barra-progresso-simulado');
  const progressoTexto = document.getElementById('progresso-questoes-texto');
  const percentual = ((indiceQuestaoAtual + 1) / total) * 100;

  if (progressoBarra) progressoBarra.style.width = `${percentual}%`;
  if (progressoTexto) progressoTexto.innerText = `Questão ${indiceQuestaoAtual + 1} de ${total}`;

  let html = `
    <div class="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-color)] pb-3">
      <div class="flex items-center gap-2">
        <span class="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-emerald-500/15 border border-emerald-500/40 text-emerald-400">
          ${q.disciplinaNome}
        </span>
        <span class="text-xs text-slate-400 font-mono">
          Tópico: ${q.topicoTitulo}
        </span>
      </div>
      <span class="text-xs font-mono font-medium text-slate-400">
        ID: ${q.id}
      </span>
    </div>

    <div class="mb-6">
      <h3 class="text-base md:text-lg font-semibold text-slate-100 leading-relaxed">
        ${q.enunciado}
      </h3>
    </div>

    <div class="space-y-3 mb-8" id="opcoes-container">
  `;

  q.alternativas.forEach((alt, aIdx) => {
    const letra = String.fromCharCode(65 + aIdx);
    const isSelected = respostaSalva === aIdx;

    html += `
      <div class="quiz-option ${isSelected ? 'selected' : ''}" id="opt-simulado-${aIdx}" onclick="marcarRespostaSimulado(${aIdx})">
        <span class="badge-letra w-6 h-6 rounded-full border ${isSelected ? 'border-emerald-400 bg-emerald-500 text-white' : 'border-slate-500 text-slate-300'} text-xs flex items-center justify-center font-mono font-bold flex-shrink-0">
          ${letra}
        </span>
        <span class="text-xs md:text-sm text-slate-200 leading-snug">${alt}</span>
      </div>
    `;
  });

  html += `</div>`;

  container.innerHTML = html;

  // Atualizar botões de navegação
  const btnAnterior = document.getElementById('btn-anterior-questao');
  const btnProxima = document.getElementById('btn-proxima-questao');
  const btnFinalizar = document.getElementById('btn-finalizar-simulado');

  if (btnAnterior) {
    const ehPrimeira = (indiceQuestaoAtual === 0);
    btnAnterior.disabled = ehPrimeira;
    btnAnterior.classList.toggle('opacity-50', ehPrimeira);
    btnAnterior.style.pointerEvents = ehPrimeira ? 'none' : 'auto';
    btnAnterior.style.cursor = ehPrimeira ? 'not-allowed' : 'pointer';
  }

  if (btnProxima && btnFinalizar) {
    if (indiceQuestaoAtual === total - 1) {
      btnProxima.classList.add('hidden');
      btnFinalizar.classList.remove('hidden');
    } else {
      btnProxima.classList.remove('hidden');
      btnFinalizar.classList.add('hidden');
    }
  }

  // Atualizar mapa de questões para refletir questão ativa
  atualizarMapaQuestoes();

  // Animar transição com Anime.js de acordo com a direção
  if (window.anime) {
    const xOffset = direction === 'prev' ? -25 : (direction === 'next' ? 25 : 0);
    anime({
      targets: '#questao-conteudo-container',
      opacity: [0, 1],
      translateX: [xOffset, 0],
      duration: 320,
      easing: 'easeOutCubic'
    });
  }
}

/**
 * 4. Seleção de Alternativa no Simulado
 */
function marcarRespostaSimulado(altIdx) {
  respostasUsuario[indiceQuestaoAtual] = altIdx;

  // Atualiza visual das opções no DOM diretamente sem resetar o container
  const options = document.querySelectorAll('#opcoes-container .quiz-option');
  options.forEach((opt, idx) => {
    const isSelected = idx === altIdx;
    opt.classList.toggle('selected', isSelected);
    const badge = opt.querySelector('span.badge-letra');
    if (badge) {
      if (isSelected) {
        badge.className = 'badge-letra w-6 h-6 rounded-full border border-emerald-400 bg-emerald-500 text-white text-xs flex items-center justify-center font-mono font-bold flex-shrink-0';
      } else {
        badge.className = 'badge-letra w-6 h-6 rounded-full border border-slate-500 text-slate-300 text-xs flex items-center justify-center font-mono font-bold flex-shrink-0';
      }
    }
  });

  // Micro-animação na opção selecionada
  const clickedOpt = document.getElementById(`opt-simulado-${altIdx}`);
  if (clickedOpt && window.anime) {
    anime({
      targets: clickedOpt,
      scale: [0.97, 1.02, 1],
      duration: 250,
      easing: 'easeOutElastic(1, .6)'
    });
  }

  atualizarMapaQuestoes();
}

/**
 * 5. Navegação do Simulado (Anterior / Próxima / Pular)
 */
function proximaQuestao() {
  if (indiceQuestaoAtual < questoesSimulado.length - 1) {
    indiceQuestaoAtual++;
    renderizarQuestaoAtual('next');
  }
}

function anteriorQuestao() {
  if (indiceQuestaoAtual > 0) {
    indiceQuestaoAtual--;
    renderizarQuestaoAtual('prev');
  }
}

function irParaQuestao(index) {
  if (index >= 0 && index < questoesSimulado.length && index !== indiceQuestaoAtual) {
    const dir = index > indiceQuestaoAtual ? 'next' : 'prev';
    indiceQuestaoAtual = index;
    renderizarQuestaoAtual(dir);
  }
}

/**
 * 6. Mapa de Questões (Chips 1, 2, 3...)
 */
function renderizarMapaQuestoes() {
  const container = document.getElementById('mapa-questoes-container');
  if (!container) return;

  let html = '';
  questoesSimulado.forEach((_, idx) => {
    const respondida = respostasUsuario[idx] !== undefined;
    const isCurrent = idx === indiceQuestaoAtual;

    html += `
      <button type="button" class="w-8 h-8 rounded-lg text-xs font-mono font-bold flex items-center justify-center transition-all ${
        isCurrent
          ? 'bg-emerald-500 text-white ring-2 ring-emerald-300'
          : respondida
          ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/50'
          : 'bg-black/40 text-slate-400 border border-white/10 hover:border-slate-400'
      }" onclick="irParaQuestao(${idx})" id="chip-q-${idx}">
        ${idx + 1}
      </button>
    `;
  });

  container.innerHTML = html;
}

function atualizarMapaQuestoes() {
  questoesSimulado.forEach((_, idx) => {
    const chip = document.getElementById(`chip-q-${idx}`);
    if (!chip) return;

    const respondida = respostasUsuario[idx] !== undefined;
    const isCurrent = idx === indiceQuestaoAtual;

    chip.className = `w-8 h-8 rounded-lg text-xs font-mono font-bold flex items-center justify-center transition-all ${
      isCurrent
        ? 'bg-emerald-500 text-white ring-2 ring-emerald-300 scale-110 shadow-lg shadow-emerald-500/20'
        : respondida
        ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/50'
        : 'bg-black/40 text-slate-400 border border-white/10 hover:border-slate-400'
    }`;
  });
}

/**
 * 7. Finalização e Apresentação Lúdica do Gabarito
 */
function finalizarSimulado() {
  // Parar cronômetro
  if (temporizadorInterval) {
    clearInterval(temporizadorInterval);
    temporizadorInterval = null;
  }

  // Contabilizar acertos e erros
  let acertos = 0;
  const total = questoesSimulado.length;

  questoesSimulado.forEach((q, idx) => {
    if (respostasUsuario[idx] === q.correta) {
      acertos++;
    }
  });

  const percentual = Math.round((acertos / total) * 100);

  // Alternar telas
  const painelExecucao = document.getElementById('painel-execucao-simulado');
  const painelGabarito = document.getElementById('painel-gabarito-simulado');

  if (painelExecucao) painelExecucao.classList.add('hidden');
  if (painelGabarito) painelGabarito.classList.remove('hidden');

  // Atualizar dados do resultado
  const notaEl = document.getElementById('resultado-nota-texto');
  const tempoEl = document.getElementById('resultado-tempo-texto');
  const medalhaEl = document.getElementById('resultado-medalha-badge');
  const msgLúdicaEl = document.getElementById('resultado-mensagem-ludica');

  if (notaEl) notaEl.innerText = `${acertos} / ${total} acertos`;
  if (tempoEl) tempoEl.innerText = formatarTempo(tempoTotalSegundos);

  // Classificação lúdica e animações
  if (medalhaEl && msgLúdicaEl) {
    if (percentual >= 80) {
      medalhaEl.className = 'badge-medal gold anim-pop-in';
      medalhaEl.innerHTML = '<i class="fas fa-trophy"></i> Medalha de Ouro • Aprovado no IFSC!';
      msgLúdicaEl.innerText = 'Desempenho espetacular! Você demonstrou domínio consistente dos conteúdos exigidos no edital!';
      dispararMegaConfetes();
    } else if (percentual >= 60) {
      medalhaEl.className = 'badge-medal silver anim-pop-in';
      medalhaEl.innerHTML = '<i class="fas fa-medal"></i> Medalha de Prata • Reta Final!';
      msgLúdicaEl.innerText = 'Excelente resultado! Você está no caminho certo para conquistar sua vaga no processo seletivo!';
      dispararMegaConfetes();
    } else {
      medalhaEl.className = 'badge-medal bronze anim-pop-in';
      medalhaEl.innerHTML = '<i class="fas fa-compass"></i> Foco na Revisão • Continue Firme!';
      msgLúdicaEl.innerText = 'Bom esforço! Aproveite para revisar os tópicos nos quais teve dúvida e tente novamente.';
    }

    if (window.anime) {
      anime({
        targets: medalhaEl,
        scale: [0.6, 1.15, 1],
        rotate: [-12, 0],
        duration: 700,
        easing: 'easeOutElastic(1, .6)'
      });
    }
  }

  // Animar círculo de pontuação com Anime.js
  const circleProgress = document.getElementById('score-circle-svg-bar');
  const scorePercentEl = document.getElementById('score-percent-counter');

  if (circleProgress) {
    const circumference = 440;
    const offset = circumference - (percentual / 100) * circumference;

    if (window.anime) {
      anime({
        targets: circleProgress,
        strokeDashoffset: [440, offset],
        duration: 1400,
        easing: 'easeOutCubic'
      });

      anime({
        targets: { val: 0 },
        val: percentual,
        round: 1,
        duration: 1400,
        easing: 'easeOutCubic',
        update: function(anim) {
          if (scorePercentEl) {
            scorePercentEl.innerText = `${Math.round(anim.animations[0].currentValue)}%`;
          }
        }
      });
    } else {
      circleProgress.style.strokeDashoffset = offset;
      if (scorePercentEl) scorePercentEl.innerText = `${percentual}%`;
    }
  }

  // Renderizar revisão detalhada questão por questão
  renderizarRevisaoQuestoes();

  // Scroll suave sem quebras
  scrollSuaveAte('painel-gabarito-simulado');
}

/**
 * 8. Renderização da Revisão Questão a Questão com Animação Escalonada
 */
function renderizarRevisaoQuestoes() {
  const container = document.getElementById('revisao-questoes-container');
  if (!container) return;

  let html = '';

  questoesSimulado.forEach((q, idx) => {
    const respostaAluno = respostasUsuario[idx];
    const acertou = respostaAluno === q.correta;

    html += `
      <div class="p-5 rounded-2xl bg-black/25 border ${acertou ? 'border-emerald-500/40' : 'border-red-500/40'} card-revisao-item">
        <div class="flex items-center justify-between gap-2 mb-3">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-full ${acertou ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'} flex items-center justify-center text-xs font-mono font-bold">
              ${idx + 1}
            </span>
            <span class="text-xs font-bold uppercase tracking-wider text-slate-300">
              ${q.disciplinaNome}
            </span>
          </div>

          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-bold ${acertou ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}">
            <i class="fas ${acertou ? 'fa-check' : 'fa-times'}"></i>
            ${acertou ? 'Você acertou' : 'Você errou'}
          </span>
        </div>

        <p class="text-sm font-semibold text-slate-100 mb-4 leading-relaxed">
          ${q.enunciado}
        </p>

        <div class="space-y-2 mb-4">
    `;

    q.alternativas.forEach((alt, aIdx) => {
      const letra = String.fromCharCode(65 + aIdx);
      const isCorreta = aIdx === q.correta;
      const isAluno = aIdx === respostaAluno;

      let classeAlt = 'bg-black/30 border-white/5 text-slate-400';
      let tagExtra = '';

      if (isCorreta) {
        classeAlt = 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300 font-semibold';
        tagExtra = '<span class="ml-auto text-xs font-bold text-emerald-400"><i class="fas fa-check mr-1"></i>Gabarito Correto</span>';
      } else if (isAluno && !acertou) {
        classeAlt = 'bg-red-950/40 border-red-500/60 text-red-300';
        tagExtra = '<span class="ml-auto text-xs font-bold text-red-400"><i class="fas fa-times mr-1"></i>Sua Escolha</span>';
      }

      html += `
        <div class="flex items-center gap-3 p-3 rounded-lg border text-xs md:text-sm ${classeAlt}">
          <span class="font-mono font-bold">${letra})</span>
          <span>${alt}</span>
          ${tagExtra}
        </div>
      `;
    });

    html += `
        </div>

        <div class="p-3.5 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-300 leading-relaxed">
          <strong class="text-emerald-400 flex items-center gap-1.5 mb-1">
            <i class="fas fa-chalkboard-teacher"></i> Justificativa Pedagógica:
          </strong>
          ${q.explicacao}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Animação cascata de entrada com Anime.js
  if (window.anime) {
    anime({
      targets: '.card-revisao-item',
      opacity: [0, 1],
      translateY: [35, 0],
      delay: anime.stagger(100),
      duration: 500,
      easing: 'easeOutCubic'
    });
  }
}

/**
 * 9. Mega Disparo de Confetes Lúdicos Multidirecionais
 */
function dispararMegaConfetes() {
  if (typeof confetti === 'function') {
    // 1. Canhão da Esquerda
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ['#16a34a', '#4ade80', '#06b6d4', '#f59e0b', '#ffffff']
    });

    // 2. Canhão da Direita
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ['#16a34a', '#4ade80', '#06b6d4', '#f59e0b', '#ffffff']
    });

    // 3. Chuva Contínua por 3 segundos
    const duracao = 3000;
    const fim = Date.now() + duracao;

    const intervalo = setInterval(() => {
      if (Date.now() > fim) {
        clearInterval(intervalo);
        return;
      }
      confetti({
        particleCount: 25,
        startVelocity: 35,
        spread: 360,
        ticks: 70,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#16a34a', '#4ade80', '#06b6d4', '#fbbf24', '#ffffff']
      });
    }, 200);
  }
}

/**
 * 10. Reiniciar Simulado para Nova Configuração
 */
function reiniciarSimuladoParaConfig() {
  const painelConfig = document.getElementById('painel-config-simulado');
  const painelExecucao = document.getElementById('painel-execucao-simulado');
  const painelGabarito = document.getElementById('painel-gabarito-simulado');

  if (painelConfig) painelConfig.classList.remove('hidden');
  if (painelExecucao) painelExecucao.classList.add('hidden');
  if (painelGabarito) painelGabarito.classList.add('hidden');

  scrollSuaveAte('painel-config-simulado');
}

// Exportações explícitas para garantir compatibilidade global
window.iniciarSimulado = iniciarSimulado;
window.anteriorQuestao = anteriorQuestao;
window.proximaQuestao = proximaQuestao;
window.irParaQuestao = irParaQuestao;
window.marcarRespostaSimulado = marcarRespostaSimulado;
window.finalizarSimulado = finalizarSimulado;
window.reiniciarSimuladoParaConfig = reiniciarSimuladoParaConfig;
