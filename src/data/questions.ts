const questions = [
  {
    index: 1,
    question:
      "D'avant en arrière quels sont les 3 éléments présents au niveau de la corne utérine :",
    options: [
      "Ligament rond, ligament utéro-ovarien, trompe",
      "Ligament rond, trompe, ligament utéro-ovarien",
      "Ligament utéro-ovarien, ligament rond, trompe",
      "Trompe, ligament rond, ligament utéro-ovarien",
      "Trompe, ligament utéro-ovarien, ligament rond",
    ],
    point: 1,
    correctAnswers: [4], // "Trompe, ligament rond, ligament utéro-ovarien" is correct
    type: "single-choice",
  },
  {
    index: 2,
    question:
      "Lesquelles de ces artères ne sont pas une branche directe de l’aorte :",
    options: [
      "Artère ovarienne",
      "Artère iliaque commune",
      "Artère utérine",
      "Artère mesénterique supérieure",
      "Artère circonflexe",
    ],
    point: 1,
    correctAnswers: [2, 4], // "Artère utérine / circonflexe" is not a branch
    type: "multiple-choice",
  },
  {
    index: 3,
    question:
      "Faire correspondre a chaque structure sa caracteristique: ",
    options: [
      "L’hymen",
      "Les petites lèvres",
      "Les grandes lèvres",
      "Le clitoris",
      "Le mont du pubis",
    ],
    point: 1,
    correctAnswers: [3, 2, 1, 0, 4], 
    type: "dropdown",
    dropdownItems: [
      "Organe de plaisir",
      "Externes",
      "Internes",
      "Se dechire",
      "Est en haut",
    ],
  },
  {
    index: 4,
    question: "Le détroit supérieur est limité par tout ce qui suit sauf :",
    options: [
      "Le promontoire",
      "La partie saillante du sacrum",
      "La symphyse pubienne",
      "Les lignes innominées",
      "Les épines sciatiques",
    ],
    point: 1,
    correctAnswers: [4], // "Les épines sciatiques" is incorrect
    type: "single-choice",
  },
  {
    index: 5,
    question:
      "Tous les chefs musculaires suivants font partie du muscle releveur de l’anus sauf :",
    options: [
      "Le muscle pubo-urétral",
      "Le muscle iléo-coccygien",
      "Le muscle sphincter externe anal",
      "Le muscle pubo-rectal",
      "Le muscle coccygien",
    ],
    point: 1,
    correctAnswers: [2], // "Le muscle sphincter externe anal" is incorrect
    type: "single-choice",
  },
  {
    index: 6,
    question: "Concernant l’ovaire tout ce qui suit est vrai sauf :",
    options: [
      "Il est irrigué par l’artère ovarique",
      "Il se fixe à l’utérus par le ligament utéro-ovarien",
      "Une de ses attaches est le ligament rond",
      "Il est suspendu par le ligament suspenseur de l’ovaire",
      "Il est irrigué en partie par l’artère utérine",
    ],
    point: 1,
    correctAnswers: [2], // "Une de ses attaches est le ligament rond" is incorrect
    type: "single-choice",
  },
  {
    index: 7,
    question: "Dans quelle partie de la trompe se passe la fécondation ?",
    options: [
      "Le pavillon",
      "L’isthme",
      "Les franges",
      "L’ampoule",
      "La partie interstitielle",
    ],
    point: 1,
    correctAnswers: [3], // "L’ampoule" is correct
    type: "single-choice",
  },
  {
    index: 8,
    question:
      "Concernant les rapports du vagin tout ce qui suit est vrai sauf :",
    options: [
      "Paroi antérieure : La partie inférieure est intimement liée à l'urètre par le septum urétrovaginal",
      "Paroi postérieure : La partie moyenne est intimement unie au rectum sur 4 cm environ par le septum rectovaginal",
      "Paroi postérieure : Le quart supérieur, recouvert de péritoine, est séparé du rectum par le cul-de-sac recto-utérin de Douglas",
      "Paroi antérieure : Le quart inférieur est séparé du canal anal par le triangle anovaginal contenant le centre tendineux du périnée",
      "Paroi antérieure : La partie supérieure est en rapport avec le trigone vésical qui est solidement fixé au vagin par le septum vésicovaginal",
    ],
    point: 1,
    correctAnswers: [4], // "Paroi antérieure : Le quart inférieur..." is incorrect
    type: "single-choice",
  },
  {
    index: 9,
    question: "Les glandes vulvaires, une réponse fausse :",
    options: [
      "Elles sont nombreuses et responsables d’une partie des sécrétions vaginales",
      "Les glandes vestibulaires majeures sont appelées glande de Bartholin",
      "Les glandes vestibulaires mineures sont des glandes sébacées et sudoripares disséminées à la surface des grandes lèvres, s'atrophient rapidement à la ménopause",
      "Les glandes vestibulaires majeures sécrètent au moment des rapports sexuels un liquide filant et incolore qui participe à la lubrification du vestibule vaginal",
      "Les glandes para-urétrales sont appelées aussi les glandes de Skene",
    ],
    point: 1,
    correctAnswers: [0], // "Elles sont nombreuses..." is incorrect
    type: "single-choice",
  },
  {
    index: 10,
    question:
      "Quelle est la réponse fausse concernant les attaches de l’utérus :",
    options: [
      "Le ligament rond tient l’utérus par sa corne au niveau de la paroi pelvienne antérieure",
      "Les ligaments larges sont les lames porte-vaisseaux de l’utérus",
      "Les ligaments utéro-sacrés sont des ligaments qui tiennent le col utérin aux parois pelviennes latérales",
      "L’artère utérine chemine dans le ligament large",
      "Le ligament propre de l’ovaire lie l’utérus à l’ovaire",
    ],
    point: 1,
    correctAnswers: [0], // "Le ligament rond tient..." is incorrect
    type: "single-choice",
  },
  {
    index: 11,
    question:
      "Toutes les branches suivantes sont des branches de l’artère utérine sauf une, laquelle ?",
    options: [
      "Les artères vésicovaginales",
      "Le rameau urétérique",
      "L'artère cervicovaginale",
      "Les artères cervicales",
      "L'artère ovarique",
    ],
    point: 1,
    correctAnswers: [4], // "L'artère ovarique" is incorrect
    type: "single-choice",
  },
  {
    index: 12,
    question: "Dans quelle partie de la trompe se produit la fécondation ?",
    options: [
      "La partie interstitielle",
      "La partie isthmique",
      "L’ampoule de la trompe",
      "Le pavillon de la trompe",
      "Les franges de la trompe",
    ],
    point: 1,
    correctAnswers: [2], // "L’ampoule de la trompe" is correct
    type: "single-choice",
  },
  {
    index: 13,
    question: "Concernant les rapports du vagin une seule réponse est fausse :",
    options: [
      "La partie supérieure est en rapport avec le trigone vésical qui est solidement fixé au vagin par le septum vésicovaginal",
      "La partie inférieure est intimement liée à l'urètre par le septum urétrovaginal",
      "Le quart supérieur et antérieur est recouvert de péritoine, séparé du rectum par le cul-de-sac recto-utérin de Douglas",
      "La partie moyenne et postérieure est intimement unie au rectum par le septum rectovaginal",
      "Le quart inférieur et postérieur est séparé du canal anal par le triangle anovaginal contenant le centre tendineux du périnée",
    ],
    point: 1,
    correctAnswers: [2], // "Le quart supérieur et antérieur..." is incorrect
    type: "single-choice",
  },
  {
    index: 14,
    question: "Le clitoris est principalement innervé par le nerf :",
    options: [
      "Le nerf pudendal",
      "Les branches génitales des nerfs ilio-hypogastrique",
      "Le nerf ilio-inguinal",
      "Le nerf génito-fémoral",
      "Le nerf cutané postérieur de la cuisse",
    ],
    point: 1,
    correctAnswers: [0], // "Le nerf pudendal" is correct
    type: "single-choice",
  },
  {
    index: 15,
    question:
      "D’où vient la majorité de la vascularisation de l’ovaire en préménopause ?",
    options: [
      "Iliaque externe",
      "Iliaque interne",
      "Aorte",
      "Artère utérine",
      "Artère hypogastrique",
    ],
    point: 1,
    correctAnswers: [2], // "Aorte" is correct
    type: "single-choice",
  },
  {
    index: 16,
    question:
      "Quel est le ligament qui joint la trompe de Fallope à l’ovaire ?",
    options: [
      "Le ligament infundibulo-ovarien",
      "Le ligament propre de l’ovaire",
      "Le ligament large",
      "Le ligament lombo-ovarien",
      "Le ligament sacré",
    ],
    point: 1,
    correctAnswers: [0], // "Le ligament infundibulo-ovarien" is correct
    type: "single-choice",
  },
  {
    index: 17,
    question:
      "Quelle est la partie de la trompe qui est la plus proximale de l’utérus ?",
    options: [
      "Le pavillon",
      "L’ampoule",
      "Les franges",
      "La partie isthmique",
      "La partie interstitielle",
    ],
    point: 1,
    correctAnswers: [4], // "La partie interstitielle" is correct
    type: "single-choice",
  },
  {
    index: 18,
    question:
      "Toutes les branches suivantes sont des branches de l’artère utérine sauf une, laquelle ?",
    options: [
      "Artères cervicales",
      "Artère vésicale postérieure",
      "Artère du ligament rond",
      "Artère obturatrice",
      "Artère du fond utérin",
    ],
    point: 1,
    correctAnswers: [3], // "Artère obturatrice" is incorrect
    type: "single-choice",
  },
  {
    index: 19,
    question:
      "Quelle est la partie de l’utérus qui est très réduite normalement et qui s’amplifie (s’étire) au cours de la grossesse ?",
    options: [
      "Le col de l’utérus",
      "L’isthme de l’utérus",
      "Le corps de l’utérus",
      "Le fond de l’utérus",
      "Les cornes de l’utérus",
    ],
    point: 1,
    correctAnswers: [1], // "L’isthme de l’utérus" is correct
    type: "single-choice",
  },
  {
    index: 20,
    question:
      "Quelle est la limite qui sépare le pelvis major du pelvis minor ?",
    options: [
      "Le détroit supérieur",
      "Le détroit moyen",
      "Le détroit inférieur",
      "Les releveurs de l’anus",
      "Le plancher pelvien",
    ],
    point: 1,
    correctAnswers: [0], // "Le détroit supérieur" is correct
    type: "single-choice",
  },
  {
    index: 21,
    question:
      "Quelle est la partie qui n’appartient pas au détroit supérieur ?",
    options: [
      "Le promontoire",
      "La colonne sacrée",
      "Les épines sciatiques",
      "Les lignes innominées",
      "La symphyse pubienne",
    ],
    point: 1,
    correctAnswers: [2], // "Les épines sciatiques" is incorrect
    type: "single-choice",
  },
  {
    index: 22,
    question:
      "Quelle est parmi ces branches artérielles celle qui ne naît pas de l’iliaque interne ?",
    options: [
      "L’artère utérine",
      "L’artère obturatrice",
      "L’artère ombilicale",
      "L’artère pudendale",
      "L’artère épigastrique",
    ],
    point: 1,
    correctAnswers: [4], // "L’artère épigastrique" is incorrect
    type: "single-choice",
  },
  {
    index: 23,
    question:
      "Quelle est la dernière branche de l’aorte avant sa bifurcation ?",
    options: [
      "L’artère mésentérique inférieure",
      "L’artère sacrale médiale",
      "L’artère iliaque interne",
      "L’artère iliaque commune",
      "L’artère ovarique",
    ],
    point: 1,
    correctAnswers: [1], // "L’artère sacrale médiale" is correct
    type: "single-choice",
  },
  {
    index: 24,
    question: "Les glandes de Skene :",
    options: [
      "Sont les mêmes que les glandes de Bartholin",
      "Sont aussi appelées glandes para-urétrales",
      "Sont des glandes au niveau de l’endocol",
      "Contribuent notablement à la lubrification du vagin",
      "Sont situées plus profondément que le diaphragme uro-génital",
    ],
    point: 1,
    correctAnswers: [1], // "Sont aussi appelées glandes para-urétrales" is correct
    type: "single-choice",
  },
  {
    index: 25,
    question: "Le diaphragme uro-génital contient quel muscle :",
    options: [
      "Releveur de l’anus",
      "Transverse profond",
      "Ischio-caverneux",
      "Bulbospongieux",
      "Sphincter anal",
    ],
    point: 1,
    correctAnswers: [1], // "Transverse profond" is correct
    type: "single-choice",
  },
  {
    index: 26,
    question: "La veine ovarienne droite se draine dans quelle veine ?",
    options: [
      "Veine cave inférieure",
      "Iliaque commune droite",
      "Iliaque externe droite",
      "Iliaque interne droite",
      "Rénale droite",
    ],
    point: 1,
    correctAnswers: [0], // "Veine cave inférieure" is correct
    type: "single-choice",
  },
  {
    index: 27,
    question:
      "Quelle est l’artère qui prend origine souvent avec l’artère utérine par un même tronc ?",
    options: [
      "Vésicale supérieure",
      "Vésicale inférieure",
      "Ombilicale",
      "Obturatrice",
      "Honteuse interne",
    ],
    point: 1,
    correctAnswers: [2], // "Ombilicale" is correct
    type: "single-choice",
  },
  {
    index: 28,
    question:
      "Le stroma ovarien peut normalement contenir quel type de cellules ?",
    options: [
      "Sertoli",
      "Leydig",
      "Myométriales",
      "Endométriales",
      "Endocervicales",
    ],
    point: 1,
    correctAnswers: [1], // "Leydig" is correct
    type: "single-choice",
  },
  {
    index: 29,
    question:
      "Le drainage de la veine ovarienne gauche se fait dans la veine :",
    options: [
      "Iliaque interne",
      "Iliaque externe",
      "Cave inférieure",
      "Utérine",
      "Rénale",
    ],
    point: 1,
    correctAnswers: [4], // "Rénale" is correct
    type: "single-choice",
  },
  {
    index: 30,
    question:
      "Le stroma ovarien peut normalement contenir quel type de cellules :",
    options: [
      "Sertoli",
      "Leydig",
      "Myometriale",
      "Endometriale",
      "Endocervical",
    ],
    point: 1,
    correctAnswers: [1], // "Leydig" is correct
    type: "single-choice",
  },
  {
    index: 31,
    question: "Les petites lèvres sont :",
    options: [
      "Parfois asymétriques",
      "Recouvertes de poil",
      "Contiennent des glandes sébacées",
      "Changent de couleur du violet au rose lors d’un rapport",
      "Fusionnent dans la partie supérieure pour former le clitoris",
    ],
    point: 1,
    correctAnswers: [0], // "Parfois asymétriques" is correct
    type: "single-choice",
  },
  {
    index: 32,
    question:
      "Le drainage de la veine ovarienne gauche se fait dans la veine :",
    options: [
      "Iliaque interne",
      "Iliaque externe",
      "Cave inférieure",
      "Utérine",
      "Rénale",
    ],
    point: 1,
    correctAnswers: [4], // "Rénale" is correct
    type: "single-choice",
  },
  {
    index: 33,
    question:
      "D’avant en arrière quels sont les 3 éléments présents au niveau de la corne utérine :",
    options: [
      "Ligament rond - Ligament utéro ovarien - Trompe",
      "Ligament rond - Trompe - Ligament utéro ovarien",
      "Ligament utéro ovarien - Ligament rond - Trompe",
      "Trompe - Ligament rond - Ligament utéro ovarien",
      "Trompe - Ligament utéro ovarien - Ligament",
    ],
    point: 1,
    correctAnswers: [3], // "Trompe - Ligament rond - Ligament utéro ovarien" is correct
    type: "single-choice",
  },
  {
    index: 34,
    question: "La partie de l’utérus propre à la grossesse est :",
    options: [
      "Le corps de l’utérus",
      "Le segment inférieur de l’utérus",
      "Le col de l’utérus",
      "Les cornes de l’utérus",
      "Le myomètre",
    ],
    point: 1,
    correctAnswers: [0], // "Le corps de l’utérus" is correct
    type: "single-choice",
  },
  {
    index: 35,
    question:
      "Parmi ces muscles du périnée antérieur, lequel se trouve le plus loin de l’orifice vaginal :",
    options: [
      "Ischio-caverneux",
      "Transverse superficiel",
      "Bulbo-spongieux",
      "Sphincter de l’urètre",
      "Constricteur du vagin",
    ],
    point: 1,
    correctAnswers: [0], // "Ischio-caverneux" is correct
    type: "single-choice",
  },
  {
    index: 36,
    question:
      "Parmi ces muscles du périnée antérieur, lequel ne participe pas au noyau fibreux central du périnée :",
    options: [
      "Bulbo-spongieux",
      "Ischio-caverneux",
      "Constricteur du vagin",
      "Transverse superficiel",
      "Sphincter de l’urètre",
    ],
    point: 1,
    correctAnswers: [1], // "Ischio-caverneux" is correct
    type: "single-choice",
  },
  {
    index: 37,
    question:
      "Choisir parmi les suivants le muscle sur lequel s’insère le muscle releveur de l’anus :",
    options: [
      "Transverse profond",
      "Obturateur interne",
      "Obturateur externe",
      "Pubo-rectal",
      "Transverse superficiel",
    ],
    point: 1,
    correctAnswers: [3], // "Pubo-rectal" is correct
    type: "single-choice",
  },
  {
    index: 38,
    question: "Quelle est la voie de drainage de la veine ovarienne droite :",
    options: [
      "La veine iliaque interne",
      "La veine iliaque externe",
      "La veine cave inférieure",
      "La veine rénale",
      "La veine ovarienne controlatérale",
    ],
    point: 1,
    correctAnswers: [2], // "La veine cave inférieure" is correct
    type: "single-choice",
  },
  {
    index: 39,
    question:
      "Choisir l’artère qui va donner l’artère honteuse interne (pudendal artery) :",
    options: [
      "Iliaque externe",
      "Hypogastrique",
      "Aorte",
      "Honteuse externe",
      "Utérine",
    ],
    point: 1,
    correctAnswers: [1], // "Hypogastrique" is correct
    type: "single-choice",
  },
  {
    index: 40,
    question:
      "Parmi les suivantes choisir l’artère qui a le moins de débit vasculaire chez une patiente de 21 ans :",
    options: [
      "Honteuse interne",
      "Ombilicale",
      "Vaginale",
      "Utérine",
      "Obturatrice",
    ],
    point: 1,
    correctAnswers: [1], // "Ombilicale" is correct
    type: "single-choice",
  },
  {
    index: 41,
    question:
      "Tout ce qui suit est vrai sauf une réponse concernant l’artère utérine :",
    options: [
      "Elle peut avoir un tronc commun avec l’artère ombilicale.",
      "Elle irrigue principalement l’utérus.",
      "Elle retrouve l’artère ovarique au niveau de l’ovaire et de la trompe.",
      "Elle donne certaines branches à la vessie.",
      "Elle naît de l’artère iliaque externe.",
    ],
    point: 1,
    correctAnswers: [4], // "Elle naît de l’artère iliaque externe" is incorrect
    type: "single-choice",
  },
  {
    index: 42,
    question:
      "Tout ce qui suit est vrai sauf une réponse concernant l’ovaire :",
    options: [
      "Il a une fonction reproductive et une fonction endocrinienne.",
      "Il est principalement vascularisé par l’artère ovarique.",
      "Il est complètement et uniquement suspendu au ligament large seul support de l’ovaire.",
      "Il reçoit des branches de l’artère utérine.",
      "Il est formé d’un cortex et d’une médula.",
    ],
    point: 1,
    correctAnswers: [2], // "Il est complètement et uniquement suspendu au ligament large..." is incorrect
    type: "single-choice",
  },
  {
    index: 43,
    question: "L’ovaire est suspendu par tous ces ligaments sauf un lequel ?",
    options: [
      "Le ligament large",
      "Le ligament tubo-ovarien",
      "Le ligament utéro-ovarien",
      "Le ligament lombo-ovarien",
      "Le ligament rond",
    ],
    point: 1,
    correctAnswers: [4], // "Le ligament rond" is correct
    type: "single-choice",
  },
  {
    index: 44,
    question: "Toutes les propositions suivantes sont fausses sauf une :",
    options: [
      "La veine ovarienne se jette directement dans le plexus vésical.",
      "L’artère ovarienne est une branche de l’aorte abdominale.",
      "Les vaisseaux ovariens naissent au niveau de l’artère utérine.",
      "L’artère utérine naît directement de l’aorte.",
      "L’artère utérine naît de l’artère iliaque externe.",
    ],
    point: 1,
    correctAnswers: [1], // "L’artère ovarienne est une branche de l’aorte abdominale" is correct
    type: "single-choice",
  },
];

export default questions;
