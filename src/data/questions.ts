const questions = [
  {
    index: 1,
    question:
      "Sur l’ECG d’un sujet sain, l’onde P est toujours négative en (une seule réponse correcte):",
    options: ["aVL", "DII", "DI", "aVr", "V5"],
    point: 1,
    correctAnswers: [3],
    type: "single-choice",
  },
  {
    index: 2,
    question: "L’onde P sur le tracé ECG (indiquer la réponse FAUSSE):",
    options: [
      "a une durée inférieure à celle de l’intervalle QT",
      "aide à la confirmation du rythme sinusal",
      "a une amplitude inférieure à celle de QRS",
      "peut être absente dans toutes les dérivations chez le sujet normal",
      "traduit la dépolarisation de l’oreillette droite puis de l’oreillette gauche",
    ],
    point: 1,
    correctAnswers: [3],
    type: "single-choice",
  },
  {
    index: 3,
    question:
      "Une fréquence cardiaque de 125/min se traduit sur l’ECG par une distance R-R de (une seule réponse correcte):",
    options: ["6 mm", "8 mm", "10 mm", "12 mm", "14 mm"],
    point: 1,
    correctAnswers: [0],
    type: "single-choice",
  },
  {
    index: 4,
    question:
      "La dépolarisation de la structure suivante ne donne aucune déflexion sur l’ECG d’un sujet normal (une seule réponse correcte):",
    options: [
      "ventricule droit",
      "oreillette droite",
      "nœud auriculo-ventriculaire",
      "oreillette gauche",
      "ventricule gauche",
    ],
    point: 1,
    correctAnswers: [2],
    type: "single-choice",
  },
  {
    index: 5,
    question:
      "Chez un sujet normal, la dépolarisation du septum interventriculaire explique la présence (une seule réponse correcte):",
    options: [
      "du segment isoélectrique entre l’onde P et le QRS",
      "d’une petite onde s en V6",
      "d’une onde T négative en V1",
      "de la positivité initiale de QRS en V2",
      "de la négativité initiale de QRS en V1",
    ],
    point: 1,
    correctAnswers: [4],
    type: "single-choice",
  },
  {
    index: 6,
    question: "Laquelle des équations suivantes de l’ECG est correcte ?",
    options: [
      "DII = DI - DIII",
      "DI = DII - DIII",
      "DIII = DI + DII",
      "aVr = aVL + aVf",
      "aVr = aVL – aVf",
    ],
    point: 1,
    correctAnswers: [4],
    type: "single-choice",
  },
  {
    index: 7,
    question:
      "Choisir la réponse vraie à propos de la morphogénèse cardiaque :",
    options: [
      "Le tube cardiaque présente une circulation en « série ».",
      "La branche ascendante de la boucle cardiaque est formée par l’oreillette primitive.",
      "Le tube cardiaque primitif forme une boucle à concavité droite.",
      "L’apoptose ne participe pas à la formation du coeur.",
      "Le sang se dirige du troncus vers le sinus veineux.",
    ],
    point: 1,
    correctAnswers: [0],
    type: "single-choice",
  },
  {
    index: 8,
    question:
      "Le ventricule droit provient dans sa majorité du segment suivant :",
    options: [
      "Ventricule primitif.",
      "Canal atrio-ventriculaire",
      "Bulbus Cordis.",
      "Troncus.",
      "Conus.",
    ],
    point: 1,
    correctAnswers: [2],
    type: "single-choice",
  },
  {
    index: 9,
    question:
      "A partir de quel segment du tube cardiaque primitif se forme l’aorte ?",
    options: [
      "Sinus veineux",
      "Oreillette primitive.",
      "Ventricule primitif.",
      "Conus",
      "Aucune",
    ],
    point: 1,
    correctAnswers: [3],
    type: "single-choice",
  },
  {
    index: 10,
    question: "Lequel de ces segments forme le fond de la boucle du TCP ?",
    options: [
      "Le sinus veineux",
      "L’oreillette primitive.",
      "Le ventricule primitif.",
      "Le conus.",
      "Le troncus.",
    ],
    point: 1,
    correctAnswers: [2],
    type: "single-choice",
  },
  {
    index: 11,
    question: "La morphogénèse du coeur a lieu :",
    options: [
      "Entre la 2ème et la 3ème semaine de grossesse.",
      "Entre la 2ème et la 8ème semaine de grossesse",
      "Entre la 3ème et la 5ème semaine de grossesse",
      "Entre la 3ème et la 8ème semaine de grossesse",
      "Entre la 8ème et la 13ème semaine de grossesse.",
    ],
    point: 1,
    correctAnswers: [3],
    type: "single-choice",
  },
  {
    index: 12,
    question:
      "Choisir la réponse fausse à propos de la morphogénèse cardiaque :",
    options: [
      "Le mésenchyme extra-cardiaque est à l’origine de l’appareil cardio-vasculaire.",
      "Le mésenchyme intra-cardiaque est à l’origine de l’appareil cardio-vasculaire.",
      "Les cellules de la crête neurale participent à l’embryogénèse cardiaque.",
      "Le tube neural primitif participe à l’embryogénèse cardiaque",
      "Deux paires de tube endocardiques symétriques se forment vers J19.",
    ],
    point: 1,
    correctAnswers: [0],
    type: "single-choice",
  },
  {
    index: 13,
    question:
      "Lors d’une obstruction d’une artère coronaire, la première anomalie chronologique observée est :",
    options: [
      "Augmentation du taux de lactates dans le sinus coronaire",
      "Trouble de la contractilité segmentaire du VG",
      "Tachycardie réflexe",
      "Perturbations ECG à type de lésion sous-endocardique",
      "Douleur angineuse",
    ],
    point: 1,
    correctAnswers: [0],
    type: "single-choice",
  },
  {
    index: 14,
    question:
      "La régulation du débit sanguin coronaire est essentiellement faite par (une seule réponse correcte) :",
    options: [
      "Un contrôle central d’équilibre entre le système sympathique et parasympathique",
      "Un contrôle local dépendant du taux d’acide gras dans le sang des artères coronaires",
      "Un contrôle local dépendant du taux d’ac lactique dans le sinus coronaire",
      "Un contrôle central dépendant du produit tension artérielle X fréquence cardiaque",
      "Un contrôle local des résistances selon les besoins métaboliques",
    ],
    point: 1,
    correctAnswers: [4],
    type: "single-choice",
  },
  {
    index: 15,
    question: "Concernant la circulation coronaire 1 réponse fausse :",
    options: [
      "Le flux coronaire représente 4 à 5% du débit cardiaque total.",
      "A l’effort le flux coronaire n’augmente que de 3 à 4 fois alors que le débit cardiaque peut augmenter de 4 à 7 fois.",
      "La différence artério veineuse en O2 entre les artères coronaires et les veines coronaires est la plus basse du corps.",
      "La circulation coronaire est essentiellement diastolique.",
      "Durant la systole le flux sous endocardique peut tomber à zéro.",
    ],
    point: 1,
    correctAnswers: [2],
    type: "single-choice",
  },
  {
    index: 16,
    question:
      "La consommation maximale d’O2 est égale à (une seule proposition est vraie) :",
    options: [
      "Débit cardiaque X Différence artério-veineuse en O2.",
      "Flux coronaire X Contenu en O2 du sinus coronaire.",
      "Volume éjectionnel X Fréquence cardiaque.",
      "Fréquence cardiaque X Pression artérielle.",
      "Débit pulmonaire X consommation pulmonaire d’O2 par minute.",
    ],
    point: 1,
    correctAnswers: [0],
    type: "single-choice",
  },
  {
    index: 17,
    question: "Concernant le flux coronaire une réponse est fausse :",
    options: [
      "La zone sous épicardique est plus vulnérable à l’ischémie que la zone sous endocardique.",
      "l’Adénosine est un vasodilatateur puissant des coronaires.",
      "La consommation myocardique en O2 et le flux coronaire ont une relation linéaire.",
      "à l’état de base, 70% du contenu en O2 du sang artériel des coronaires est utilisé.",
      "Au repos le muscle cardiaque utilise essentiellement des ac.gras pour son métabolisme.",
    ],
    point: 1,
    correctAnswers: [0],
    type: "single-choice",
  },
  {
    index: 18,
    question:
      "Tout est applicable à la pression artérielle différentielle, sauf (une seule réponse) :",
    options: [
      "Elle augmente avec l’augmentation du retour veineux",
      "Elle est Mesurable dans l’artère pulmonaire",
      "Elle diminue avec la perte de la compliance",
      "Elle varie avec la pression artérielle",
      "Elle renseigne sur l’état physiologique du tonus vasculaire",
    ],
    point: 1,
    correctAnswers: [1],
    type: "single-choice",
  },
  {
    index: 19,
    question:
      "L’événement clé qui caractérise le développement cardiaque à la naissance est :",
    options: [
      "La diminution du nombre des fibroblastes",
      "L’hyperplasie des cardiomyocytes",
      "L’apoptose des cardiomyocytes surnuméraires",
      "La baisse de l’excitabilité du tissu nodal",
      "L’hypertrophie des cardiomyocytes",
    ],
    point: 1,
    correctAnswers: [4],
    type: "single-choice",
  },
  {
    index: 20,
    question:
      "La compliance d’un vaisseau est bénéfique pour le maintien (plusieurs réponses sont correctes) :",
    options: [
      "D’une volémie constante",
      "D’une pression constante",
      "D’un tonus sympathique vasculaire",
      "D’une perfusion constante",
      "D’un contrôle vasomoteur bulbaire",
    ],
    point: 1,
    correctAnswers: [0, 1, 3],
    type: "multiple-choice",
  },
  {
    index: 21,
    question:
      "Le temps de conduction de l’impulsion électrique depuis le noeud sinusal jusqu’au NAV est de :",
    options: ["0,03 sec", "0,09 sec", "0,12 sec", "0,16 sec", "0,21 sec"],
    point: 1,
    correctAnswers: [1],
    type: "single-choice",
  },
  {
    index: 22,
    question:
      "La pression artérielle moyenne permet d’évaluer, choisir la bonne réponse :",
    options: [
      "La variation de la pression artérielle avec l’âge",
      "La perfusion des organes",
      "La pression hydrostatique dans le lit capillaire",
      "La pression artérielle au repos",
      "Les bruits de korotckov",
    ],
    point: 1,
    correctAnswers: [1],
    type: "single-choice",
  },
  {
    index: 23,
    question:
      "Une pression artérielle considérée optimale, si elle est de : (PS : pression systolique ; PD : pression diastolique) (une seule réponse correcte) :",
    options: [
      "PS : 120-129 mmHg et PD : 70-80 mmHg",
      "PS : 130-139 mmHg et PD : 80-89 mmHg",
      "PS < 120 mmHg et PD < 80 mmHg",
      "PS : 120 mmHg et PD : 80 mmHg",
      "PS : 120-139 mmHg et PD : 80-90 mmHg",
    ],
    point: 1,
    correctAnswers: [2],
    type: "single-choice",
  },
  {
    index: 24,
    question:
      "Concernant le potentiel d’action du noeud sinusal, tout ce qui suit est vrai sauf (une seule réponse) :",
    options: [
      "Une pente de dépolarisation diastolique spontanée",
      "Une phase ascendante systolique",
      "Une phase d’hyperpolarisation",
      "Rythmique",
      "Un potentiel de repos de -60 mV",
    ],
    point: 1,
    correctAnswers: [4],
    type: "single-choice",
  },
  {
    index: 25,
    question:
      "Laquelle (Lesquelles) des connexines suivantes est (sont) impliquée(s) dans la conduction auriculoventriculaire ?",
    options: ["hCx32", "hCx35", "hCx40", "hCx43", "hCx45"],
    point: 1,
    correctAnswers: [2, 3, 4],
    type: "multiple-choice",
  },
  {
    index: 26,
    question:
      "Concernant les veines, toutes ces options sont correctes sauf une, laquelle ?",
    options: [
      "Elles sont plus distensibles que les artères",
      "Elles ne possèdent pas une innervation parasympathique",
      "Elles sont plus nombreuses que les artères",
      "Elles contiennent 64% du volume sanguin total",
      "Elles jouent le rôle d’effecteur dans le baroréflexe",
    ],
    point: 1,
    correctAnswers: [1],
    type: "single-choice",
  },
  {
    index: 27,
    question:
      "Toutes ces options s’appliquent au noeud sinusal, à l’exception d’une seule, laquelle ?",
    options: [
      "Pacemaker",
      "Noeud de Keith & Flack",
      "Electrogénique",
      "Bilatérale",
      "Entraîneur",
    ],
    point: 1,
    correctAnswers: [3],
    type: "single-choice",
  },
  {
    index: 28,
    question:
      "Une forte stimulation des récepteurs bêta-adrénergiques des cellules sinusales entraîne (une seule réponse fausse) :",
    options: [
      "Un raccourcissement du potentiel d’action sinusal",
      "Un ralentissement de la repolarisation",
      "Une augmentation de la phase de dépolarisation diastolique",
      "Une accélération de la phase ascendante systolique",
      "Une accélération du rythme sinusal",
    ],
    point: 1,
    correctAnswers: [1],
    type: "single-choice",
  },
  {
    index: 29,
    question:
      "Concernant les mécanismes moléculaires de l’effet de l’acétylcholine dans la régulation du rythme sinusal, toutes les propositions suivantes sont correctes sauf une seule, laquelle ?",
    options: [
      "Diminution du taux d’AMPc intracellulaire",
      "Activation d’une protéine G de type Gi",
      "Phosphorylation des canaux potassiques",
      "Activation des récepteurs M2",
      "Inhibition d’une protéine G de type Go",
    ],
    point: 1,
    correctAnswers: [2],
    type: "single-choice",
  },
  {
    index: 30,
    question:
      "Concernant les caractéristiques physiques de la circulation, toutes les propositions suivantes sont correctes sauf une seule, laquelle ?",
    options: [
      "Les veines sont plus distensibles que les artères",
      "La surface de section des veines est plus grande que celle des artères",
      "La compliance retardée est une caractéristique des artères et veines",
      "La pression artérielle oscille avec le pouls artériel",
      "Le débit sanguin total traversant les poumons est le même que celui de la circulation systémique",
    ],
    point: 1,
    correctAnswers: [2],
    type: "single-choice",
  },
  {
    index: 31,
    question:
      "Lequel des termes suivants est en rapport avec la conduction des potentiels d’action au sein du tissu nodal ?",
    options: [
      "Lusitropisme",
      "Inotropisme",
      "Dromotropisme",
      "Chronotropisme",
      "Bathmotropisme",
    ],
    point: 1,
    correctAnswers: [2],
    type: "single-choice",
  },
  {
    index: 32,
    question:
      "Dans ce qui suit, qui joue le rôle d’effecteur dans la régulation de la pression artérielle ?",
    options: [
      "Les chémorécepteurs",
      "Les poumons",
      "Le bulbe rachidien",
      "Les barorécepteurs",
      "Les vaisseaux sanguins",
    ],
    point: 1,
    correctAnswers: [4],
    type: "single-choice",
  },
  {
    index: 33,
    question:
      "La pression artérielle moyenne est évaluée de la façon suivante (une seule réponse correcte):",
    options: [
      "La moyenne des pressions systolique et diastolique",
      "La pression systolique / 2",
      "La pression diastolique + la pression systolique / 2",
      "60 % de la pression diastolique + 40 % de la pression systolique",
      "50 % de la pression systolique + 50 % de la pression diastolique",
    ],
    point: 1,
    correctAnswers: [3],
    type: "single-choice",
  },
  {
    index: 34,
    question:
      "Parmi les facteurs dont dépend la pression différentielle, nous pouvons citer tout ce qui suit sauf un, lequel ?",
    options: [
      "La compliance des artères",
      "Le volume d’éjection systolique",
      "L’âge",
      "Le volume télé diastolique",
      "La distensibilité des veines",
    ],
    point: 1,
    correctAnswers: [3],
    type: "single-choice",
  },
  {
    index: 35,
    question:
      "La compliance retardée vasculaire dépend de, du, plusieurs réponses sont correctes :",
    options: [
      "La résistance vasculaire",
      "La pression artérielle",
      "Volume sanguin",
      "L’élasticité vasculaire",
      "Débit cardiaque",
    ],
    point: 1,
    correctAnswers: [1, 2, 3],
    type: "multiple-choice",
  },
  {
    index: 36,
    question:
      "Pour augmenter la pression artérielle, l’organisme peut adopter différentes stratégies. Éliminer la mauvaise option :",
    options: [
      "Formation de l’aldostérone",
      "Lusitropisme négative",
      "Augmentation de la résistance des capillaires",
      "Vasoconstriction",
      "Augmentation du retour veineux",
    ],
    point: 1,
    correctAnswers: [1],
    type: "single-choice",
  },
  {
    index: 37,
    question:
      "Concernant la résistance vasculaire, tout ce qui suit est correct sauf (une seule réponse) :",
    options: [
      "Est inversement proportionnelle au diamètre du vaisseau",
      "Diminue avec la diminution de la pression artérielle",
      "Varie avec l’âge",
      "Augmente avec la viscosité du sang",
      "Égale à DP/Q",
    ],
    point: 1,
    correctAnswers: [1],
    type: "single-choice",
  },
  {
    index: 38,
    question:
      "Parmi les facteurs qui modifient la résistance vasculaire, nous avons tout ce qui suit sauf (une seule réponse) :",
    options: [
      "Hématocrite élevée",
      "Ischémie cérébrale",
      "Pouls artériel",
      "Baroréflexes",
      "Chémoréflexes",
    ],
    point: 1,
    correctAnswers: [2],
    type: "single-choice",
  },
  {
    index: 39,
    question:
      "Parmi les mécanismes de régulation de la pression artérielle à long terme nous avons (plusieurs options sont correctes) :",
    options: [
      "Transfert volumique transcapillaire",
      "ADH",
      "Angiotensine-Aldosterone",
      "BNP",
      "ANP",
    ],
    point: 1,
    correctAnswers: [0, 1, 2, 4],
    type: "multiple-choice",
  },
  {
    index: 40,
    question:
      "Pour mesurer la pression artérielle selon la méthode auscultatoire, nous avons besoin de tout ce qui suit sauf (une ou plusieurs réponses) :",
    options: [
      "Blouse blanche",
      "Sphygmomanomètre",
      "Brassard pneumatique",
      "Stéthoscope",
      "Alcool",
    ],
    point: 1,
    correctAnswers: [0, 4],
    type: "multiple-choice",
  },
  {
    index: 41,
    question: "Concernant le pouls artériel, éliminer la mauvaise option :",
    options: [
      "Il diminue avec l’augmentation de la résistance vasculaire",
      "Il correspond aux bruits de Korotckov",
      "Il est plus fort dans les artères rigides",
      "Il est palpable",
      "Il diminue avec la diminution de la pression artérielle",
    ],
    point: 1,
    correctAnswers: [1],
    type: "single-choice",
  },
  {
    index: 42,
    question:
      "Le réflexe de Brainbridge se manifeste par, plusieurs options sont correctes lesquelles ?",
    options: [
      "Dilatation auriculaire",
      "Chronotropisme négatif",
      "Diminution du retour veineux",
      "Vasoconstriction",
      "Inotropisme positif",
    ],
    point: 1,
    correctAnswers: [0, 4],
    type: "multiple-choice",
  },
  {
    index: 43,
    question:
      "En ce qui concerne les cellules automatiques du tissu de conduction, quelle est la ou les proposition(s) exacte(s):",
    options: [
      "Elles sont plus nombreuses que les cellules contractiles",
      "Elles forment la majorité du muscle cardiaque",
      "Les canaux sodiques rapides jouent un rôle rapide dans ces cellules",
      "Il existe une entrée lente de Sodium durant la phase 4",
    ],
    point: 1,
    correctAnswers: [3],
    type: "single-choice",
  },
  {
    index: 44,
    question:
      "Quel(s) phénomène(s) ionique(s) au niveau du potentiel d’action assure(nt) le couplage électromécanique des myocytes ?",
    options: [
      "Ouverture des canaux K+ durant la phase 1",
      "Entrée des ions Na+ durant la phase 0",
      "Entrée lente du Ca++ durant la phase 2",
      "Sortie des ions K+ durant la phase 3",
    ],
    point: 1,
    correctAnswers: [2],
    type: "single-choice",
  },
  {
    index: 45,
    question:
      "En ce qui concerne la précharge ventriculaire, quelle(s) proposition(s) est(sont) correcte(s) ?",
    options: [
      "La précharge peut moduler la performance ventriculaire contractile",
      "La précharge est indépendante de la compliance ventriculaire",
      "La précharge est liée au retour veineux",
      "Elle représente la pression du sang dans la cavité ventriculaire en télé-diastole",
    ],
    point: 1,
    correctAnswers: [0, 2, 3],
    type: "multiple-choice",
  },
  {
    index: 46,
    question:
      "Laquelle (lesquelles) des situations suivantes peut(peuvent) augmenter le débit cardiaque?",
    options: [
      "Une diminution de la contractilité myocardique",
      "Une diminution du volume télé-diastolique",
      "Une diminution de la viscosité du sang",
      "Une diminution de la fréquence cardiaque",
    ],
    point: 1,
    correctAnswers: [2],
    type: "single-choice",
  },
  {
    index: 47,
    question:
      "Quelle (s) phase (s) du cycle cardiaque est (sont) absente (s) en cas de fibrillation auriculaire ?",
    options: [
      "La phase d’éjection systolique",
      "La phase de remplissage lent",
      "La phase de relaxation isovolumétrique",
      "La phase de remplissage rapide terminal",
    ],
    point: 1,
    correctAnswers: [3],
    type: "single-choice",
  },
  {
    index: 48,
    question:
      "En ce qui concerne les fibres preganglionnaires parasympathiques à destination cardiaque, quelle (s) proposition (s) est (sont) fausse (s) ?",
    options: [
      "Elles sont localisées dans la 10eme paire des nerfs crâniens",
      "Elles sont plus courtes que les fibres postganglionnaires",
      "Elles utilisent l’acétylcholine comme médiateur chimique",
      "Elles n’atteignent pas le myocarde ventriculaire",
    ],
    point: 1,
    correctAnswers: [1],
    type: "single-choice",
  },
  {
    index: 49,
    question:
      "Une stimulation du nerf vague peut aboutir au(x) phénomène (s) suivant(s) :",
    options: [
      "Accélération du coeur à 120/min",
      "Perte de connaissance transitoire",
      "Effet dromotrope positif",
      "Action inotrope positive",
    ],
    point: 1,
    correctAnswers: [1],
    type: "single-choice",
  },
  {
    index: 50,
    question:
      "En ce qui concerne le système nerveux sympathique, quelle (s) proposition (s) est (sont) fausse (s) ?",
    options: [
      "Il cause une vasoconstriction des vaisseaux perfusant les muscles.",
      "Son activation augmente les résistances vasculaires périphériques",
      "Son activation stimule la sécrétion d’adrénaline par les glandes médullosurrénales",
      "Son activation a un effet bathmotrope positif",
    ],
    point: 1,
    correctAnswers: [0],
    type: "single-choice",
  },
  {
    index: 51,
    question:
      "Quel (s) phénomène (s) explique (nt) la perte de l’effet modulateur du système barorécepteur dans le cadre d’une hypertension artérielle chronique ?",
    options: [
      "Stimulation du centre bulbaire parasympathique",
      "Sécrétion de Noradrénaline par les glandes médullosurrénales",
      "« Resetting » des barorécepteurs qui se réajustent à une nouvelle valeur de consigne",
      "Augmentation de la contractilité cardiaque",
    ],
    point: 1,
    correctAnswers: [2],
    type: "single-choice",
  },
  {
    index: 52,
    question:
      "Le 1er bruit du coeur B1 est approximativement contemporain de la phase suivante du cycle cardiaque :",
    options: [
      "Phase de remplissage précoce rapide",
      "Phase de remplissage lent",
      "Phase de relaxation isovolumétrique",
      "Phase de contraction isovolumétrique",
    ],
    point: 1,
    correctAnswers: [3],
    type: "single-choice",
  },
  {
    index: 53,
    question:
      "Les propositions suivantes sont en relation avec le thème de la Biomécanique cardiaque. Choisissez les propositions correctes :",
    options: [
      "Durant la phase d’éjection la pression dans le ventricule devient supérieure ou égale à celle de l’aorte",
      "Durant la phase de remplissage le ventricule double de volume avec une pression qui augmente",
      "Le travail mécanique est inversement proportionnel à la surface dans le diagramme P=f(V)",
      "Le diagramme est translaté avec l’effort physique",
    ],
    point: 1,
    correctAnswers: [0, 3],
    type: "multiple-choice",
  },
  {
    index: 54,
    question:
      "Les propositions suivantes sont en relation avec le thème du travail mécanique. Choisissez les bonnes propositions :",
    options: [
      "Le travail mécanique forme une grande partie du rendement cardiaque",
      "L’essentiel de l’énergie est utilisé à mettre le coeur sous tension",
      "Le rendement mécanique peut atteindre 15% à l’effort",
      "Le muscle cardiaque possède une épaisseur plus faible quand la courbure est forte",
      "L’insuffisance cardiaque s’accompagne d’une dilatation du coeur donc d’une augmentation des courbures",
    ],
    point: 1,
    correctAnswers: [1, 4],
    type: "multiple-choice",
  },
  {
    index: 55,
    question:
      "Les propositions suivantes sont en relation avec le thème du contrôle biophysique du coeur. Choisissez les bonnes propositions :",
    options: [
      "La fraction d’éjection est le volume d’éjection divisé par le volume télédiastolique",
      "La loi de Starling : l'augmentation de l'étirement initial des myofibrilles en diastole entraîne une diminution de la force de contraction lors de la systole",
      "L’augmentation de la pré-charge ventriculaire se traduit par une augmentation de la post-charge",
      "La force de contraction dépend de l’étirement initial dans le ventricule",
      "La pression du sang dans l’oreillette provoque une contraction dans le ventricule",
    ],
    point: 1,
    correctAnswers: [0, 3],
    type: "multiple-choice",
  },
  {
    index: 56,
    question:
      "Les propositions suivantes sont en relation avec les paramètres hémodynamiques. Choisissez les bonnes propositions :",
    options: [
      "Une sonde introduite par cathétérisme permet de calculer la pression intra ventriculaire",
      "Durant la protodiastole le ventricule G contient un volume de sang résiduel post-éjection appelé volume télédiastolique",
      "À la fin de la protodiastole la pression intraventriculaire devient inférieure à la pression aortique",
      "Lorsque la pression ventriculaire chute très vite et le volume de cavité reste inchangé on parle de phase de relâchement isovolumique",
      "Le remplissage du ventricule s’effectue en une seule phase rapide",
    ],
    point: 1,
    correctAnswers: [0, 3],
    type: "multiple-choice",
  },
  {
    index: 57,
    question:
      "Les propositions suivantes sont en relation avec l’exploration cardiaque. Choisissez les bonnes propositions :",
    options: [
      "Les volumes ventriculaires peuvent être modélisés par des ellipsoïdes : deux vues à angle différent sont nécessaires pour le calcul",
      "La méthode des indicateurs permet le calcul du débit",
      "Le système de triggering est utilisé durant l’échographie du coeur",
      "L’auscultation par stéthoscope présente une limite temporelle : lorsqu’il s’agit d’un coeur qui bat vite",
      "Le bruit B3 provient de la contraction des oreillettes",
    ],
    point: 1,
    correctAnswers: [0, 1, 2, 3],
    type: "multiple-choice",
  },
  {
    index: 58,
    question:
      "Concernant le système de conduction cardiaque, choisir la ou les propositions correctes :",
    options: [
      "Les noeuds sino-auriculaires et auriculo-ventriculaire sont formés d'un réseau irrégulier de fibres myocardiques spécialisées.",
      "Les fibres nodales sont enchassées dans un tissu fibreux collagénique richement innervé de fibres autonomes.",
      "Les fibres de Purkinje sont disposés sous le péricarde.",
      "Les fibres de conduction sont des cellules musculaires cardiaques spécialisées.",
    ],
    point: 1,
    correctAnswers: [0, 1, 3],
    type: "multiple-choice",
  },
  {
    index: 59,
    question:
      "Concernant la structure de base du système circulatoire, une des propositions est fausse, laquelle ?",
    options: [
      "Tout les vaisseaux assurent leurs apports métaboliques par diffusion à partir de la lumière vasculaire.",
      "La lumière est délimitée par un endothélium.",
      "L'endothélium repose sur une membrane basale",
      "La média est à prédominance musculaire lisse",
      "L'adventice est de nature conjonctive collagénique, plus ou moins élastique",
    ],
    point: 1,
    correctAnswers: [0],
    type: "single-choice",
  },
  {
    index: 60,
    question:
      "Concernant le système artériel, une proposition est fausse, laquelle ?",
    options: [
      "L'expansion et le retour à la normale de la paroi artérielle aprés la systole est assuré par le tissu élastique.",
      "L'aorte est une artère de elastique.",
      "L'artère carotide est une artère de type élastique",
      "L'artère fémorale est de type élastique.",
      "Les artères cérébrales sont de type musculaire.",
    ],
    point: 1,
    correctAnswers: [3],
    type: "single-choice",
  },
  {
    index: 61,
    question:
      "A propos du capillaire à endothélium continu, l'une des propositions suivante est fausse, laquelle ?",
    options: [
      "La cellule endothéliale encercle totalement la lumière.",
      "La membrane cytoplasmique des cellules endothéliales sont liées par des jonctions sérrées.",
      "La cellule endothéliale repose sur une membrane basale continue.",
      "Le pericyte est absent au niveau des capillaires à endothélium continu.",
      "La diffusion passive est l'une des modalités d'échange a travers le cytoplasme endothélial",
    ],
    point: 1,
    correctAnswers: [3],
    type: "single-choice",
  },
];

export default questions;
