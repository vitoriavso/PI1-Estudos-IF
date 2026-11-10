/**
 * ESTUDOS IF - CATÁLOGO OFICIAL DE CURSOS
 * Baseado no Portal IFSC Câmpus Garopaba (https://www.ifsc.edu.br/web/campus-garopaba/cursos)
 */

const CURSOS_IFSC_DATA = [
  {
    id: "curso-tec-informatica",
    nome: "Técnico Integrado em Informática",
    modalidade: "integrado",
    modalidadeLabel: "Técnico Integrado ao Ensino Médio",
    modalidadeCor: "var(--ifsc-green)",
    nivel: "Ensino Médio e Técnico",
    turno: "Integral (Vespertino com atividades matutinas)",
    duracao: "3 anos (6 semestres)",
    cargaHoraria: "3.340 horas",
    vagas: "40 vagas anuais",
    requisito: "Ter concluído ou estar concluindo o Ensino Fundamental",
    ingresso: "Exame de Classificação (Português, Matemática e Conhecimentos Gerais) ou Sorteio Público",
    coordenacao: "informatica.tec.gpb@ifsc.edu.br",
    resumo: "Formação completa de Ensino Médio aliada ao desenvolvimento profissional em análise de sistemas, programação de computadores, aplicações web e banco de dados.",
    perfilEgresso: "O Técnico em Informática formado pelo IFSC desenvolve programas de computador utilizando linguagens modernas, modela e gerencia bancos de dados, cria websites e aplicações móveis, e implementa soluções computacionais inovadoras com base no raciocínio lógico e ético.",
    areasAtuacao: [
      "Empresas de desenvolvimento de software e aplicativos móveis",
      "Departamentos de TI em organizações públicas e privadas",
      "Startups de tecnologia e comércio eletrônico",
      "Prestação de serviços autônomos e consultoria em programação"
    ],
    disciplinasDestaque: [
      "Lógica de Programação e Algoritmos",
      "Desenvolvimento Web (HTML5, CSS3, JavaScript, Backend)",
      "Banco de Dados Relacional",
      "Engenharia de Software e Projetos Integradores",
      "Sistemas Operacionais e Redes de Computadores"
    ],
    linkOficial: "https://www.ifsc.edu.br/web/campus-garopaba/cursos"
  },
  {
    id: "curso-tec-administracao",
    nome: "Técnico Integrado em Administração",
    modalidade: "integrado",
    modalidadeLabel: "Técnico Integrado ao Ensino Médio",
    modalidadeCor: "var(--ifsc-green)",
    nivel: "Ensino Médio e Técnico",
    turno: "Integral (Matutino/Vespertino)",
    duracao: "3 anos (6 semestres)",
    cargaHoraria: "3.200 horas",
    vagas: "40 vagas anuais",
    requisito: "Ter concluído o Ensino Fundamental completo",
    ingresso: "Exame de Classificação / Sorteio Público conforme Edital IFSC",
    coordenacao: "administracao.gpb@ifsc.edu.br",
    resumo: "Formação integral que capacita o jovem a atuar no planejamento estratégico, finanças, recursos humanos, logística e marketing empresarial.",
    perfilEgresso: "Capaz de executar funções de apoio administrativo, operar sistemas de gestão empresarial, auxiliar na elaboração de planejamentos operacionais e orçamentários, e fomentar o empreendedorismo regional sustentável.",
    areasAtuacao: [
      "Setores administrativos de médias e grandes empresas",
      "Instituições financeiras e cooperativas de crédito",
      "Órgãos da administração pública municipal e estadual",
      "Gestão de pequenas e médias empresas familiares"
    ],
    disciplinasDestaque: [
      "Teoria Geral da Administração",
      "Contabilidade Básica e Custos",
      "Gestão de Pessoas e Relações Humanas",
      "Marketing e Pesquisa de Mercado",
      "Empreendedorismo e Plano de Negócios"
    ],
    linkOficial: "https://www.ifsc.edu.br/web/campus-garopaba/cursos"
  },
  {
    id: "curso-tec-lazer",
    nome: "Técnico Integrado em Lazer",
    modalidade: "integrado",
    modalidadeLabel: "Técnico Integrado ao Ensino Médio",
    modalidadeCor: "var(--ifsc-green)",
    nivel: "Ensino Médio e Técnico",
    turno: "Integral",
    duracao: "3 anos (6 semestres)",
    cargaHoraria: "3.100 horas",
    vagas: "40 vagas anuais",
    requisito: "Ensino Fundamental concluído",
    ingresso: "Processo Seletivo Unificado do IFSC",
    coordenacao: "lazer.gpb@ifsc.edu.br",
    resumo: "Formação vocacionada para o setor do turismo, recreação, cultura e eventos, explorando as potencialidades naturais e socioeconômicas de Garopaba.",
    perfilEgresso: "Profissional qualificado para planejar, organizar e conduzir programas e atividades de recreação e lazer para públicos de diferentes faixas etárias em resorts, clubes, centros comunitários e eventos turísticos.",
    areasAtuacao: [
      "Hotéis, pousadas e resorts litorâneos",
      "Academias, clubes recreativos e colônias de férias",
      "Agências de eventos e festivais culturais",
      "Projetos sociais públicos de esporte e convivência"
    ],
    disciplinasDestaque: [
      "Fundamentos do Lazer e Recreação",
      "Planejamento de Eventos Culturais e Esportivos",
      "Dinâmicas de Grupos e Relações Interpessoais",
      "Patrimônio Natural, Ecoturismo e Sustentabilidade",
      "Primeiros Socorros e Segurança em Atividades Recreativas"
    ],
    linkOficial: "https://www.ifsc.edu.br/web/campus-garopaba/cursos"
  },
  {
    id: "curso-tec-biotecnologia",
    nome: "Técnico Concomitante em Biotecnologia",
    modalidade: "concomitante",
    modalidadeLabel: "Técnico Concomitante",
    modalidadeCor: "var(--accent-cyan)",
    nivel: "Técnico Profissionalizante",
    turno: "Vespertino / Noturno",
    duracao: "2 anos (4 semestres)",
    cargaHoraria: "1.200 horas",
    vagas: "35 vagas anuais",
    requisito: "Estar matriculado a partir da 2ª série do Ensino Médio em qualquer escola",
    ingresso: "Sorteio Público oficial do IFSC",
    coordenacao: "biotecnologia.gpb@ifsc.edu.br",
    resumo: "Capacita estudantes para a aplicação de processos biológicos e laboratoriais na produção de alimentos, cosméticos, controle ambiental e fármacos.",
    perfilEgresso: "Realiza análises microbiológicas, opera biorreatores, auxilia em pesquisas genéticas e monitora a qualidade ambiental da água e do solo em conformidade com as normas de biossegurança.",
    areasAtuacao: [
      "Laboratórios de controle de qualidade e análises clínicas",
      "Indústrias de alimentos, bebidas fermentadas e laticínios",
      "Empresas de tratamento de efluentes e gestão ambiental",
      "Institutos de pesquisa científica e biotecnológica"
    ],
    disciplinasDestaque: [
      "Microbiologia Geral e Aplicada",
      "Bioquímica e Biologia Molecular",
      "Boas Práticas de Laboratório e Biossegurança",
      "Processos Fermentativos Industriais",
      "Biotecnologia Ambiental e Controle de Poluição"
    ],
    linkOficial: "https://www.ifsc.edu.br/web/campus-garopaba/cursos"
  },
  {
    id: "curso-tec-guia-turismo",
    nome: "Técnico Subsequente em Guia de Turismo Regional (SC)",
    modalidade: "subsequente",
    modalidadeLabel: "Técnico Subsequente",
    modalidadeCor: "var(--accent-amber)",
    nivel: "Técnico Profissionalizante",
    turno: "Noturno",
    duracao: "1 ano e meio (3 semestres)",
    cargaHoraria: "800 horas + práticas de campo",
    vagas: "30 vagas semestrais",
    requisito: "Ensino Médio completo",
    ingresso: "Sorteio Público pelo Portal de Ingresso do IFSC",
    coordenacao: "guiadeturismo.gpb@ifsc.edu.br",
    resumo: "Habilitação profissional regulamentada pelo Ministério do Turismo (CADASTUR) para atuar como guia de turismo em todo o estado de Santa Catarina.",
    perfilEgresso: "Conduz, orienta e transmite informações sobre atrativos turísticos, históricos, geográficos e culturais aos turistas, prezando pela segurança, ética e preservação ambiental.",
    areasAtuacao: [
      "Agências e operadoras de viagens receptivas",
      "Passeios de ecoturismo, trilhas e observação de baleias",
      "Cruzeiros marítimos e roteiros culturais pelo litoral catarinense",
      "Consultoria de hospitalidade e guiamento autônomo"
    ],
    disciplinasDestaque: [
      "Teoria e Técnica de Guiamento Turístico",
      "Geografia e Atrativos Turísticos de Santa Catarina",
      "História e Patrimônio Cultural Catarinense",
      "Inglês e Espanhol Aplicados ao Turismo",
      "Legislação Turística e Primeiros Socorros"
    ],
    linkOficial: "https://www.ifsc.edu.br/web/campus-garopaba/cursos"
  },
  {
    id: "curso-sup-tsi",
    nome: "Sistemas para a Internet (TSI)",
    modalidade: "superior",
    modalidadeLabel: "Curso Superior de Tecnologia (Graduação)",
    modalidadeCor: "var(--accent-purple)",
    nivel: "Graduação / Ensino Superior",
    turno: "Noturno",
    duracao: "3 anos (6 semestres)",
    cargaHoraria: "2.400 horas",
    vagas: "40 vagas anuais",
    requisito: "Ensino Médio completo",
    ingresso: "Sistema de Seleção Unificada (SiSU via ENEM) e Vestibular Unificado UFSC/IFSC",
    coordenacao: "tsi.gpb@ifsc.edu.br",
    resumo: "Graduação superior com foco prático no desenvolvimento de sistemas web complexos, arquitetura cloud, segurança da informação e engenharia de software.",
    perfilEgresso: "O Tecnólogo em Sistemas para a Internet projeta, desenvolve, implanta e gerencia sistemas distribuídos em nuvem, plataformas de e-commerce, APIs RESTful, bancos de dados e interfaces com alta usabilidade e acessibilidade.",
    areasAtuacao: [
      "Empresas globais de tecnologia e software houses",
      "Bancos digitais e fintechs",
      "Liderança técnica de equipes ágeis (Scrum, DevOps)",
      "Empreendedorismo e inovação digital"
    ],
    disciplinasDestaque: [
      "Engenharia de Usabilidade e UX/UI Design",
      "Programação Orientada a Objetos e Padrões de Projeto",
      "Desenvolvimento Full-Stack Avançado",
      "Cloud Computing, Microsserviços e DevOps",
      "Segurança e Privacidade de Aplicações Web (LGPD)"
    ],
    linkOficial: "https://www.ifsc.edu.br/web/campus-garopaba/cursos"
  },
  {
    id: "curso-fic-assistente-adm",
    nome: "Assistente Administrativo (EJA / Qualificação)",
    modalidade: "fic",
    modalidadeLabel: "Formação Inicial e Continuada (FIC / EJA)",
    modalidadeCor: "var(--accent-blue)",
    nivel: "Qualificação Profissional",
    turno: "Noturno",
    duracao: "1 semestre (aproximadamente 4 a 6 meses)",
    cargaHoraria: "200 horas",
    vagas: "30 vagas por turma",
    requisito: "Ensino Fundamental I completo e idade mínima de 16 anos",
    ingresso: "Sorteio Público sem taxa de inscrição",
    coordenacao: "fic.gpb@ifsc.edu.br",
    resumo: "Curso rápido gratuito destinado à inserção e recolocação profissional no mercado de trabalho e nivelamento de conhecimentos administrativos.",
    perfilEgresso: "Apto a atuar no suporte a compras, atendimento a clientes, redação de documentos oficiais, arquivo digital e rotinas de escritório comercial.",
    areasAtuacao: [
      "Comércio varejista e atacadista de Garopaba e região",
      "Prestadoras de serviços e escritórios de contabilidade",
      "Recepção e atendimento em clínicas e pousadas"
    ],
    disciplinasDestaque: [
      "Rotinas de Escritório e Redação Oficial",
      "Noções de Informática e Planilhas Eletrônicas",
      "Atendimento ao Público e Ética Profissional",
      "Matemática Financeira Básica"
    ],
    linkOficial: "https://www.ifsc.edu.br/web/campus-garopaba/cursos"
  }
];

