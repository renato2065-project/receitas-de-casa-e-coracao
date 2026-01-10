import { Recipe, Category, Testimonial } from './types';

import boloAipim from './assets/bolo-aipim.jpg';
import pudimLeite from './assets/receita-de-casa-pudim-leite.jpg';
import carreteiro from './assets/receitas-de-casa-carreteiro.jpg';
import panquecas from './assets/panquecas-01.jpg';
import cuecaVirada from './assets/cueca-virada-2.jpg';
import pastel from './assets/receitas-de-casa-pastel.jpg';
import boloBau from './assets/bolo-bau.jpg';
import escondidinhoImg from './assets/receita-de-casa-escondidinho-carne-seca.jpg';
import paoCaseiroImg from './assets/receita-de-casa-pao-caseiro.jpg';
import cuecaViradaNew from './assets/receita-de-casa-cueca-virada-3.jpg';
import brigadeiro from './assets/receitas-de-casa-brigadeiros-de-chocolate.jpg';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Bolos Caseiros', image: boloAipim },
  { id: '2', name: 'Doces & Sobremesas', image: pudimLeite },
  { id: '3', name: 'Pratos do Dia a Dia', image: carreteiro },
  { id: '4', name: 'Pães & Massas', image: panquecas },
  { id: '5', name: 'Café da Tarde', image: cuecaVirada },
  { id: '6', name: 'Festas & Comemorações', image: pastel },
];

export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Bolo de Cenoura',
    slug: 'bolo-de-cenoura',
    description: 'O clássico que nunca falha. Fofinho, laranja e com aquela casquinha crocante.',
    image: boloAipim,
    prepTime: '45 min',
    difficulty: 'Fácil',
    category: ['Bolos Caseiros'],
    servings: '12 fatias',
    story: 'Toda quarta-feira, quando eu era criança, minha avó fazia este bolo de cenoura. O cheiro invadia a casa inteira e eu ficava na cozinha, esperando ansiosamente o momento de raspar a tigela. Hoje, faço essa mesma receita para meus filhos, e a magia continua a mesma. É mais do que um bolo, é um abraço em forma de doce.',
    ingredients: [
      '3 cenouras médias descascadas e picadas',
      '3 ovos grandes',
      '1 xícara de óleo de milho ou girassol',
      '2 xícaras de açúcar',
      '2 xícaras de farinha de trigo',
      '1 colher (sopa) de fermento em pó',
      '1 pitada de sal'
    ],
    steps: [
      'Preaqueça o forno a 180°C e unte uma forma com manteiga e farinha.',
      'No liquidificador, bata as cenouras, os ovos, o óleo e o açúcar por 5 minutos até ficar bem homogêneo.',
      'Em uma tigela grande, peneire a farinha e o sal.',
      'Despeje a mistura do liquidificador na tigela e misture delicadamente com um fouet até incorporar.',
      'Adicione o fermento por último e misture apenas para integrar.',
      'Despeje na forma e asse por aproximadamente 40 minutos ou até passar no teste do palito.'
    ],
    tips: [
      'Use cenouras frescas e não muito velhas para evitar que o bolo fique pesado.',
      'Não abra o forno antes de 30 minutos.',
      'Para a cobertura durinha, use açúcar, chocolate em pó, manteiga e um pouquinho de leite, deixando ferver até engrossar.'
    ]
  },
  {
    id: '2',
    title: 'Pão Caseiro Fofinho da Vovó',
    slug: 'pao-caseiro',
    description: 'Aquele pão que perfuma a casa inteira e derrete na boca com manteiga.',
    image: paoCaseiroImg,
    prepTime: '2h 30min',
    difficulty: 'Médio',
    category: ['Pães & Massas'],
    servings: '2 pães médios',
    story: 'Fazer pão é uma terapia. Aprendi a ter paciência esperando a massa crescer. Esta receita é infalível para quem está começando.',
    ingredients: ['1kg farinha', '2 ovos', 'Leite morno', 'Fermento biológico'],
    steps: ['Misture secos', 'Adicione líquidos', 'Sove bem', 'Deixe crescer', 'Asse'],
    tips: ['O leite não pode estar muito quente para não matar o fermento.']
  },
  {
    id: '3',
    title: 'Arroz Carreteiro',
    slug: 'arroz-carreteiro',
    description: 'O almoço de domingo perfeito, simples de preparar e cheio de sabor.',
    image: carreteiro,
    prepTime: '1h 30min',
    difficulty: 'Fácil',
    category: ['Pratos do Dia a Dia'],
    servings: '6 pessoas',
    story: 'Nascido nos pampas, o arroz carreteiro era a refeição dos viajantes que cruzavam o estado em carretas. Simples, sustancioso e feito em uma única panela de ferro, ele carrega o sabor da história e do Rio Grande.',
    ingredients: [
      '500g de carne seca (charque) dessalgada e picada em cubos',
      '2 xícaras de arroz',
      '1 cebola grande picada',
      '2 dentes de alho picados',
      '2 colheres (sopa) de óleo',
      'Água fervente',
      'Cheiro-verde a gosto'
    ],
    steps: [
      'Em uma panela de ferro, aqueça o óleo e frite a carne seca até dourar bem.',
      'Adicione a cebola e o alho, refogando até murcharem.',
      'Acrescente o arroz e frite por alguns minutos.',
      'Cubra com água fervente (cerca de 2 dedos acima do arroz).',
      'Cozinhe em fogo baixo com a panela semi-tampada até a água secar e o arroz estar macio.',
      'Finalize com bastante cheiro-verde fresco.'
    ],
    tips: [
      'Se quiser, adicione cubinhos de bacon para dar mais sabor.',
      'Sirva acompanhado de ovo frito e salada de tomate.'
    ]
  },
  {
    id: '4',
    title: 'Pudim de Leite',
    slug: 'pudim-de-leite',
    description: 'Pudim de leite cremoso, com calda de caramelo brilhante. O clássico irresistível que derrete na boca.',
    image: pudimLeite,
    prepTime: '60 min',
    difficulty: 'Fácil',
    category: ['Doces & Sobremesas'],
    servings: '15 pedaços',
    story: 'Não existe almoço de domingo sem um belo pudim na mesa. Essa receita é aquela clássica, sem furinhos (ou com, se você bater mais!), que desmancha na boca.',
    ingredients: [
      '1 lata de leite condensado',
      '2 medidas (da lata) de leite',
      '3 ovos',
      '1 xícara de açúcar (para a calda)'
    ],
    steps: [
      'Para a calda: derreta o açúcar na própria forma de pudim até virar caramelo e espalhe pelas laterais.',
      'No liquidificador, bata o leite condensado, o leite e os ovos por 2 minutos.',
      'Despeje a mistura na forma caramelizada (use uma peneira se quiser um pudim bem lisinho).',
      'Cubra com papel alumínio e leve ao forno em banho-maria por cerca de 1 hora a 180°C.',
      'Espere esfriar completamente antes de desenformar.'
    ],
    tips: [
      'Para um pudim sem furinhos, não bata demais e asse em temperatura baixa lentamente.',
      'O banho-maria é essencial para o cozimento uniforme.'
    ]
  },
  {
    id: '5',
    title: 'Escondidinho de Carne Seca',
    slug: 'escondidinho',
    description: 'Uma camada generosa de purê de mandioca cobrindo um recheio suculento.',
    image: escondidinhoImg,
    prepTime: '1h',
    difficulty: 'Médio',
    category: ['Pratos do Dia a Dia'],
    servings: '4 pessoas',
    story: 'O encontro perfeito entre o Norte e o Nordeste no prato. A cremosidade da mandioca abraçando o sabor marcante do charque é a definição de comida afetiva brasileira.',
    ingredients: [
      '1kg de mandioca (aipim/macaxeira) cozida e amassada',
      '500g de carne seca dessalgada, cozida e desfiada',
      '1 cebola picada',
      '200g de requeijão cremoso',
      '1/2 xícara de leite',
      '2 colheres (sopa) de manteiga',
      'Queijo coalho ou mussarela ralado para gratinar'
    ],
    steps: [
      'Refogue a carne seca com a cebola na manteiga até dourar. Reserve.',
      'Em uma panela, misture a mandioca amassada, o leite, 1 colher de manteiga e sal, mexendo até formar um purê liso.',
      'Em um refratário untado, faça uma camada com metade do purê.',
      'Coloque o recheio de carne seca e cubra com o requeijão.',
      'Cubra com o restante do purê e finalize com o queijo ralado.',
      'Leve ao forno para gratinar até o queijo dourar.'
    ],
    tips: [
      'Certifique-se de tirar todos os "fiapos" da mandioca antes de amassar.'
    ]
  },
  {
    id: '6',
    title: 'Bolo de Fubá',
    slug: 'bolo-fuba',
    description: 'Delicioso bolo de fubá caseiro, perfeito para uma tarde de domingo.',
    image: boloBau,
    prepTime: '50 min',
    difficulty: 'Fácil',
    category: ['Café da Tarde'],
    servings: '10 fatias',
    story: 'Aquele bolo simples que pede um café recém-passado. O cheirinho de erva-doce assando no forno é capaz de trazer qualquer um para a cozinha.',
    ingredients: [
      '3 ovos',
      '1 xícara de óleo',
      '1 xícara de leite',
      '1 e 1/2 xícara de açúcar',
      '1 xícara de fubá mimoso',
      '1 xícara de farinha de trigo',
      '1 colher (sopa) de fermento em pó',
      '1 colher (sopa) de erva-doce (opcional)'
    ],
    steps: [
      'No liquidificador, bata os ovos, o óleo, o leite e o açúcar.',
      'Transfira para uma tigela e misture o fubá e a farinha peneirados.',
      'Adicione a erva-doce e o fermento, misturando delicadamente.',
      'Despeje em forma untada e enfarinhada (com fubá).',
      'Asse em forno preaquecido a 180°C por cerca de 40 minutos.'
    ],
    tips: [
      'Substitua parte do leite por leite de coco para um sabor especial.',
      'Pode adicionar pedacinhos de goiabada na massa antes de assar.'
    ]
  },
  {
    id: '7',
    title: 'Cueca Virada',
    slug: 'cueca-virada',
    description: 'Ideal para acompanhar aquele cafézinho da tarde recém passado.',
    image: cuecaViradaNew,
    prepTime: '90 min',
    difficulty: 'Médio',
    category: ['Café da Tarde'],
    servings: '1 porção',
    story: 'Grostoli, cueca virada, cavaco... não importa o nome, essa massinha frita polvilhada com açúcar e canela é a rainha dos lanches da tarde no sul do Brasil.',
    ingredients: [
      '3 xícaras de farinha de trigo',
      '3/4 xícara de açúcar',
      '2 colheres (sopa) de margarina ou manteiga',
      '2 ovos',
      '1/2 xícara de leite',
      '1 colher (sopa) de cachaça ou vinagre (para ficar sequinha)',
      '1 colher (sopa) de fermento em pó',
      'Óleo para fritar',
      'Açúcar e canela para polvilhar'
    ],
    steps: [
      'Em uma tigela, misture os ovos, o açúcar, a margarina, o leite e a cachaça.',
      'Vá adicionando a farinha e o fermento aos poucos, amassando até desgrudar das mãos (pode não usar toda a farinha).',
      'Abra a massa não muito fina, corte retângulos e faça um corte no meio, passando uma ponta por dentro para "virar".',
      'Frite em óleo quente até dourar os dois lados.',
      'Escorra em papel toalha e passe ainda quente na mistura de açúcar e canela.'
    ],
    tips: [
      'A cachaça evapora na fritura e ajuda a massa a não absorver muito óleo.'
    ]
  },
  {
    id: '8',
    title: 'Pastel de Feira Crocante',
    slug: 'pastel-de-feira',
    description: 'Aquele pastelzinho de feira, crocante, sequinho e com muito recheio.',
    image: pastel,
    prepTime: '60 min',
    difficulty: 'Médio',
    category: ['Festas & Comemorações'],
    servings: '10 unidades',
    story: 'Quem resiste a um pastel frito na hora? Essa receita traz o segredo da massa crocante e cheia de bolhinhas que todos amam.',
    ingredients: [
      '3 xícaras de farinha de trigo',
      '1 colher (sopa) de óleo',
      '1 colher (sopa) de cachaça (o segredo das bolhinhas!)',
      '1 xícara de água morna',
      '1 colher (chá) de sal',
      'Recheio de sua preferência (carne, queijo, palmito)'
    ],
    steps: [
      'Misture a farinha e o sal em uma tigela.',
      'Adicione o óleo e a cachaça.',
      'Vá colocando a água morna aos poucos até dar ponto de massa.',
      'Sove bem até ficar lisa.',
      'Deixe descansar por 30 minutos.',
      'Abra bem fina, corte, recheie e feche com um garfo.',
      'Frite em óleo bem quente.'
    ],
    tips: [
      'A cachaça é essencial para a massa ficar crocante e com bolhas.'
    ]
  },
  {
    id: '9',
    title: 'Brigadeiro Tradicional',
    slug: 'brigadeiro-tradicional',
    description: 'O doce mais amado do Brasil, no ponto perfeito para enrolar.',
    image: brigadeiro,
    prepTime: '40 min',
    difficulty: 'Fácil',
    category: ['Festas & Comemorações', 'Doces & Sobremesas'],
    servings: '30 docinhos',
    story: 'Brigadeiro é presença obrigatória em qualquer festa. O segredo é o ponto certo e ingredientes de qualidade.',
    ingredients: [
      '1 lata de leite condensado',
      '1 colher (sopa) de manteiga',
      '3 colheres (sopa) de chocolate em pó ou cacau',
      'Chocolate granulado para enrolar'
    ],
    steps: [
      'Em uma panela, misture o leite condensado, a manteiga e o chocolate em pó.',
      'Leve ao fogo médio, mexendo sempre para não grudar.',
      'O ponto certo é quando desgruda do fundo da panela (caminho de Moisés).',
      'Transfira para um prato untado e deixe esfriar.',
      'Faça bolinhas, passe no granulado e coloque nas forminhas.'
    ],
    tips: [
      'Use manteiga extra, dá um brilho especial.',
      'Se quiser comer de colher, tire do fogo um pouco antes.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Maria S.', text: 'Fiz o bolo de cenoura da Janara e minha família pediu bis! Receita perfeita! ❤️' },
  { id: '2', name: 'Ana Paula R.', text: 'Finalmente encontrei um blog com receitas que FUNCIONAM de verdade!' },
  { id: '3', name: 'Juliana M.', text: 'As histórias me emocionam tanto quanto as receitas me alimentam.' },
];