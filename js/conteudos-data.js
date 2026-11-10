/**
 * ESTUDOS IF - BANCO DE DADOS DOS CONTEÚDOS E QUESTÕES
 * Elaborado pelas estudantes Vitória Valentina da Silva Ortiz e Brenda Luizy de Vargas Carneiro
 * Validação Pedagógica: IFSC Câmpus Garopaba
 */

const CONTEUDOS_DATA = {
  historia: {
    nome: "História",
    icone: "fa-landmark",
    cor: "var(--accent-amber)",
    topicos: [
      {
        id: "hist-independencia",
        disciplina: "historia",
        titulo: "Independência do Brasil (1822)",
        subtitulo: "Do Período Joanino à Ruptura com as Cortes de Lisboa e o 7 de Setembro",
        tempoLeitura: "14 min de estudo",
        resumo: "A Independência do Brasil foi o processo histórico de separação política entre o Reino do Brasil e o Reino de Portugal, culminando na proclamação por Dom Pedro I em 7 de setembro de 1822.",
        contexto: "O processo de emancipação política do Brasil começou a se desenhar de forma decisiva em 1808, com a transferência da família real portuguesa para o Rio de Janeiro, fugindo das tropas napoleônicas. A abertura dos portos às nações amigas e a elevação do Brasil a Reino Unido de Portugal, Brasil e Algarves em 1815 alteraram o estatuto colonial. Com a Revolução Liberal do Porto em 1820, as Cortes portuguesas exigiram o retorno de Dom João VI e a recolonização do território brasileiro, provocando forte resistência das elites agrárias brasileiras reunidas em torno do príncipe regente Dom Pedro.",
        topicosChave: [
          {
            titulo: "A Abertura dos Portos e o Fim do Pacto Colonial",
            explicacao: "Em 1808, Dom João assinou a Carta Régia de Abertura dos Portos, encerrando o monopólio comercial metropolitano e beneficiando os grandes proprietários de terras e o comércio britânico."
          },
          {
            titulo: "O Dia do Fico (9 de janeiro de 1822)",
            explicacao: "Pressionado pelas Cortes de Lisboa a regressar imediatamente, Dom Pedro proferiu a célebre frase: 'Se é para o bem de todos e felicidade geral da Nação, estou pronto! Diga ao povo que fico!'. Esse ato marcou a desobediência formal às ordens metropolitanas."
          },
          {
            titulo: "O Papel de Maria Leopoldina e José Bonifácio",
            explicacao: "José Bonifácio de Andrada e Silva, o 'Patriarca da Independência', e a princesa regente Maria Leopoldina desempenharam papel diplomático e executivo crucial: em 2 de setembro de 1822, Leopoldina assinou a declaração formal de independência enquanto Pedro viajava a São Paulo."
          },
          {
            titulo: "O Grito do Ipiranga e a Manutenção da Monarquia",
            explicacao: "Ao receber os despachos no dia 7 de setembro de 1822 às margens do riacho Ipiranga, Pedro proclamou a independência. Diferente da América Espanhola, que se fragmentou em várias repúblicas, o Brasil manteve a integridade territorial, a forma monárquica de governo e a escravidão."
          }
        ],
        timeline: [
          { data: "1808", titulo: "Chegada da Corte Portuguesa", descricao: "Abertura dos Portos às Nações Amigas e início da autonomia econômica brasileira." },
          { data: "1815", titulo: "Elevação a Reino Unido", descricao: "O Brasil deixa juridicamente de ser colônia e passa a compor o Reino Unido com Portugal." },
          { data: "1820", titulo: "Revolução Liberal do Porto", descricao: "Exigência de retorno de Dom João VI e tentativas de revogar a autonomia brasileira." },
          { data: "Jan/1822", titulo: "O Dia do Fico", descricao: "Dom Pedro decide permanecer no Brasil com apoio do Clube da Resistência e das elites." },
          { data: "Set/1822", titulo: "O Grito do Ipiranga", descricao: "Ruptura definitiva e aclamação de Dom Pedro I como Imperador Constitucional." }
        ],
        termosChave: [
          { termo: "Pacto Colonial", definicao: "Obrigação das colônias comercializarem com exclusividade com suas metrópoles." },
          { termo: "Cortes de Lisboa", definicao: "Assembleia constituinte portuguesa que tentou recolonizar e subordinar as províncias brasileiras." },
          { termo: "Patriarca da Independência", definicao: "Título concedido a José Bonifácio por sua liderança política e articulação da soberania nacional." }
        ],
        videoAula: {
          titulo: "Independência do Brasil — Contexto e Acontecimentos",
          canal: "Canal Educação & História (IFSC Integrado)",
          url: "https://www.youtube.com/results?search_query=independencia+do+brasil+enem+ifsc",
          duracao: "18 min"
        },
        questoes: [
          {
            id: "q-hist-1",
            enunciado: "Qual acontecimento internacional desencadeou a transferência da família real portuguesa para o Brasil em 1808?",
            alternativas: [
              "A invasão das tropas francesas comandadas por Napoleão Bonaparte na Península Ibérica.",
              "A independência dos Estados Unidos da América.",
              "A eclosão da Primeira Guerra Mundial na Europa.",
              "A assinatura do Tratado de Tordesilhas entre Espanha e Portugal."
            ],
            correta: 0,
            explicacao: "A transferência da Corte portuguesa em 1807-1808 foi motivada diretamente pela invasão de Portugal pelas tropas de Napoleão Bonaparte, em virtude do não cumprimento do Bloqueio Continental por parte de Portugal."
          },
          {
            id: "q-hist-2",
            enunciado: "Diferente da maioria dos países da América Espanhola após a independência, o Brasil manteve como características fundamentais:",
            alternativas: [
              "O regime republicano federativo e a imediata abolição da escravidão.",
              "A fragmentação territorial em dezenas de pequenos países independentes.",
              "A monarquia constitucional hereditária e a continuidade da escravidão.",
              "A adoção do parlamentarismo puro com sufrágio universal irrestrito."
            ],
            correta: 2,
            explicacao: "Ao contrário dos vizinhos hispano-americanos que adotaram repúblicas fragmentadas, o Brasil preservou a forma de governo monárquica sob a dinastia de Bragança, manteve a unidade territorial e preservou o regime escravocrata."
          },
          {
            id: "q-hist-3",
            enunciado: "O episódio histórico conhecido como 'Dia do Fico' (9 de janeiro de 1822) representou:",
            alternativas: [
              "O juramento da primeira Constituição brasileira por Dom Pedro I.",
              "A decisão formal de Dom Pedro de permanecer no Brasil, desobedecendo às ordens das Cortes de Lisboa.",
              "A abdicação de Dom Pedro I em favor de seu filho Dom Pedro de Alcântara.",
              "A proclamação imediata da República no Rio de Janeiro."
            ],
            correta: 1,
            explicacao: "No 'Dia do Fico', o príncipe regente Dom Pedro declarou que permaneceria no Brasil para atender aos anseios da população e das elites locais, contrariando a determinação das Cortes de Lisboa para seu retorno imediato."
          }
        ]
      },
      {
        id: "hist-vargas",
        disciplina: "historia",
        titulo: "A Era Vargas (1930 – 1945)",
        subtitulo: "A Queda da República Velha, Modernização Industrial, Legislação Trabalhista e o Estado Novo",
        tempoLeitura: "16 min de estudo",
        resumo: "Período de 15 anos ininterruptos em que Getúlio Vargas presidiu o Brasil, transformando a economia agroexportadora em uma sociedade urbano-industrial com forte intervenção estatal.",
        contexto: "A crise da bolsa de Nova York em 1929 atingiu em cheio a cafeicultura paulista, base política da República Velha (República do Café com Leite). O rompimento da aliança entre São Paulo e Minas Gerais levou à formação da Aliança Liberal (RS, MG e PB), lançando Getúlio Vargas à presidência. Após a derrota eleitoral e o assassinato de João Pessoa, a Revolução de 1930 depôs Washington Luís e colocou Vargas no poder, iniciando uma fase de profundas transformações sociopolíticas no país.",
        topicosChave: [
          {
            titulo: "Governo Provisório (1930–1934)",
            explicacao: "Vargas dissolveu o Congresso Nacional, suspendeu a Constituição de 1891 e nomeou interventores federais nos estados. A insatisfação paulista culminou na Revolução Constitucionalista de 1932, forçando a convocação da Constituinte de 1934 (que garantiu o voto secreto e o voto feminino)."
          },
          {
            titulo: "Governo Constitucional e a Polarização (1934–1937)",
            explicacao: "Período marcado pela disputa ideológica entre a Ação Integralista Brasileira (AIB, de inspiração fascista) e a Aliança Nacional Libertadora (ANL, antifascista e de orientação comunista, liderada por Luís Carlos Prestes)."
          },
          {
            titulo: "O Estado Novo (1937–1945)",
            explicacao: "Sob o pretexto da descoberta do suposto 'Plano Cohen' (uma farsa comunista), Vargas aplicou um autogolpe, outorgou a Constituição de 1937 ('Polaca'), instituiu a censura prévia através do DIP (Departamento de Imprensa e Propaganda) e baniu os partidos políticos."
          },
          {
            titulo: "Industrialização de Base e Legislação Trabalhista",
            explicacao: "Criação da Companhia Siderúrgica Nacional (CSN), da Vale do Rio Doce e da Fábrica Nacional de Motores. Em 1943, foi promulgada a Consolidação das Leis do Trabalho (CLT), garantindo salário mínimo, férias remuneradas e jornada de 8 horas."
          }
        ],
        timeline: [
          { data: "1930", titulo: "Revolução de 1930", descricao: "Fim da República Oligárquica e ascensão de Getúlio Vargas ao poder provisório." },
          { data: "1932", titulo: "Revolução Constitucionalista", descricao: "Levante armado de São Paulo exigindo uma nova Constituição para o Brasil." },
          { data: "1934", titulo: "Constituição de 1934", descricao: "Instituição do voto secreto, direito de voto às mulheres e primeiros direitos sociais." },
          { data: "1937", titulo: "Golpe do Estado Novo", descricao: "Fechamento do Congresso, outorga da Constituição autoritária e censura pelo DIP." },
          { data: "1943", titulo: "Criação da CLT", descricao: "Unificação e consolidação das leis de proteção e direitos trabalhistas." }
        ],
        termosChave: [
          { termo: "CLT", definicao: "Consolidação das Leis do Trabalho, marco legislativo de 1943 que formalizou os direitos dos trabalhadores urbanos." },
          { termo: "DIP", definicao: "Departamento de Imprensa e Propaganda, órgão do Estado Novo responsável pela censura e pelo culto à figura de Vargas." },
          { termo: "Plano Cohen", definicao: "Documento forjado pelas forças armadas usado como justificativa para o golpe de estado de 1937." }
        ],
        videoAula: {
          titulo: "Era Vargas: Do Governo Provisório ao Estado Novo",
          canal: "História em Foco IFSC",
          url: "https://www.youtube.com/results?search_query=era+vargas+enem+resumo",
          duracao: "20 min"
        },
        questoes: [
          {
            id: "q-hist-4",
            enunciado: "A Constituição de 1934, promulgada durante a Era Vargas, representou um avanço democrático marcante ao instituir:",
            alternativas: [
              "O voto censitário baseado em renda mínima de café.",
              "O voto secreto e a garantia do direito de voto para as mulheres.",
              "A extinção definitiva dos sindicatos e da justiça eleitoral.",
              "A reeleição presidencial ilimitada para mandatos de oito anos."
            ],
            correta: 1,
            explicacao: "A Constituição de 1934 inovou ao criar a Justiça Eleitoral, estabelecer o voto secreto e reconhecer pela primeira vez na esfera federal o voto feminino."
          },
          {
            id: "q-hist-5",
            enunciado: "Qual instrumento institucional foi amplamente utilizado por Getúlio Vargas durante o Estado Novo para exercer censura aos meios de comunicação e construir a propaganda do governo?",
            alternativas: [
              "O Departamento de Imprensa e Propaganda (DIP).",
              "A Comissão Nacional de Energia Nuclear (CNEN).",
              "O Serviço de Proteção aos Índios (SPI).",
              "A Superintendência do Desenvolvimento do Nordeste (SUDENE)."
            ],
            correta: 0,
            explicacao: "O DIP (Departamento de Imprensa e Propaganda) controlava rádios, jornais e cinema, atuando na censura à oposição e na difusão da imagem de Vargas como o 'Pai dos Pobres'."
          },
          {
            id: "q-hist-6",
            enunciado: "No âmbito econômico, a atuação estatal na Era Vargas caracterizou-se prioritariamente pelo(a):",
            alternativas: [
              "Liberalismo econômico irrestrito e privatização de empresas portuárias.",
              "Investimento na indústria de base e na infraestrutura pesada (siderurgia e energia).",
              "Abandono total da cafeicultura e dependência exclusiva de empréstimos britânicos.",
              "Proibição do surgimento de indústrias nacionais em favor de manufaturas estrangeiras."
            ],
            correta: 1,
            explicacao: "Vargas promoveu a industrialização de base (Companhia Siderúrgica Nacional, Vale do Rio Doce), garantindo insumos essenciais para o desenvolvimento fabril do país."
          }
        ]
      },
      {
        id: "hist-ditadura",
        disciplina: "historia",
        titulo: "A Ditadura Militar no Brasil (1964 – 1985)",
        subtitulo: "O Golpe de 64, Atos Institucionais, Resistência e o Movimento das Diretas Já",
        tempoLeitura: "15 min de estudo",
        resumo: "Regime autoritário instaurado em 31 de março de 1964 com a deposição do presidente João Goulart, estendendo-se por 21 anos marcados pela supressão de direitos políticos, censura e posterior redemocratização.",
        contexto: "Em meio à Guerra Fria e ao clima de radicalização política nos anos 1960, as Reformas de Base propostas pelo presidente João Goulart (Jango) geraram forte oposição de setores conservadores, empresariais, da grande imprensa e da cúpula militar com apoio dos EUA. O golpe militar de 31 de março de 1964 derrubou Jango sob o pretexto de combater a corrupção e a ameaça comunista, inaugurando sucessivas gestões de generais-presidentes.",
        topicosChave: [
          {
            titulo: "Os Atos Institucionais e o AI-5 (1968)",
            explicacao: "Os Atos Institucionais foram decretos emitidos pelo governo militar sem passar pelo Congresso. O mais severo foi o AI-5, decretado pelo general Costa e Silva em dezembro de 1968, que fechou o Congresso, cassou mandatos, revogou o habeas corpus para crimes políticos e oficializou a censura prévia."
          },
          {
            titulo: "O Milagre Econômico e a Dívida Externa",
            explicacao: "Durante o governo do general Emílio Garrastazu Médici (1969–1974), o PIB brasileiro cresceu a taxas superiores a 10% ao ano, impulsionado por grandes obras faraônicas (como a Ponte Rio-Niterói e a Transamazônica). Todavia, gerou concentração brutal de renda, arrocho salarial e disparada da dívida externa."
          },
          {
            titulo: "Abertura Lenta, Gradual e Segura (Geisel e Figueiredo)",
            explicacao: "A partir de 1974, diante do esgotamento econômico e da crise do petróleo, o general Ernesto Geisel iniciou a transição política. Em 1979, o presidente João Figueiredo sancionou a Lei da Anistia, permitindo o retorno dos exilados e o restabelecimento do pluripartidarismo."
          },
          {
            titulo: "As Diretas Já e a Eleição de Tancredo Neves",
            explicacao: "Em 1983-1984, milhões de brasileiros foram às ruas na campanha 'Diretas Já' para apoiar a Emenda Dante de Oliveira, que previa eleições diretas para presidente. Embora a emenda tenha sido rejeitada por falta de votos, a oposição articulou no Colégio Eleitoral a vitória civil de Tancredo Neves em 1985."
          }
        ],
        timeline: [
          { data: "1964", titulo: "Golpe de 31 de Março", descricao: "Deposição de João Goulart e posse do marechal Castelo Branco." },
          { data: "1968", titulo: "Decreto do AI-5", descricao: "Fechamento do regime político, suspensão do habeas corpus e censura oficial." },
          { data: "1970", titulo: "Auge do Milagre Econômico", descricao: "Crescimento acelerado do PIB contrastando com repressão e propaganda ufanista." },
          { data: "1979", titulo: "Lei da Anistia", descricao: "Retorno de exilados políticos e reabertura partidária no governo Figueiredo." },
          { data: "1984-85", titulo: "Diretas Já e Fim do Regime", descricao: "Mobilização popular massiva e vitória de Tancredo Neves no Colégio Eleitoral." }
        ],
        termosChave: [
          { termo: "AI-5", definicao: "Ato Institucional nº 5, o mais repressivo do regime militar, retirando garantias constitucionais fundamentais." },
          { termo: "Diretas Já", definicao: "Maior movimento de massas cívico da história recente brasileira, demandando eleições diretas para presidente." },
          { termo: "Anistia", definicao: "Perdão legal concedido em 1979 que beneficiou perseguidos políticos e também agentes do Estado envolvidos na repressão." }
        ],
        videoAula: {
          titulo: "Ditadura Militar Brasileira: Do Golpe à Redemocratização",
          canal: "Aulas IFSC Cidadania",
          url: "https://www.youtube.com/results?search_query=ditadura+militar+brasil+enem+resumo",
          duracao: "22 min"
        },
        questoes: [
          {
            id: "q-hist-7",
            enunciado: "O Ato Institucional nº 5 (AI-5), promulgado em dezembro de 1968, é considerado o mais drástico instrumento do regime militar porque:",
            alternativas: [
              "Convocou eleições diretas imediatas com voto facultativo para jovens de 16 anos.",
              "Suspendeu as garantias constitucionais de habeas corpus e autorizou o fechamento do Congresso Nacional.",
              "Promoveu a reforma agrária em todas as propriedades improdutivas do país.",
              "Extinguiu as Forças Armadas e criou uma guarda civil municipal desarmada."
            ],
            correta: 1,
            explicacao: "O AI-5 consolidou o período mais duro ('anos de chumbo'), conferindo plenos poderes ao presidente para intervir nos estados, fechar o legislativo e suspender o habeas corpus para crimes de segurança nacional."
          },
          {
            id: "q-hist-8",
            enunciado: "A campanha popular das 'Diretas Já' (1983-1984) mobilizou milhões de brasileiros nas praças públicas com a reivindicação de:",
            alternativas: [
              "Votação da emenda constitucional que restabelecia a eleição direta para a Presidência da República.",
              "Retorno imediato da família real portuguesa ao poder no Brasil.",
              "Estatização de todas as empresas e indústrias multinacionais em território nacional.",
              "Criação de uma nova capital federal no litoral de Santa Catarina."
            ],
            correta: 0,
            explicacao: "A campanha pedia a aprovação da Emenda Dante de Oliveira para que os cidadãos brasileiros pudessem votar diretamente para presidente nas eleições seguintes."
          },
          {
            id: "q-hist-9",
            enunciado: "O fenômeno econômico ocorrido entre 1968 e 1973, caracterizado por expressivo crescimento do PIB aliado à forte concentração de renda, ficou conhecido como:",
            alternativas: [
              "Encilhamento Financeiro.",
              "Milagre Econômico.",
              "Plano de Metas de Juscelino.",
              "Reforma Tributária de 1930."
            ],
            correta: 1,
            explicacao: "O 'Milagre Econômico' gerou taxas médias de crescimento em torno de 10% a 11% ao ano, mas concentrou renda e aumentou expressivamente a dívida externa brasileira."
          }
        ]
      }
    ]
  },

  portugues: {
    nome: "Português",
    icone: "fa-book-open",
    cor: "var(--accent-cyan)",
    topicos: [
      {
        id: "port-interpretacao",
        disciplina: "portugues",
        titulo: "Interpretação e Compreensão Textual",
        subtitulo: "Diferenciação Crítica, Gêneros Textuais, Níveis de Inferência e Figuras de Linguagem",
        tempoLeitura: "13 min de estudo",
        resumo: "A interpretação de textos é a competência de atribuir sentido a uma mensagem, identificando a tese central, as estratégias argumentativas, os implícitos e as relações de coerência e coesão.",
        contexto: "Nas provas de seleção dos Institutos Federais (IFSC), mais de 50% das questões de Língua Portuguesa envolvem a leitura atenta de crônicas, reportagens, poemas e tirinhas. Saber distinguir entre *compreensão* (o que está explícito na superfície do texto) e *interpretação* (o que se deduz logicamente a partir do texto e do conhecimento de mundo) é o diferencial para evitar respostas precipitadas e pegadinhas comuns.",
        topicosChave: [
          {
            titulo: "Compreensão vs. Interpretação",
            explicacao: "Compreensão é a decodificação da mensagem explícita ('conforme o texto afirma...'). Já a interpretação exige extrapolar os dados visíveis e depreender intenções comunicativas, ironias ou teses implícitas ('conclui-se do texto que...')."
          },
          {
            titulo: "Coesão Referencial e Sequencial",
            explicacao: "A coesão referencial usa pronomes, sinônimos e elipses para retomar elementos sem repeti-los desnecessariamente. A sequencial utiliza conjunções para articular causas, concessões, oposições e conclusões lógicas."
          },
          {
            titulo: "Denotação e Conotação",
            explicacao: "Linguagem denotativa é o sentido literal, objetivo e dicionarizado (comum em notícias e textos científicos). Conotativa é o sentido figurado, metafórico e expressivo (típico de poemas, contos e propagandas)."
          },
          {
            titulo: "Principais Figuras de Linguagem em Editais",
            explicacao: "Metáfora (comparação implícita), Metonímia (troca da parte pelo todo), Hipérbole (exagero intencional), Eufemismo (suavização de termo desagradável) e Ironia (dizer o oposto do que se quer expressar para efeito crítico)."
          }
        ],
        timeline: [
          { data: "Etapa 1", titulo: "Primeira Leitura Exploratória", descricao: "Identificação do tema geral, gênero textual, autor e veículo de publicação." },
          { data: "Etapa 2", titulo: "Análise dos Parágrafos", descricao: "Localização da ideia-núcleo de cada parágrafo e dos conectivos de transição." },
          { data: "Etapa 3", titulo: "Leitura do Enunciado da Questão", descricao: "Identificar o comando exato: busca algo explícito (compreensão) ou dedutível (inferência)?" },
          { data: "Etapa 4", titulo: "Descarte de Alternativas Extremas", descricao: "Cuidado com termos categóricos como 'sempre', 'nunca', 'todos' e 'exclusivamente'." }
        ],
        termosChave: [
          { termo: "Inferência", definicao: "Processo mental de deduzir uma informação não dita diretamente, com base em pistas do texto." },
          { termo: "Intertextualidade", definicao: "Diálogo implícito ou explícito que um texto estabelece com outra obra ou referência cultural." },
          { termo: "Tese", definicao: "Opinião ou ponto de vista defendido pelo autor através de argumentos em textos dissertativos." }
        ],
        videoAula: {
          titulo: "Como gabaritar Interpretação de Texto nos Processos Seletivos",
          canal: "Língua Portuguesa para Todos (IFSC)",
          url: "https://www.youtube.com/results?search_query=interpretacao+de+texto+ifsc+questoes",
          duracao: "15 min"
        },
        questoes: [
          {
            id: "q-port-1",
            enunciado: "Em qual das seguintes frases a palavra destacada foi empregada em sentido CONOTATIVO (figurado)?",
            alternativas: [
              "O médico realizou uma cirurgia complexa no coração do paciente.",
              "Aquela mulher possui um coração de ouro e sempre ajuda quem precisa.",
              "O órgão cardíaco é responsável por bombear o sangue por todo o organismo.",
              "O exame de ecocardiograma revelou um batimento rítmico e regular."
            ],
            correta: 1,
            explicacao: "Na frase 'coração de ouro', a expressão não se refere ao órgão biológico, mas a uma qualidade metafórica de generosidade e bondade (sentido conotativo)."
          },
          {
            id: "q-port-2",
            enunciado: "Considere a oração: 'O governo investiu em saneamento básico, CONTUDO a população ainda enfrenta problemas com enchentes.' O conectivo em destaque expressa relação de:",
            alternativas: [
              "Adição de argumentos paralelos.",
              "Causa determinante do investimento.",
              "Oposição / adversidade entre as ideias.",
              "Conclusão lógica de uma premissa."
            ],
            correta: 2,
            explicacao: "'Contudo', assim como 'mas', 'porém', 'todavia' e 'entretanto', é uma conjunção coordenativa adversativa, indicando oposição ou quebra de expectativa."
          },
          {
            id: "q-port-3",
            enunciado: "Ao dizer 'Ele faltou com a verdade diante dos jurados' em vez de 'Ele mentiu descaradamente', o falante utilizou a figura de linguagem denominada:",
            alternativas: [
              "Hipérbole.",
              "Eufemismo.",
              "Pleonasmo.",
              "Antítese."
            ],
            correta: 1,
            explicacao: "O eufemismo é a figura que consiste em suavizar uma expressão rude, desagradável ou pesada ('faltar com a verdade' para suavizar 'mentir')."
          }
        ]
      },
      {
        id: "port-concordancia",
        disciplina: "portugues",
        titulo: "Concordância Verbal e Nominal",
        subtitulo: "Regras Gerais, Casos Especiais com Sujeito Composto, Partícula 'SE' e Erros Comuns",
        tempoLeitura: "15 min de estudo",
        resumo: "A concordância é o princípio sintático pelo qual o verbo se flexiona de acordo com o sujeito (concordância verbal) e o adjetivo/artigo concorda em gênero e número com o substantivo (concordância nominal).",
        contexto: "O domínio da concordância padrão é uma das cobranças mais tradicionais em provas de língua portuguesa de nível fundamental e médio. Questões elaboradas pelos Institutos Federais costumam explorar casos de verbos impessoais (como 'haver' e 'fazer'), concordância com expressões partitivas e a dupla função da partícula 'se' (como pronome apassivador ou índice de indeterminação do sujeito).",
        topicosChave: [
          {
            titulo: "Verbo HAVER no sentido de Existir ou Ocorrer",
            explicacao: "O verbo 'haver' com sentido de 'existir', 'acontecer' ou indicando tempo decorrido é IMPESSOAL: não possui sujeito e deve permanecer obrigatoriamente na 3ª pessoa do singular ('Havia muitos alunos na sala', e nunca 'Haviam muitos alunos')."
          },
          {
            titulo: "Verbo FAZER indicando Tempo ou Clima",
            explicacao: "Também é impessoal: 'Faz dez anos que não o vejo' e 'Fazia dias muito frios no inverno catarinense'."
          },
          {
            titulo: "A Partícula SE: Apassivadora vs. Indeterminadora",
            explicacao: "Vende-se casa (sujeito: 'casa' -> singular) / Vendem-se casas (sujeito: 'casas' -> plural, voz passiva sintética). Já com verbos transitivos indiretos: 'Precisa-se de atendentes' (objeto indireto preposicionado, verbo fica sempre no singular)."
          },
          {
            titulo: "Concordância Nominal de Termos Especiais",
            explicacao: "Palavras como 'mesmo', 'próprio', 'incluso' e 'anexo' concordam com o nome a que se referem: 'As alunas mesmas organizaram o projeto', 'Seguem anexas as provas'. Já 'menos' é sempre invariável ('Havia menos pessoas hoje')."
          }
        ],
        timeline: [
          { data: "Passo 1", titulo: "Identificar o Sujeito da Oração", descricao: "Pergunte ao verbo 'quem?' ou 'o que?' pratica ou sofre a ação para achar o núcleo." },
          { data: "Passo 2", titulo: "Verificar se o Verbo é Impessoal", descricao: "Cheque se é 'haver' (sentido de existir) ou 'fazer' (tempo decorrido/clima)." },
          { data: "Passo 3", titulo: "Analisar a Transitividade com 'SE'", descricao: "Verbo transitivo direto aceita plural ('Alugam-se salas'); preposicionado fica no singular ('Confia-se em pessoas')." },
          { data: "Passo 4", titulo: "Conferir Adjetivos Posicionados", descricao: "Dois substantivos de gêneros diferentes levam o adjetivo ao masculino plural ou concordam com o mais próximo." }
        ],
        termosChave: [
          { termo: "Sujeito Composto", definicao: "Sujeito que possui mais de um núcleo; regra geral leva o verbo para o plural." },
          { termo: "Verbo Impessoal", definicao: "Verbo que não admite sujeito; conjuga-se exclusivamente na 3ª pessoa do singular." },
          { termo: "Expressões Partitivas", definicao: "Expressões como 'a maioria de', 'grande parte de'; admitem concordância no singular ou com o termo especificado no plural." }
        ],
        videoAula: {
          titulo: "Concordância Verbal e Nominal — Regras de Ouro",
          canal: "Gramática Prática IFSC",
          url: "https://www.youtube.com/results?search_query=concordancia+verbal+e+nominal+exercicios+resolvidos",
          duracao: "17 min"
        },
        questoes: [
          {
            id: "q-port-4",
            enunciado: "Assinale a alternativa que preenche CORRETAMENTE as lacunas: '_____ muitos anos que não _____ vagas suficientes para todos os candidatos.'",
            alternativas: [
              "Fazem / haviam",
              "Faz / havia",
              "Fazem / havia",
              "Faz / haviam"
            ],
            correta: 1,
            explicacao: "Tanto o verbo 'fazer' indicando tempo transcorrido quanto o verbo 'haver' no sentido de existir são impessoais e devem permanecer na 3ª pessoa do singular ('Faz muitos anos / havia vagas')."
          },
          {
            id: "q-port-5",
            enunciado: "De acordo com a norma-padrão da Língua Portuguesa, a concordância verbal está INCORRETA em:",
            alternativas: [
              "Vendem-se livros didáticos seminovos na biblioteca.",
              "Precisa-se de professores capacitados na região.",
              "Haviam várias pessoas aguardando o início do sorteio.",
              "Chegaram ontem os novos computadores do laboratório."
            ],
            correta: 2,
            explicacao: "O erro está em 'Haviam várias pessoas'. Como 'haver' tem sentido de 'existir', deve ficar no singular: 'Havia várias pessoas aguardando'."
          },
          {
            id: "q-port-6",
            enunciado: "Quanto à concordância nominal, assinale a opção inteiramente adequada à norma culta:",
            alternativas: [
              "Elas mesmas prepararam os relatórios de estágio.",
              "As inscrições enviadas seguem anexo ao formulário.",
              "Naquela sala havia menas carteiras do que o necessário.",
              "Os professores ficaram meio preocupados, mas elas ficaram meias aliviadas."
            ],
            correta: 0,
            explicacao: "'Mesmas' concorda em gênero e número com 'elas'. Em B, deveria ser 'anexas'; em C, 'menos' é invariável; em D, 'meio' como advérbio é invariável ('meio aliviadas')."
          }
        ]
      },
      {
        id: "port-classes-sintaxe",
        disciplina: "portugues",
        titulo: "Classes de Palavras e Sintaxe Básica",
        subtitulo: "Morfologia dos Substantivos, Verbos e Pronomes; Transitividade Verbal e Termos Essenciais da Oração",
        tempoLeitura: "14 min de estudo",
        resumo: "Compreensão da morfossintaxe: a classificação das palavras quanto à sua forma/função (morfologia) e o papel que desempenham na estrutura da oração (sintaxe).",
        contexto: "Na Língua Portuguesa existem 10 classes de palavras, sendo 6 variáveis (substantivo, adjetivo, artigo, numeral, pronome, verbo) e 4 invariáveis (advérbio, preposição, conjunção, interjeição). Entender a função morfológica é a base para dominar a sintaxe da oração: identificar o sujeito, o predicado, a transitividade do verbo (direto, indireto ou intransitivo) e seus complementos (objetos direto e indireto).",
        topicosChave: [
          {
            titulo: "Transitividade Verbal",
            explicacao: "Verbos Intransitivos (VI) têm sentido completo ('O bebê dormiu'). Transitivos Diretos (VTD) exigem objeto direto sem preposição obrigatória ('O aluno leu o livro'). Transitivos Indiretos (VTI) exigem objeto indireto com preposição ('O jovem precisa de orientação')."
          },
          {
            titulo: "Sujeito e seus Tipos",
            explicacao: "Simples (um único núcleo), Composto (dois ou mais núcleos), Oculto/Desinencial (identificado pela terminação do verbo), Indeterminado (verbo na 3ª pessoa do plural sem referência ou VTI + SE) e Inexistente (orações com verbos impessoais)."
          },
          {
            titulo: "Predicado Verbal, Nominal e Verbo-Nominal",
            explicacao: "Verbal: o núcleo é um verbo de ação. Nominal: o verbo é de ligação (ser, estar, parecer, etc.) e o núcleo é um predicativo do sujeito. Verbo-nominal: possui dois núcleos (um verbo de ação e um predicativo)."
          },
          {
            titulo: "Pronomes Relativos e o Uso de 'Cujo' e 'Onde'",
            explicacao: "'Onde' deve ser empregado exclusivamente para indicar lugar físico ('A escola onde estudei'). 'Cujo' expressa posse entre dois substantivos e nunca admite artigo posposto ('O autor cujo livro venceu o prêmio')."
          }
        ],
        timeline: [
          { data: "Fase 1", titulo: "Morfologia Isolada", descricao: "Análise da classe gramatical de cada vocábulo fora de contexto." },
          { data: "Fase 2", titulo: "Morfossintaxe na Frase", descricao: "Identificação da relação entre os vocábulos na construção do enunciado." },
          { data: "Fase 3", titulo: "Análise Sintática", descricao: "Determinação dos termos essenciais (sujeito/predicado) e integrantes (objetos)." },
          { data: "Fase 4", titulo: "Pontuação e Clareza", descricao: "Regra mestra: jamais separar por vírgula o sujeito de seu predicado, nem o verbo de seu objeto." }
        ],
        termosChave: [
          { termo: "Predicativo do Sujeito", definicao: "Termo que atribui uma característica, estado ou qualidade ao sujeito por intermédio de um verbo." },
          { termo: "Objeto Direto", definicao: "Complemento de um verbo transitivo direto, ligado sem preposição necessária." },
          { termo: "Verbo de Ligação", definicao: "Verbo que não expressa ação, mas serve de ponte entre o sujeito e sua característica (ser, estar, permanecer, etc.)." }
        ],
        videoAula: {
          titulo: "Transitividade Verbal e Análise Sintática sem Mistérios",
          canal: "IFSC Português Fácil",
          url: "https://www.youtube.com/results?search_query=transitividade+verbal+analise+sintatica+exercicios",
          duracao: "16 min"
        },
        questoes: [
          {
            id: "q-port-7",
            enunciado: "Na frase 'Os alunos do curso técnico entregaram os projetos ao professor', o termo 'ao professor' desempenha a função sintática de:",
            alternativas: [
              "Objeto indireto.",
              "Objeto direto.",
              "Agente da passiva.",
              "Adjunto adnominal do sujeito."
            ],
            correta: 0,
            explicacao: "O verbo 'entregar' é transitivo direto e indireto: quem entrega, entrega algo ('os projetos' = objeto direto) a alguém ('ao professor' = objeto indireto regido pela preposição 'a')."
          },
          {
            id: "q-port-8",
            enunciado: "Assinale a alternativa que contém uma oração com SUJEITO INDETERMINADO:",
            alternativas: [
              "Choveu torrencialmente durante toda a madrugada em Garopaba.",
              "Falaram muito mal daquele espetáculo teatral.",
              "Nós compramos os livros de matemática na feira.",
              "O professor e o coordenador chegaram cedo ao câmpus."
            ],
            correta: 1,
            explicacao: "O verbo 'falaram' está na 3ª pessoa do plural sem qualquer sujeito expresso anteriormente no texto, o que caracteriza a indeterminação do sujeito."
          },
          {
            id: "q-port-9",
            enunciado: "O pronome relativo 'ONDE' está empregado de acordo com a norma culta na seguinte opção:",
            alternativas: [
              "Visitei o museu onde estão expostas as peças históricas.",
              "Assistimos a um debate onde os candidatos discutiram temas polêmicos.",
              "Vivemos uma época onde a tecnologia domina as relações.",
              "Não gostei do momento onde ele tomou aquela decisão."
            ],
            correta: 0,
            explicacao: "O pronome 'onde' só pode ser utilizado para retomar lugares físicos e espaciais concretos, como 'o museu'. Para situações, tempos ou debates, deve-se usar 'em que', 'no qual', etc."
          }
        ]
      }
    ]
  },

  matematica: {
    nome: "Matemática",
    icone: "fa-calculator",
    cor: "var(--accent-purple)",
    topicos: [
      {
        id: "mat-razao-proporcao",
        disciplina: "matematica",
        titulo: "Razão, Proporção e Regra de Três",
        subtitulo: "Grandezas Diretamente e Inversamente Proporcionais, Escala e Regra de Três Composta",
        tempoLeitura: "15 min de estudo",
        resumo: "A proporcionalidade é a relação matemática fundamental que compara duas grandezas, permitindo resolver problemas do cotidiano como velocidade, densidade, consumo de combustível e divisão financeira.",
        contexto: "Nas avaliações do IFSC, problemas envolvendo regra de três e proporção representam a espinha dorsal da matemática aplicada. Uma grandeza é dita diretamente proporcional quando o aumento de uma acarreta o aumento da outra na mesma razão; é inversamente proporcional quando o aumento de uma provoca a redução proporcional da outra (como o número de trabalhadores em relação ao tempo para concluir uma obra).",
        topicosChave: [
          {
            titulo: "Razão e Proporção Básica",
            explicacao: "A razão entre dois números a e b (com b diferente de zero) é o quociente a/b. A proporção é a igualdade entre duas razões: a/b = c/d, cuja propriedade fundamental afirma que o produto dos extremos é igual ao produto dos meios (a * d = b * c)."
          },
          {
            titulo: "Grandezas Diretamente Proporcionais",
            explicacao: "Se 3 cadernos custam R$ 18, quanto custam 7 cadernos? Como mais cadernos custam mais dinheiro, montamos: 3/7 = 18/x -> 3x = 126 -> x = R$ 42."
          },
          {
            titulo: "Grandezas Inversamente Proporcionais",
            explicacao: "Se um carro a 60 km/h faz um trajeto em 4 horas, a 80 km/h levará quanto tempo? Mais velocidade significa MENOS tempo. Invertemos uma das razões: 60/80 = x/4 -> 80x = 240 -> x = 3 horas."
          },
          {
            titulo: "Escala Numérica em Mapas e Plantas",
            explicacao: "Escala = Distância no mapa (d) / Distância real (D), expressas na mesma unidade de medida. Uma escala 1:50.000 significa que 1 cm no desenho equivale a 50.000 cm (ou 500 metros) na realidade."
          }
        ],
        timeline: [
          { data: "Passo 1", titulo: "Tabela de Grandezas", descricao: "Construa colunas separando cada grandeza com seus respectivos valores conhecidos e a incógnita 'x'." },
          { data: "Passo 2", titulo: "Teste de Direção (Setas)", descricao: "Fixe a grandeza que contém o 'x' e compare com as demais: aumentando uma, a outra aumenta (direta) ou diminui (inversa)?" },
          { data: "Passo 3", titulo: "Montagem da Equação", descricao: "Mantenha a fração do 'x' e multiplique as demais, invertendo as frações que forem inversamente proporcionais." },
          { data: "Passo 4", titulo: "Simplificação e Solução", descricao: "Simplifique fatores comuns antes da multiplicação para agilizar os cálculos sem calculadora." }
        ],
        termosChave: [
          { termo: "Extremos e Meios", definicao: "Em a/b = c/d, 'a' e 'd' são os extremos, e 'b' e 'c' são os meios." },
          { termo: "Constante de Proporcionalidade", definicao: "Valor fixo k que resulta da divisão (direta) ou multiplicação (inversa) entre duas grandezas." },
          { termo: "Escala Gráfica", definicao: "Relação matemática entre as dimensões de uma representação cartográfica e as medidas reais do terreno." }
        ],
        videoAula: {
          titulo: "Regra de Três Simples e Composta Passo a Passo",
          canal: "Matemática Essencial IFSC",
          url: "https://www.youtube.com/results?search_query=regra+de+tres+simples+e+composta+exercicios",
          duracao: "18 min"
        },
        questoes: [
          {
            id: "q-mat-1",
            enunciado: "Um veículo percorre 240 km consumindo exatamente 20 litros de gasolina. Mantendo o mesmo padrão de consumo, quantos litros serão necessários para percorrer 360 km?",
            alternativas: [
              "25 litros.",
              "30 litros.",
              "35 litros.",
              "40 litros."
            ],
            correta: 1,
            explicacao: "Grandezas diretamente proporcionais: 240 / 360 = 20 / x. Multiplicando em cruz: 240 * x = 360 * 20 -> 240x = 7200 -> x = 7200 / 240 = 30 litros."
          },
          {
            id: "q-mat-2",
            enunciado: "Uma equipe com 6 operários conclui a pintura de um pavilhão escolar em 12 dias de trabalho. Se a equipe contasse com 9 operários trabalhando no mesmo ritmo, a obra seria finalizada em:",
            alternativas: [
              "8 dias.",
              "9 dias.",
              "15 dias.",
              "18 dias."
            ],
            correta: 0,
            explicacao: "Mais operários realizam o trabalho em MENOS tempo (inversamente proporcionais): 6 * 12 = 9 * x -> 72 = 9x -> x = 8 dias."
          },
          {
            id: "q-mat-3",
            enunciado: "Em uma planta arquitetônica desenhada na escala 1:100, o comprimento de uma sala de aula é representado por 7 centímetros. O comprimento real dessa sala é de:",
            alternativas: [
              "0,7 metros.",
              "7 metros.",
              "70 metros.",
              "700 metros."
            ],
            correta: 1,
            explicacao: "Na escala 1:100, 1 cm no desenho equivale a 100 cm na realidade. Logo, 7 cm equivalem a 7 * 100 = 700 cm. Convertendo para metros: 700 cm / 100 = 7 metros."
          }
        ]
      },
      {
        id: "mat-equacoes",
        disciplina: "matematica",
        titulo: "Equações de 1º e 2º Grau",
        subtitulo: "Tradução Algébrica, Fórmula de Bhaskara, Vértice da Parábola e Aplicações Práticas",
        tempoLeitura: "16 min de estudo",
        resumo: "As equações são sentenças matemáticas com incógnitas e sinal de igualdade. Resolver uma equação significa determinar o valor numérico que torna a igualdade verdadeira.",
        contexto: "Problemas do cotidiano frequentemente exigem transformar frases da língua portuguesa em linguagem matemática: 'o dobro de um número somado a cinco', 'o produto das idades de dois irmãos', etc. No exame do IFSC, as equações do 2º grau (ax² + bx + c = 0) são cruciais tanto na álgebra pura quanto no cálculo de áreas de terrenos e trajetórias parabólicas na física.",
        topicosChave: [
          {
            titulo: "Equações do 1º Grau",
            explicacao: "Têm a forma ax + b = 0 (com a diferente de zero). O método de resolução consiste em isolar a incógnita transpondo os termos com a operação inversa: 3x - 15 = 0 -> 3x = 15 -> x = 5."
          },
          {
            titulo: "Equações do 2º Grau e a Fórmula de Bhaskara",
            explicacao: "Forma geral: ax² + bx + c = 0. O discriminante é Delta = b² - 4ac. As raízes são dadas por x = (-b ± sqrt(Delta)) / (2a)."
          },
          {
            titulo: "Interpretação do Discriminante (Delta)",
            explicacao: "Se Delta > 0: a equação possui duas raízes reais e distintas. Se Delta = 0: a equação possui duas raízes reais e iguais (uma raiz dupla). Se Delta < 0: a equação não possui raízes reais."
          },
          {
            titulo: "Soma e Produto das Raízes (Relações de Girard)",
            explicacao: "Para encontrar as raízes mentalmente: Soma = -b/a e Produto = c/a. Por exemplo, em x² - 5x + 6 = 0, a soma é 5 e o produto é 6, logo as raízes são 2 e 3."
          }
        ],
        timeline: [
          { data: "Etapa 1", titulo: "Organização na Forma Canônica", descricao: "Reúna todos os termos de um lado da igualdade igualando a zero: ax² + bx + c = 0." },
          { data: "Etapa 2", titulo: "Identificação dos Coeficientes", descricao: "Defina claramente os valores de a, b e c prestando atenção máxima aos sinais negativos." },
          { data: "Etapa 3", titulo: "Cálculo do Discriminante", descricao: "Substitua na fórmula Delta = b² - 4ac e confira a existência de raízes reais." },
          { data: "Etapa 4", titulo: "Aplicação da Fórmula e Validação", descricao: "Calcule x1 e x2 e substitua no enunciado original para verificar se a resposta faz sentido prático." }
        ],
        termosChave: [
          { termo: "Incógnita", definicao: "Elemento desconhecido de uma equação que se pretende determinar." },
          { termo: "Raiz da Equação", definicao: "Valor que, ao substituir a incógnita, torna a sentença matemática verdadeira." },
          { termo: "Discriminante (Delta)", definicao: "Expressão algébrica (b² - 4ac) que determina a natureza e a quantidade de soluções reais da equação quadrática." }
        ],
        videoAula: {
          titulo: "Fórmula de Bhaskara e Resolução de Problemas",
          canal: "IFSC Matemática Interativa",
          url: "https://www.youtube.com/results?search_query=formula+de+bhaskara+exercicios+comentados",
          duracao: "19 min"
        },
        questoes: [
          {
            id: "q-mat-4",
            enunciado: "O dobro de um número adicionado a 18 é igual a 50. Esse número é:",
            alternativas: [
              "14.",
              "16.",
              "18.",
              "22."
            ],
            correta: 1,
            explicacao: "Montagem da equação do 1º grau: 2x + 18 = 50 -> 2x = 50 - 18 -> 2x = 32 -> x = 32 / 2 = 16."
          },
          {
            id: "q-mat-5",
            enunciado: "Quais são as raízes reais da equação do segundo grau x² - 7x + 10 = 0?",
            alternativas: [
              "x = 2 e x = 5",
              "x = -2 e x = -5",
              "x = 1 e x = 10",
              "x = 3 e x = 4"
            ],
            correta: 0,
            explicacao: "Delta = (-7)² - 4*(1)*(10) = 49 - 40 = 9. x = (-(-7) ± sqrt(9)) / 2 = (7 ± 3) / 2. Logo, x1 = (7+3)/2 = 5 e x2 = (7-3)/2 = 2."
          },
          {
            id: "q-mat-6",
            enunciado: "Uma equação quadrática possui discriminante Delta = 0. Isso significa que a equação:",
            alternativas: [
              "Não possui soluções no conjunto dos números reais.",
              "Possui infinitas soluções reais distintas.",
              "Possui exatamente duas soluções reais e iguais (raiz única).",
              "Possui obrigatoriamente raízes negativas."
            ],
            correta: 2,
            explicacao: "Quando o discriminante Delta é igual a zero, sqrt(Delta) = 0, de modo que somar ou subtrair zero resulta no mesmo valor (-b / 2a), gerando duas raízes reais e coincidentes."
          }
        ]
      },
      {
        id: "mat-geometria-plana",
        disciplina: "matematica",
        titulo: "Geometria Plana: Áreas e Perímetros",
        subtitulo: "Triângulos, Teorema de Pitágoras, Quadriláteros Notáveis e Circunferência",
        tempoLeitura: "15 min de estudo",
        resumo: "A geometria plana estuda figuras bidimensionais. O perímetro corresponde ao comprimento do contorno da figura, enquanto a área mede a extensão da superfície interna ocupada.",
        contexto: "O cálculo de áreas e perímetros é uma das habilidades mais cobradas nos processos seletivos do IFSC, aparecendo contextualizado no planejamento de reformas, pisos cerâmicos, cercamento de terrenos e estruturas esportivas. O domínio das fórmulas de áreas e a aplicação precisa do Teorema de Pitágoras em triângulos retângulos são essenciais para uma excelente pontuação.",
        topicosChave: [
          {
            titulo: "Teorema de Pitágoras",
            explicacao: "Em qualquer triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos: a² = b² + c². O triângulo clássico pitagórico tem lados com medidas 3, 4 e 5 (ou seus múltiplos: 6, 8, 10)."
          },
          {
            titulo: "Áreas dos Polígonos Fundamentais",
            explicacao: "Retângulo: A = base * altura. Quadrado: A = lado². Triângulo: A = (base * altura) / 2. Paralelogramo: A = base * altura. Trapézio: A = ((Base Maior + Base Menor) * altura) / 2. Losango: A = (Diagonal Maior * Diagonal Menor) / 2."
          },
          {
            titulo: "Círculo e Circunferência",
            explicacao: "Comprimento da circunferência (perímetro do contorno): C = 2 * pi * r. Área do círculo: A = pi * r². Em geral, as provas do IFSC solicitam adotar pi = 3 ou pi = 3,14."
          },
          {
            titulo: "Figuras Compostas",
            explicacao: "Para calcular a área de figuras irregulares (como a planta de uma casa), divida a forma complexa em figuras geométricas simples conhecidas (retângulos e triângulos) e some as áreas individuais."
          }
        ],
        timeline: [
          { data: "Fórmula 1", titulo: "Perímetro (P)", descricao: "Soma de todos os lados externos da figura geométrica (unidades: m, cm)." },
          { data: "Fórmula 2", titulo: "Área do Triângulo", descricao: "A = (b * h) / 2 (unidades de área: m², cm²)." },
          { data: "Fórmula 3", titulo: "Pitágoras", descricao: "a² = b² + c² para encontrar a hipotenusa ou catetos em triângulos de 90°." },
          { data: "Fórmula 4", titulo: "Área do Círculo", descricao: "A = pi * r², onde r é o raio (metade do diâmetro)." }
        ],
        termosChave: [
          { termo: "Perímetro", definicao: "Medida linear do contorno exterior de uma figura geométrica fechada." },
          { termo: "Hipotenusa", definicao: "O maior lado de um triângulo retângulo, posicionado oposto ao ângulo reto (90°)." },
          { termo: "Raio", definicao: "Distância constante do centro da circunferência até qualquer ponto de sua borda." }
        ],
        videoAula: {
          titulo: "Geometria Plana: Áreas, Perímetros e Pitágoras",
          canal: "Canal Exatas IFSC",
          url: "https://www.youtube.com/results?search_query=geometria+plana+areas+e+perimetros+exercicios+ifsc",
          duracao: "21 min"
        },
        questoes: [
          {
            id: "q-mat-7",
            enunciado: "Um terreno retangular possui 25 metros de comprimento por 12 metros de largura. A área total e o perímetro desse terreno são, respectivamente:",
            alternativas: [
              "300 m² e 74 m.",
              "300 m² e 37 m.",
              "150 m² e 74 m.",
              "600 m² e 148 m."
            ],
            correta: 0,
            explicacao: "Área = 25 * 12 = 300 m². Perímetro = 2 * (25 + 12) = 2 * 37 = 74 metros."
          },
          {
            id: "q-mat-8",
            enunciado: "Em um triângulo retângulo, os catetos medem 6 cm e 8 cm. Qual é a medida da hipotenusa desse triângulo?",
            alternativas: [
              "9 cm.",
              "10 cm.",
              "12 cm.",
              "14 cm."
            ],
            correta: 1,
            explicacao: "Pelo Teorema de Pitágoras: a² = b² + c² -> a² = 6² + 8² = 36 + 64 = 100 -> a = sqrt(100) = 10 cm."
          },
          {
            id: "q-mat-9",
            enunciado: "Uma praça circular tem raio de 10 metros. Adotando pi = 3,14, a área dessa praça é de:",
            alternativas: [
              "31,4 m².",
              "62,8 m².",
              "314 m².",
              "628 m²."
            ],
            correta: 2,
            explicacao: "Área do círculo = pi * r² = 3,14 * (10)² = 3,14 * 100 = 314 m²."
          }
        ]
      }
    ]
  },

  ciencias: {
    nome: "Ciências",
    icone: "fa-dna",
    cor: "var(--accent-blue)",
    topicos: [
      {
        id: "cien-celula",
        disciplina: "ciencias",
        titulo: "Citologia e Organização Celular",
        subtitulo: "Células Procariontes e Eucariontes, Organelas Citoplasmáticas e Divisão Celular",
        tempoLeitura: "14 min de estudo",
        resumo: "A citologia estuda a célula como a unidade morfofisiológica básica de todos os seres vivos, suas estruturas internas especializadas e os mecanismos de reprodução celular.",
        contexto: "De acordo com a Teoria Celular, todos os organismos são formados por células. Saber diferenciar organismos procariontes (bactérias, sem membrana nuclear) de eucariontes (animais, plantas, fungos, dotados de núcleo delimitado pela carioteca) e compreender o papel vital de cada organela celular constitui um dos tópicos mais frequentes e decisivos nas questões de Ciências da Natureza do IFSC.",
        topicosChave: [
          {
            titulo: "Células Procariontes vs. Eucariontes",
            explicacao: "Procariontes: ausência de núcleo delimitado; material genético disperso no nucleoide; não possuem organelas membranosas (apenas ribossomos). Eucariontes: núcleo verdadeiro com carioteca e presença de organelas como mitocôndrias, complexo golgiense e retículo endoplasmático."
          },
          {
            titulo: "Mitocôndrias e Respiração Celular",
            explicacao: "As mitocôndrias são as usinas energéticas da célula, responsáveis por oxidar moléculas de glicose na presença de oxigênio para produzir ATP (adenosina trifosfato), molécula que armazena energia química."
          },
          {
            titulo: "Cloroplastos e Fotossíntese Vegetal",
            explicacao: "Presentes exclusivamente nas células vegetais e algas, os cloroplastos contêm clorofila, pigmento que capta energia luminosa para converter gás carbônico e água em glicose e oxigênio."
          },
          {
            titulo: "Mitose e Meiose",
            explicacao: "Mitose: divisão em que uma célula-mãe diploide gera duas células-filhas geneticamente idênticas (usada no crescimento tecidual e cicatrização). Meiose: divisão reducional que gera 4 células haploides com metade dos cromossomos (formação de gametas: espermatozoides e óvulos)."
          }
        ],
        timeline: [
          { data: "1665", titulo: "Descoberta da Célula", descricao: "Robert Hooke observa pequenos compartimentos em cortiça e cunha o termo 'célula'." },
          { data: "1838", titulo: "Teoria Celular", descricao: "Schleiden e Schwann postulam que todos os seres vivos são compostos por células." },
          { data: "Estrutura", titulo: "Organelas Membranosas", descricao: "Complexo de Golgi (secreção), Lisossomos (digestão celular), Retículo (transporte e síntese)." },
          { data: "Divisão", titulo: "Mitose vs. Meiose", descricao: "Mitose gera clones corporais; meiose assegura variabilidade genética na reprodução sexuada." }
        ],
        termosChave: [
          { termo: "ATP", definicao: "Trifosfato de adenosina, a moeda energética primária utilizada para as atividades metabólicas da célula." },
          { termo: "Carioteca", definicao: "Dupla membrana com poros que delimita e protege o material genético (DNA) no interior do núcleo eucarionte." },
          { termo: "Ribossomo", definicao: "Estrutura celular responsável pela síntese de proteínas a partir da leitura do RNA mensageiro." }
        ],
        videoAula: {
          titulo: "Citologia: Células e Organelas em Foco",
          canal: "Ciências da Natureza IFSC",
          url: "https://www.youtube.com/results?search_query=citologia+organelas+celulares+resumo+enem",
          duracao: "16 min"
        },
        questoes: [
          {
            id: "q-cien-1",
            enunciado: "Qual das seguintes estruturas celulares está presente tanto em células procariontes (como bactérias) quanto em células eucariontes (animais e vegetais)?",
            alternativas: [
              "Mitocôndrias.",
              "Ribossomos.",
              "Carioteca (envoltório nuclear).",
              "Retículo endoplasmático rugoso."
            ],
            correta: 1,
            explicacao: "Os ribossomos são estruturas não membranosas encarregadas da síntese de proteínas e são comuns a todos os tipos de células, incluindo as procariontes."
          },
          {
            id: "q-cien-2",
            enunciado: "A organela celular responsável pela produção de energia química na forma de ATP através do processo de respiração celular é o(a):",
            alternativas: [
              "Mitocôndria.",
              "Lisossomo.",
              "Complexo Golgiense.",
              "Centríolo."
            ],
            correta: 0,
            explicacao: "As mitocôndrias são conhecidas como as 'usinas de força' da célula, onde ocorre a respiração celular aeróbia geradora de ATP."
          },
          {
            id: "q-cien-3",
            enunciado: "O tipo de divisão celular responsável pela formação de gametas humanos (óvulos e espermatozoides), reduzindo o número de cromossomos pela metade, é denominado:",
            alternativas: [
              "Mitose.",
              "Meiose.",
              "Clonagem celular.",
              "Bipartição simples."
            ],
            correta: 1,
            explicacao: "A meiose é o processo de divisão reducional que produz células haploides (n = 23 cromossomos nos seres humanos) com variabilidade genética (crossing-over)."
          }
        ]
      },
      {
        id: "cien-corpo-humano",
        disciplina: "ciencias",
        titulo: "Sistemas do Corpo Humano e Homeostase",
        subtitulo: "Integração Fisiológica dos Sistemas Circulatório, Respiratório, Digestório e Nervoso",
        tempoLeitura: "16 min de estudo",
        resumo: "O corpo humano é um organismo multicelular altamente coordenado, no qual diferentes sistemas de órgãos atuam em sinergia para garantir a homeostase (equilíbrio interno estável).",
        contexto: "O estudo do corpo humano para o processo seletivo do IFSC enfatiza a integração funcional entre os sistemas: os nutrientes absorvidos pelo sistema digestório e o oxigênio captado pelos alvéolos pulmonares são transportados pelo sangue até cada célula do corpo, enquanto os resíduos metabólicos são eliminados pelo sistema excretor, tudo coordenado pelo sistema nervoso.",
        topicosChave: [
          {
            titulo: "Sistema Circulatório e Coração",
            explicacao: "O coração humano possui quatro cavidades: dois átrios e dois ventrículos. O lado direito bombeia sangue venoso (pobre em O2) para os pulmões (pequena circulação), enquanto o lado esquerdo bombeia sangue arterial (rico em O2) para todo o corpo (grande circulação)."
          },
          {
            titulo: "Sistema Respiratório e Hematose",
            explicacao: "A hematose é a troca gasosa que ocorre nos alvéolos pulmonares: o oxigênio do ar passa para o sangue nas hemácias (ligando-se à hemoglobina) e o gás carbônico do sangue passa para os pulmões para ser expirado."
          },
          {
            titulo: "Sistema Digestório e Absorção",
            explicacao: "A digestão começa na boca com a amilase salivar (ptialina); no estômago, o suco gástrico (com ácido clorídrico e pepsina) digere proteínas; no intestino delgado (duodeno), a bile emulsiona gorduras e ocorre a absorção dos nutrientes nas vilosidades."
          },
          {
            titulo: "Sistema Nervoso Central e Periférico",
            explicacao: "Composto pelo encéfalo e medula espinhal (SNC) e nervos/gânglios (SNP). O neurônio é a unidade funcional, transmitindo impulsos elétricos e químicos através de sinapses mediadas por neurotransmissores."
          }
        ],
        timeline: [
          { data: "Digestão", titulo: "Boca -> Estômago -> Intestino", descricao: "Quebra mecânica e química de macromoléculas em nutrientes absorvíveis." },
          { data: "Respiração", titulo: "Troca Gasosa Alveolar", descricao: "Captação de O2 e liberação de CO2 pela diferença de pressão parcial." },
          { data: "Circulação", titulo: "Grande e Pequena Circulação", descricao: "Distribuição ininterrupta de oxigênio, hormônios e nutrientes pelos capilares." },
          { data: "Coordenação", titulo: "Impulsos Nervosos e Reflexos", descricao: "Comunicação em milissegundos para regulação dos batimentos e respostas a estímulos." }
        ],
        termosChave: [
          { termo: "Homeostase", definicao: "Estado de equilíbrio dinâmico das condições fisiológicas internas do organismo." },
          { termo: "Hematose", definicao: "Transformação do sangue venoso em arterial nos alvéolos pulmonares por difusão de gases." },
          { termo: "Sinapse", definicao: "Região de comunicação funcional entre dois neurônios ou entre um neurônio e uma célula muscular." }
        ],
        videoAula: {
          titulo: "Sistemas do Corpo Humano: Da Digestão à Circulação",
          canal: "Biologia IFSC Garopaba",
          url: "https://www.youtube.com/results?search_query=sistemas+do+corpo+humano+resumo+ciencias",
          duracao: "19 min"
        },
        questoes: [
          {
            id: "q-cien-4",
            enunciado: "O processo biológico de trocas gasosas que ocorre nos alvéolos pulmonares, em que o sangue venoso é oxigenado e se torna sangue arterial, chama-se:",
            alternativas: [
              "Fagocitose.",
              "Hematose.",
              "Osmose reversa.",
              "Peristaltismo."
            ],
            correta: 1,
            explicacao: "A hematose é o processo fisiológico de oxigenação do sangue nos capilares dos alvéolos pulmonares por difusão."
          },
          {
            id: "q-cien-5",
            enunciado: "No sistema cardiovascular humano, o vaso sanguíneo calibroso que conduz o sangue arterial oxigenado do ventrículo esquerdo do coração para todos os tecidos do corpo é a:",
            alternativas: [
              "Veia cava superior.",
              "Artéria pulmonar.",
              "Artéria aorta.",
              "Veia pulmonar."
            ],
            correta: 2,
            explicacao: "A artéria aorta é a principal e maior artéria do corpo, encarregada de distribuir o sangue rico em oxigênio saído do ventrículo esquerdo para todo o organismo."
          },
          {
            id: "q-cien-6",
            enunciado: "A bile, substância produzida pelo fígado e armazenada na vesícula biliar, desempenha papel essencial na digestão ao:",
            alternativas: [
              "Digestionar os carboidratos complexos por meio de enzimas ácidas.",
              "Emulsionar as gorduras (lipídios), funcionando como um detergente biológico.",
              "Neutralizar a absorção de vitaminas lipossolúveis no estômago.",
              "Produzir insulina para controlar a glicose plasmática."
            ],
            correta: 1,
            explicacao: "A bile não possui enzimas digestivas próprias, mas atua como um emulsificante (detergente), fragmentando as grandes gotas de gordura em gotículas menores para facilitar a ação das lípases pancreáticas."
          }
        ]
      },
      {
        id: "cien-ecologia",
        disciplina: "ciencias",
        titulo: "Ecologia e Sustentabilidade",
        subtitulo: "Níveis de Organização, Cadeias Tróficas, Relações Ecológicas e Ciclos Biogeoquímicos",
        tempoLeitura: "15 min de estudo",
        resumo: "A ecologia analisa as interações entre os seres vivos e o ambiente em que habitam, a transferência de matéria e energia e a conservação dos ecossistemas.",
        contexto: "Em um município litorâneo com rica biodiversidade como Garopaba (com dunas, lagoas, costões rochosos e áreas de Mata Atlântica), as questões ambientais são fundamentais. Os editais do IFSC cobram com frequência o fluxo unidirecional de energia nas cadeias alimentares, o impacto da poluição e as relações ecológicas harmônicas e desarmônicas.",
        topicosChave: [
          {
            titulo: "Cadeia e Teia Alimentar",
            explicacao: "Produtores (autótrofos que produzem sua própria biomassa via fotossíntese) -> Consumidores Primários (herbívoros) -> Consumidores Secundários/Terciários (carnívoros) -> Decompositores (fungos e bactérias que reciclam matéria orgânica). O fluxo de energia é unidirecional e decresce a cada nível trófico."
          },
          {
            titulo: "Relações Ecológicas Harmônicas",
            explicacao: "Nenhum participante sai prejudicado. Sociedade (indivíduos da mesma espécie cooperam sem ligação anatômica, como formigas), Mutualismo (relação interativa obrigatória e benéfica para ambos, como líquens) e Comensalismo (um se beneficia sem prejudicar o outro)."
          },
          {
            titulo: "Relações Ecológicas Desarmônicas",
            explicacao: "Pelo menos um participante sofre prejuízo. Predatismo (um caça e consome o outro), Parasitismo (o parasita vive às custas do hospedeiro), Competição (disputa por recursos limitados como água, alimento ou luz)."
          },
          {
            titulo: "Ciclo da Água e do Carbono",
            explicacao: "O ciclo da água envolve evaporação, condensação, precipitação e infiltração. O ciclo do carbono envolve a fixação do CO2 pelos produtores fotossintetizantes e sua liberação pela respiração celular, decomposição e queima de combustíveis fósseis."
          }
        ],
        timeline: [
          { data: "Nível 1", titulo: "Indivíduo & População", descricao: "Conjunto de seres da mesma espécie que habitam uma determinada área geográfica." },
          { data: "Nível 2", titulo: "Comunidade & Ecossistema", descricao: "Interação de todas as populações (biocenose) com os fatores abióticos (luz, água, solo)." },
          { data: "Nível 3", titulo: "Fluxo Energético", descricao: "Apenas cerca de 10% da energia útil é transferida ao próximo nível trófico." },
          { data: "Nível 4", titulo: "Ameaças Ambientais", descricao: "Efeito estufa agravado, biomagnificação trófica por metais pesados e desmatamento." }
        ],
        termosChave: [
          { termo: "Produtores", definicao: "Seres autótrofos capazes de converter energia inorgânica em matéria orgânica utilizável." },
          { termo: "Mutualismo", definicao: "Relação ecológica interespecífica na qual ambas as espécies se beneficiam mutuamente de forma indispensável." },
          { termo: "Decompositores", definicao: "Organismos responsáveis pela degradação de restos orgânicos e reciclagem de nutrientes minerais no solo." }
        ],
        videoAula: {
          titulo: "Ecologia Básica: Cadeias Alimentares e Relações Ecológicas",
          canal: "Mundo Ecológico IFSC",
          url: "https://www.youtube.com/results?search_query=ecologia+cadeia+alimentar+relacoes+ecologicas+resumo",
          duracao: "17 min"
        },
        questoes: [
          {
            id: "q-cien-7",
            enunciado: "Ao longo de uma cadeia alimentar típica (Planta -> Gafanhoto -> Sapo -> Cobra), o que acontece com a quantidade de energia utilizável disponível a cada nível trófico?",
            alternativas: [
              "Permanece exatamente constante de ponta a ponta.",
              "Aumenta progressivamente até o predador de topo.",
              "Diminui continuamente à medida que passa de um nível trófico para o seguinte.",
              "Transforma-se integralmente em oxigênio na respiração."
            ],
            correta: 2,
            explicacao: "O fluxo de energia é unidirecional e decrescente, pois grande parte da energia é dissipada na forma de calor metabólico em cada nível trófico."
          },
          {
            id: "q-cien-8",
            enunciado: "A associação entre fungos e algas que formam os líquens, na qual ambos os seres se beneficiam e não conseguem viver isolados sob as mesmas condições, é classificada como:",
            alternativas: [
              "Mutualismo.",
              "Comensalismo.",
              "Inquilinismo.",
              "Parasitismo."
            ],
            correta: 0,
            explicacao: "O mutualismo é uma relação ecológica harmônica interespecífica obrigatória na qual os dois parceiros obtêm vantagens recíprocas essenciais à sobrevivência."
          },
          {
            id: "q-cien-9",
            enunciado: "O fenômeno biológico de acúmulo progressivo de poluentes não biodegradáveis (como agrotóxicos e mercúrio) nos tecidos dos organismos ao longo dos níveis tróficos mais altos de uma cadeia é chamado de:",
            alternativas: [
              "Eutrofização.",
              "Biomagnificação trófica (ou magnificação trófica).",
              "Sucessão ecológica primária.",
              "Fototropismo vegetal."
            ],
            correta: 1,
            explicacao: "A biomagnificação trófica ocorre quando substâncias tóxicas persistentes se concentram em teores cada vez maiores nos predadores do topo da cadeia alimentar."
          }
        ]
      }
    ]
  },

  geografia: {
    nome: "Geografia",
    icone: "fa-earth-americas",
    cor: "var(--accent-cyan)",
    topicos: [
      {
        id: "geo-regioes-brasil",
        disciplina: "geografia",
        titulo: "Divisão Regional do Brasil e Macrorregiões",
        subtitulo: "Critérios do IBGE, Complexos Geoeconômicos e Diversidade Regional Brasileira",
        tempoLeitura: "14 min de estudo",
        resumo: "Estudo das formas de regionalização do território brasileiro, suas particularidades demográficas, econômicas e socioculturais nas cinco macrorregiões oficiais e nos três complexos geoeconômicos.",
        contexto: "O Brasil possui mais de 8,5 milhões de km² de extensão territorial continental. Para facilitar a administração pública e o planejamento estatístico, o Instituto Brasileiro de Geografia e Estatística (IBGE) dividiu o país em cinco macrorregiões (Norte, Nordeste, Centro-Oeste, Sudeste e Sul), respeitando os limites das fronteiras estaduais. Paralelamente, o geógrafo Pedro Pinchas Geiger propôs a divisão em três Complexos Geoeconômicos (Amazônia, Nordeste e Centro-Sul), com foco nos processos socioeconômicos reais.",
        topicosChave: [
          {
            titulo: "Divisão Oficial do IBGE (1970/1988)",
            explicacao: "Baseia-se em critérios físico-naturais e socioeconômicos, sem cortar fronteiras estaduais. Cinco regiões: Norte (maior em extensão, domínio amazônico), Nordeste (subdividido em Zona da Mata, Agreste, Sertão e Meio-Norte), Centro-Oeste (expansão do agronegócio), Sudeste (polo industrial e financeiro) e Sul (forte herança agroindustrial e altos índices socioeconômicos)."
          },
          {
            titulo: "Complexos Geoeconômicos de Geiger (1967)",
            explicacao: "Ignora os limites estaduais e foca no dinamismo econômico histórico: Centro-Sul (área nuclear da economia e indústria, integrando Sul, Sudeste e sul de Goiás/MS), Nordeste (região de repulsão demográfica e desafios estruturais) e Amazônia (fronteira de expansão de recursos e baixa densidade demográfica)."
          },
          {
            titulo: "A Região Sul e Santa Catarina no Cenário Nacional",
            explicacao: "Composta por PR, SC e RS. Caracteriza-se por relevo com planaltos e serras, clima subtropical, colonização europeia diversificada (alemães, italianos, açorianos no litoral), elevado Índice de Desenvolvimento Humano (IDH) e forte setor agropecuário e de serviços tecnológicos."
          },
          {
            titulo: "Demografia e Transição Demográfica",
            explicacao: "O Brasil vivencia a desaceleração do crescimento populacional, queda na taxa de fecundidade e rápido envelhecimento demográfico, exigindo reformas nas políticas públicas de saúde e previdência social."
          }
        ],
        timeline: [
          { data: "1942", titulo: "Primeira Regionalização IBGE", descricao: "Criação das primeiras delimitações territoriais para fins estatísticos." },
          { data: "1967", titulo: "Complexos de Geiger", descricao: "Proposta dos três blocos geoeconômicos (Amazônia, Nordeste e Centro-Sul)." },
          { data: "1988", titulo: "Constituição Cidadã", descricao: "Criação do Estado do Tocantins (integrado à Região Norte) e configuração atual do IBGE." },
          { data: "Atualidade", titulo: "Transição Demográfica", descricao: "Aumento da população idosa e estabilização da taxa de natalidade no Censo 2022." }
        ],
        termosChave: [
          { termo: "Macrorregião", definicao: "Grande divisão territorial instituída pelo IBGE para fins de planejamento e coleta estatística nacional." },
          { termo: "Transição Demográfica", definicao: "Processo de passagem de altas taxas de natalidade/mortalidade para baixas taxas de natalidade/mortalidade." },
          { termo: "Complexo Geoeconômico", definicao: "Divisão territorial não oficial proposta por Geiger que prioriza critérios histórico-econômicos em vez dos limites estaduais." }
        ],
        videoAula: {
          titulo: "Regionalização do Brasil: IBGE vs. Geoeconômica",
          canal: "Geografia em Ação IFSC",
          url: "https://www.youtube.com/results?search_query=divisao+regional+do+brasil+ibge+geoeconomica",
          duracao: "16 min"
        },
        questoes: [
          {
            id: "q-geo-1",
            enunciado: "Qual critério fundamental diferencia a divisão regional do IBGE (cinco macrorregiões) da divisão em Complexos Geoeconômicos elaborada por Pedro Pinchas Geiger?",
            alternativas: [
              "A divisão do IBGE respeita rigorosamente os limites das fronteiras políticas dos estados, enquanto a geoeconômica não os respeita.",
              "A divisão de Geiger considera unicamente aspectos da vegetação nativa e do clima.",
              "O IBGE divide o país em apenas duas regiões: Litoral e Interior.",
              "A divisão geoeconômica foi criada exclusivamente para determinar as fusões municipais da Amazônia."
            ],
            correta: 0,
            explicacao: "O IBGE respeita os limites político-administrativos dos estados da federação. A divisão geoeconômica de Geiger corta estados como Minas Gerais, Tocantins e Maranhão de acordo com suas características socioeconômicas reais."
          },
          {
            id: "q-geo-2",
            enunciado: "O estado de Santa Catarina pertence à Região Sul do Brasil e apresenta como característica marcante de seu litoral, como na região de Garopaba:",
            alternativas: [
              "Predomínio de clima semiárido com escassez perene de chuvas.",
              "Herança histórica de colonização litorânea açoriana e economia ligada ao turismo e à pesca.",
              "Ausência total de Mata Atlântica e presença exclusiva de savanas secas.",
              "Extração de petróleo em larga escala em áreas de caatinga litorânea."
            ],
            correta: 1,
            explicacao: "O litoral catarinense possui forte traço cultural da imigração de colonos açorianos (século XVIII), além de desenvolver intensamente a economia do turismo, serviços e pesca artesanal e industrial."
          },
          {
            id: "q-geo-3",
            enunciado: "A sub-região do Nordeste brasileiro caracterizada pela transição entre o Sertão semiárido e a Floresta Amazônica, compreendendo os estados do Maranhão e parte do Piauí, é o:",
            alternativas: [
              "Zona da Mata.",
              "Agreste.",
              "Meio-Norte.",
              "Polígono das Secas."
            ],
            correta: 2,
            explicacao: "O Meio-Norte é a sub-região de transição marcada pelo extrativismo do babaçu e da carnaúba, fazendo a ponte entre o clima semiárido sertanejo e a umidade amazônica."
          }
        ]
      },
      {
        id: "geo-climas-biomas",
        disciplina: "geografia",
        titulo: "Climas e Biomas Brasileiros",
        subtitulo: "Domínios Morfoclimáticos, Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa e Pantanal",
        tempoLeitura: "15 min de estudo",
        resumo: "Análise da diversidade ecológica brasileira, caracterizada por seis grandes biomas continentais e diferentes tipos climáticos influenciados por massas de ar e relevo.",
        contexto: "O território brasileiro localiza-se majoritariamente na zona intertropical do globo, resultando no predomínio de climas quentes. No entanto, na Região Sul atua o clima subtropical, com chuvas bem distribuídas e as quatro estações do ano bem delineadas. Conhecer as características da vegetação nativa, o regime de chuvas e as pressões antrópicas sobre os biomas é tema cativo nos vestibulares e seleções do IFSC.",
        topicosChave: [
          {
            titulo: "Os Seis Grandes Biomas",
            explicacao: "Amazônia (maior floresta tropical pluvial do mundo, biodiversidade ímpar), Cerrado (a 'savana brasileira', berço das bacias hidrográficas, vegetação com cascas grossas e raízes profundas), Mata Atlântica (floresta costeira exuberante com alto endemismo e grande devastação histórica), Caatinga (único bioma exclusivamente brasileiro, vegetação xerófila adaptada à seca), Pantanal (maior planície inundável do planeta) e Pampa (campos sulinos com gramíneas típicas do Rio Grande do Sul)."
          },
          {
            titulo: "Climas do Brasil",
            explicacao: "Equatorial (quente e superúmido, baixa amplitude térmica), Tropical Típico (estações alternadas: verão chuvoso e inverno seco), Tropical Semiárido (temperaturas elevadas e escassez pluviométrica com chuvas irregulares), Tropical de Altitude (temperaturas mais amenas nas serras do Sudeste) e Subtropical (clima do Sul, com invernos frios e geadas)."
          },
          {
            titulo: "Massas de Ar Atuantes",
            explicacao: "Massa Polar Atlântica (mPa, fria e responsável pelas frentes frias e geadas no Sul), Massa Equatorial Continental (mEc, quente e muito úmida, originada na Amazônia e geradora dos 'rios voadores'), e Massa Tropical Atlântica (mTa, quente e úmida no litoral)."
          },
          {
            titulo: "Devastação e 'Hotspots' de Biodiversidade",
            explicacao: "A Mata Atlântica e o Cerrado são classificados como 'hotspots' mundiais, áreas com extraordinária riqueza biológica e endemismo, mas que já perderam mais de 70% de sua cobertura vegetal original para a agropecuária e expansão urbana."
          }
        ],
        timeline: [
          { data: "Classificação", titulo: "Domínios de Aziz Ab'Sáber", descricao: "Organização do território em domínios morfoclimáticos e faixas de transição." },
          { data: "Histórico", titulo: "Devastação da Mata Atlântica", descricao: "Ciclos econômicos do pau-brasil, cana, ouro e café reduziram a mata original a fragmentos." },
          { data: "Avanço", titulo: "Fronteira Agrícola no Cerrado", descricao: "A partir dos anos 1970, a correção do solo com calcário expandiu a soja e o milho no Centro-Oeste." },
          { data: "Desafio", titulo: "Preservação Costeira", descricao: "Proteção das áreas de restinga e manguezais em Santa Catarina diante da especulação imobiliária." }
        ],
        termosChave: [
          { termo: "Vegetação Xerófila", definicao: "Vegetação dotada de folhas reduzidas ou espinhos e caules suculentos adaptada a solos secos e aridez climática." },
          { termo: "Hotspot", definicao: "Bioma de altíssima biodiversidade sob grave ameaça de extinção com grande perda de habitat original." },
          { termo: "Amplitude Térmica", definicao: "Diferença numérica entre a temperatura máxima e a mínima registrada em determinado intervalo de tempo." }
        ],
        videoAula: {
          titulo: "Biomas e Climas do Brasil Explicados",
          canal: "Geografia IFSC Dinâmica",
          url: "https://www.youtube.com/results?search_query=biomas+brasileiros+climas+enem+resumo",
          duracao: "18 min"
        },
        questoes: [
          {
            id: "q-geo-4",
            enunciado: "O bioma brasileiro reconhecido internacionalmente como a maior planície de inundação contínua do planeta, com fauna abundante de jacarés, capivaras e aves aquáticas, é o:",
            alternativas: [
              "Pampa.",
              "Pantanal.",
              "Cerrado.",
              "Caatinga."
            ],
            correta: 1,
            explicacao: "O Pantanal Mato-Grossense é a maior planície alagável do planeta, regulada pelo ciclo hidrológico de cheias e vazantes dos afluentes do rio Paraguai."
          },
          {
            id: "q-geo-5",
            enunciado: "A vegetação xerófila, com cactos (como o mandacaru), arbustos espinhosos e perda de folhas durante o longo período de estiagem, é típica do bioma:",
            alternativas: [
              "Mata Atlântica.",
              "Amazônia.",
              "Caatinga.",
              "Pampa."
            ],
            correta: 2,
            explicacao: "A Caatinga (que significa 'mata branca' em tupi) possui flora xerófila perfeitamente adaptada ao déficit hídrico e às altas temperaturas do semiárido nordestino."
          },
          {
            id: "q-geo-6",
            enunciado: "O clima característico da Região Sul do Brasil (incluindo o estado de Santa Catarina), marcado por temperaturas médias anuais mais baixas e chuvas distribuídas ao longo de todos os meses, é o:",
            alternativas: [
              "Equatorial úmido.",
              "Tropical semiárido.",
              "Subtropical.",
              "Tropical semiúmido."
            ],
            correta: 2,
            explicacao: "O clima subtropical atua ao sul do Trópico de Capricórnio, caracterizado por chuvas regulares e bem distribuídas durante o ano e estações do ano bem diferenciadas."
          }
        ]
      },
      {
        id: "geo-urbanizacao",
        disciplina: "geografia",
        titulo: "Urbanização e Industrialização no Brasil",
        subtitulo: "Do Êxodo Rural à Formação das Metrópoles, Segregação Socioespacial e Cidades Sustentáveis",
        tempoLeitura: "14 min de estudo",
        resumo: "Compreensão da rápida transição do Brasil de país rural para urbano a partir da década de 1950, impulsionada pelo avanço industrial, e os consequentes desafios socioambientais nas metrópoles.",
        contexto: "Até a primeira metade do século XX, a maioria da população brasileira vivia e trabalhava no campo. Com a industrialização promovida por Vargas e Juscelino Kubitschek, associada à modernização conservadora do campo (mecanização agrícola), milhões de trabalhadores migraram para as cidades no fenômeno do êxodo rural. Hoje, mais de 85% dos brasileiros vivem em cidades, gerando desafios graves de moradia, mobilidade e saneamento básico.",
        topicosChave: [
          {
            titulo: "A Marcha da Urbanização Brasileira",
            explicacao: "A década de 1970 marcou a virada estatística na qual a população urbana superou a rural. O processo ocorreu de forma acelerada e desordenada ('macrocefalia urbana'), concentrando serviços e oportunidades nas grandes metrópoles, especialmente no Sudeste (São Paulo e Rio de Janeiro)."
          },
          {
            titulo: "Hierarquia Urbana e Conurbação",
            explicacao: "A conurbação ocorre quando a mancha urbana de dois ou mais municípios limítrofes se une fisicamente em função do crescimento contínuo. A hierarquia urbana estabelece a influência das cidades: vilas -> cidades médias -> capitais regionais -> metrópoles nacionais e globais."
          },
          {
            titulo: "Problemas Socioespaciais Urbanos",
            explicacao: "Favelização e déficit habitacional; especulação imobiliária expulsando as populações de baixa renda para as periferias sem infraestrutura (segregação socioespacial); enchentes urbanas provocadas pela impermeabilização do solo; e crises de mobilidade com saturação do trânsito individual."
          },
          {
            titulo: "Descentralização Industrial Recente",
            explicacao: "A partir do final do século XX, muitas indústrias deixaram os grandes centros metropolitanos (devido a impostos altos, congestionamentos e custos trabalhistas) em direção a cidades médias do interior e da Região Sul (guerra fiscal e busca de qualidade de vida)."
          }
        ],
        timeline: [
          { data: "1930-1950", titulo: "Industrialização de Base", descricao: "Concentração das primeiras grandes indústrias no eixo São Paulo-Rio de Janeiro." },
          { data: "1956-1961", titulo: "Plano de Metas (JK)", descricao: "Indústria automobilística, rodoviarismo e construção de Brasília." },
          { data: "1970", titulo: "Virada Demográfica Urbana", descricao: "Censo aponta que mais de 50% dos brasileiros já residem em áreas urbanas." },
          { data: "Século XXI", titulo: "Crescimento das Cidades Médias", descricao: "Polo de serviços e atração de investimentos fora das grandes capitais." }
        ],
        termosChave: [
          { termo: "Êxodo Rural", definicao: "Migração massiva de trabalhadores e famílias do campo para as cidades em busca de emprego e serviços." },
          { termo: "Conurbação", definicao: "Integração física e funcional entre duas ou mais cidades vizinhas resultante do crescimento da malha urbana." },
          { termo: "Segregação Socioespacial", definicao: "Divisão territorial da cidade onde diferentes classes sociais habitam áreas com níveis desiguais de infraestrutura e serviços." }
        ],
        videoAula: {
          titulo: "Urbanização Brasileira: Do Êxodo Rural aos Desafios das Cidades",
          canal: "IFSC Sociedade e Território",
          url: "https://www.youtube.com/results?search_query=urbanizacao+brasileira+enem+resumo+geografia",
          duracao: "17 min"
        },
        questoes: [
          {
            id: "q-geo-7",
            enunciado: "O rápido processo de urbanização ocorrido no Brasil a partir da segunda metade do século XX esteve diretamente associado a:",
            alternativas: [
              "Ao retorno em massa dos operários industriais para a produção de café.",
              "Ao êxodo rural provocado pela mecanização agrícola e atração do parque fabril urbano.",
              "À extinção completa de todas as favelas e periferias metropolitanas.",
              "À descentralização exclusiva do transporte ferroviário de passageiros."
            ],
            correta: 1,
            explicacao: "A modernização da agricultura associada à expansão de empregos nas indústrias e serviços das grandes cidades impulsionou a migração campo-cidade (êxodo rural)."
          },
          {
            id: "q-geo-8",
            enunciado: "O fenômeno urbano em que duas ou mais cidades vizinhas crescem territorialmente até que suas manchas urbanas se encontrem e se fundam fisicamente é denominado:",
            alternativas: [
              "Gentrificação.",
              "Conurbação.",
              "Favelização.",
              "Especulação agrária."
            ],
            correta: 1,
            explicacao: "Conurbação é o encontro geográfico contínuo entre duas ou mais cidades que acabam compartilhando serviços, transporte e malha viária."
          },
          {
            id: "q-geo-9",
            enunciado: "A expulsão de famílias de menor renda para áreas periféricas desprovidas de saneamento básico, asfalto e transporte de qualidade, em contraste com bairros nobres valorizados, exemplifica o processo de:",
            alternativas: [
              "Segregação socioespacial.",
              "Sustentabilidade ecológica pura.",
              "Isolamento térmico natural.",
              "Restauração florestal comunitária."
            ],
            correta: 0,
            explicacao: "A segregação socioespacial é a materialização geográfica das desigualdades econômicas, onde o acesso à infraestrutura urbana é distribuído de forma desigual pelo mercado imobiliário."
          }
        ]
      }
    ]
  }
};

/**
 * Função utilitária para extrair todas as questões em um array plano para os simulados
 */
function obterTodasAsQuestoes() {
  const todasQuestoes = [];
  Object.keys(CONTEUDOS_DATA).forEach(discKey => {
    const disc = CONTEUDOS_DATA[discKey];
    disc.topicos.forEach(topico => {
      topico.questoes.forEach(q => {
        todasQuestoes.push({
          ...q,
          disciplinaKey: discKey,
          disciplinaNome: disc.nome,
          topicoTitulo: topico.titulo
        });
      });
    });
  });
  return todasQuestoes;
}

