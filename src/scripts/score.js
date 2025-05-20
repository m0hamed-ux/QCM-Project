const questionsList = [
    [
        {
            ques: "Quel sera le résultat de ce code JavaScript ?\n\n```js\nlet a = [1, 2, 3];\nlet b = a;\nb.push(4);\nconsole.log(a);\n```",
            choises: [
                "[1, 2, 3, 4]",
                "[1, 2, 3]",
                "Erreur"
            ],
            correctAnswer: "[1, 2, 3, 4]",
            hint: "Les tableaux sont passés par référence en JavaScript."
        },
        {
            ques: "Que va afficher ce code ?\n\n```js\nconsole.log(typeof null);\n```",
            choises: [
                "\"object\"",
                "\"null\"",
                "\"undefined\""
            ],
            correctAnswer: "\"object\"",
            hint: "C'est un bug historique de JavaScript."
        },
        {
            ques: "Quelle sera la sortie de ce code ?\n\n```js\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}\n```",
            choises: [
                "3 3 3",
                "0 1 2",
                "0 1 2 3"
            ],
            correctAnswer: "3 3 3",
            hint: "La variable 'i' n'est pas bloquée par le scope de la boucle."
        },
        {
            ques: "Quelle est la différence principale entre '==' et '===' en JavaScript ?",
            choises: [
                "'==' effectue une conversion de type, '===' non",
                "'===' effectue une conversion de type, '==' non",
                "Aucune différence"
            ],
            correctAnswer: "'==' effectue une conversion de type, '===' non",
            hint: "L'un compare la valeur et le type, l'autre seulement la valeur."
        },
        {
            ques: "Quel sera le résultat de ce code ?\n\n```js\nlet x = 10;\n(function() {\n  let x = 20;\n  console.log(x);\n})();\nconsole.log(x);\n```",
            choises: [
                "20 puis 10",
                "10 puis 20",
                "20 puis 20"
            ],
            correctAnswer: "20 puis 10",
            hint: "Le scope de la fonction IIFE masque la variable globale."
        },
        {
            ques: "Que retourne ce code ?\n\n```js\nconsole.log([...'hello'].length);\n```",
            choises: [
                "5",
                "4",
                "Erreur"
            ],
            correctAnswer: "5",
            hint: "L'opérateur spread divise la chaîne en caractères."
        },
        {
            ques: "Quel sera le résultat de ce code ?\n\n```js\nlet obj = {a: 1};\nObject.freeze(obj);\nobj.a = 2;\nconsole.log(obj.a);\n```",
            choises: [
                "1",
                "2",
                "undefined"
            ],
            correctAnswer: "1",
            hint: "Object.freeze empêche la modification des propriétés."
        },
        {
            ques: "Quelle est la sortie de ce code ?\n\n```js\nconsole.log(0.1 + 0.2 === 0.3);\n```",
            choises: [
                "false",
                "true",
                "undefined"
            ],
            correctAnswer: "false",
            hint: "Problème de précision des nombres à virgule flottante."
        },
        {
            ques: "Que va afficher ce code ?\n\n```js\nlet foo = (function() {\n  return typeof arguments;\n})();\nconsole.log(foo);\n```",
            choises: [
                "\"object\"",
                "\"array\"",
                "\"undefined\""
            ],
            correctAnswer: "\"object\"",
            hint: "L'objet 'arguments' est de type 'object'."
        },
        {
            ques: "Quelle sera la sortie de ce code ?\n\n```js\nlet a = [1, 2, 3];\nlet b = a.slice();\nb[0] = 99;\nconsole.log(a[0]);\n```",
            choises: [
                "1",
                "99",
                "undefined"
            ],
            correctAnswer: "1",
            hint: "slice() crée une copie superficielle du tableau."
        }
    ],
    [
        {
            ques: "Quelle balise HTML5 est la plus appropriée pour entourer le contenu principal d'une page web ?",
            choises: [
                "<main>",
                "<section>",
                "<div>"
            ],
            correctAnswer: "<main>",
            hint: "Elle indique le contenu principal du document."
        },
        {
            ques: "Que va afficher ce code HTML ?\n\n```html\n<p>Hello<br>World</p>\n```",
            choises: [
                "Hello (saut de ligne) World",
                "Hello World (sur une seule ligne)",
                "Erreur"
            ],
            correctAnswer: "Hello (saut de ligne) World",
            hint: "La balise <br> force un retour à la ligne."
        },
        {
            ques: "Quelle balise permet d'intégrer du code JavaScript dans une page HTML ?",
            choises: [
                "<script>",
                "<js>",
                "<javascript>"
            ],
            correctAnswer: "<script>",
            hint: "C'est la balise standard pour le code JS."
        },
        {
            ques: "Quel attribut HTML améliore l'accessibilité pour les lecteurs d'écran sur une image ?",
            choises: [
                "alt",
                "title",
                "src"
            ],
            correctAnswer: "alt",
            hint: "Il décrit l'image pour les utilisateurs non-voyants."
        },
        {
            ques: "Que fait ce code HTML ?\n\n```html\n<form action=\"/submit\" method=\"POST\">\n  <input type=\"text\" name=\"user\">\n  <button type=\"submit\">Envoyer</button>\n</form>\n```",
            choises: [
                "Envoie les données au serveur via POST",
                "Envoie les données au serveur via GET",
                "Ne fait rien"
            ],
            correctAnswer: "Envoie les données au serveur via POST",
            hint: "Regardez l'attribut 'method'."
        },
        {
            ques: "Quelle balise HTML5 est utilisée pour regrouper des éléments de navigation ?",
            choises: [
                "<nav>",
                "<aside>",
                "<header>"
            ],
            correctAnswer: "<nav>",
            hint: "Elle est dédiée à la navigation."
        },
        {
            ques: "Que va afficher ce code HTML ?\n\n```html\n<ol start=\"3\">\n  <li>Un</li>\n  <li>Deux</li>\n</ol>\n```",
            choises: [
                "Une liste ordonnée commençant à 3",
                "Une liste ordonnée commençant à 1",
                "Erreur"
            ],
            correctAnswer: "Une liste ordonnée commençant à 3",
            hint: "L'attribut 'start' définit le numéro de départ."
        },
        {
            ques: "Quel attribut HTML permet d'ouvrir un lien dans un nouvel onglet ?",
            choises: [
                "target=\"_blank\"",
                "newtab=\"true\"",
                "rel=\"external\""
            ],
            correctAnswer: "target=\"_blank\"",
            hint: "C'est un attribut de la balise <a>."
        },
        {
            ques: "Que fait ce code HTML ?\n\n```html\n<input type=\"checkbox\" checked>\n```",
            choises: [
                "Affiche une case cochée par défaut",
                "Affiche une case décochée",
                "Affiche un bouton radio"
            ],
            correctAnswer: "Affiche une case cochée par défaut",
            hint: "L'attribut 'checked' définit l'état initial."
        },
        {
            ques: "Quelle balise HTML5 est utilisée pour regrouper du contenu qui peut être placé en dehors du flux principal (ex: une barre latérale) ?",
            choises: [
                "<aside>",
                "<section>",
                "<footer>"
            ],
            correctAnswer: "<aside>",
            hint: "Elle est utilisée pour du contenu complémentaire."
        }
    ],
    [
        {
            ques: "Quelle sera la couleur du texte ?\n\n```html\n<p style=\"color: red;\" class=\"blue\">Bonjour</p>\n<style>.blue { color: blue; }</style>\n```",
            choises: [
                "rouge",
                "bleu",
                "noir"
            ],
            correctAnswer: "rouge",
            hint: "L'attribut style a une spécificité plus élevée que la classe."
        },
        {
            ques: "Que fait la propriété CSS suivante ?\n\n```css\n.box { box-sizing: border-box; }\n```",
            choises: [
                "Inclut la bordure et le padding dans la largeur/hauteur",
                "Ajoute une bordure autour de la boîte",
                "Change la couleur de la boîte"
            ],
            correctAnswer: "Inclut la bordure et le padding dans la largeur/hauteur",
            hint: "Cela affecte le calcul de la taille de l'élément."
        },
        {
            ques: "Quelle sera la taille de police du texte ?\n\n```html\n<div style=\"font-size: 2em;\">\n  <span style=\"font-size: 0.5em;\">Test</span>\n</div>\n```",
            choises: [
                "1em de la div parente",
                "2em de la racine",
                "0.5em de la div parente"
            ],
            correctAnswer: "1em de la div parente",
            hint: "Les em sont relatifs à l'élément parent."
        },
        {
            ques: "Que fait ce code CSS ?\n\n```css\np + ul { margin-top: 0; }\n```",
            choises: [
                "Sélectionne tout ul précédé d'un p",
                "Sélectionne tous les ul",
                "Sélectionne tous les p suivis de ul"
            ],
            correctAnswer: "Sélectionne tout ul précédé d'un p",
            hint: "C'est le sélecteur d'adjacence directe."
        },
        {
            ques: "Quelle propriété CSS permet de créer un effet de transparence sur un élément ?",
            choises: [
                "opacity",
                "visibility",
                "z-index"
            ],
            correctAnswer: "opacity",
            hint: "Elle accepte une valeur entre 0 et 1."
        },
        {
            ques: "Que va afficher ce code ?\n\n```html\n<div style=\"display: none;\">Caché</div>\n<div style=\"visibility: hidden;\">Invisible</div>\n```",
            choises: [
                "Aucun texte n'est visible",
                "Seul 'Invisible' occupe de l'espace mais n'est pas visible",
                "Les deux sont visibles"
            ],
            correctAnswer: "Seul 'Invisible' occupe de l'espace mais n'est pas visible",
            hint: "display:none retire l'élément du flux, visibility:hidden le masque seulement."
        },
        {
            ques: "Quelle est la spécificité du sélecteur suivant ?\n\n```css\n#id .class p\n```",
            choises: [
                "1,1,1",
                "1,0,2",
                "0,2,1"
            ],
            correctAnswer: "1,1,1",
            hint: "id=1, class=1, élément=1"
        },
        {
            ques: "Que fait la propriété CSS suivante ?\n\n```css\nbody { margin: 0; }\n```",
            choises: [
                "Supprime la marge par défaut du body",
                "Ajoute une marge de 0 autour de tous les éléments",
                "Aucune action"
            ],
            correctAnswer: "Supprime la marge par défaut du body",
            hint: "Le body a une marge par défaut dans la plupart des navigateurs."
        },
        {
            ques: "Quelle propriété CSS permet de faire défiler un élément horizontalement si son contenu dépasse ?",
            choises: [
                "overflow-x",
                "scroll-x",
                "overflow"
            ],
            correctAnswer: "overflow-x",
            hint: "overflow-x contrôle le débordement horizontal."
        },
        {
            ques: "Que fait ce code CSS ?\n\n```css\n@media (max-width: 600px) {\n  body { background: red; }\n}\n```",
            choises: [
                "Change le fond du body en rouge sur petits écrans",
                "Change le fond du body en rouge sur tous les écrans",
                "Ne fait rien"
            ],
            correctAnswer: "Change le fond du body en rouge sur petits écrans",
            hint: "C'est une media query."
        }
    ],
    [
         {
            ques: "Quel hook React permet de gérer l'état local dans un composant fonctionnel ?",
            choises: [
                "useState",
                "useEffect",
                "useContext"
            ],
            correctAnswer: "useState",
            hint: "C'est le hook le plus utilisé pour l'état local."
        },
        {
            ques: "Que va afficher ce code ?\n\n```jsx\nfunction App() {\n  const [count, setCount] = React.useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}\n```\n\nAprès 3 clics sur le bouton, que voit-on ?",
            choises: [
                "3",
                "0",
                "1"
            ],
            correctAnswer: "3",
            hint: "Chaque clic incrémente l'état local."
        },
        {
            ques: "Quel hook React est utilisé pour effectuer des effets de bord (side effects) ?",
            choises: [
                "useEffect",
                "useState",
                "useReducer"
            ],
            correctAnswer: "useEffect",
            hint: "Il s'exécute après le rendu du composant."
        },
        {
            ques: "Que va afficher ce code ?\n\n```jsx\nfunction App() {\n  const [value] = React.useState('Hello');\n  return <div>{typeof value}</div>;\n}\n```",
            choises: [
                "\"string\"",
                "\"object\"",
                "\"undefined\""
            ],
            correctAnswer: "\"string\"",
            hint: "La valeur initiale est une chaîne de caractères."
        },
        {
            ques: "Quelle est la bonne façon de passer une propriété 'name' à un composant enfant ?",
            choises: [
                "<Child name=\"John\" />",
                "<Child: name='John' />",
                "<Child>name=John</Child>"
            ],
            correctAnswer: "<Child name=\"John\" />",
            hint: "On passe les props comme attributs HTML."
        },
        {
            ques: "Que va afficher ce code ?\n\n```jsx\nfunction App() {\n  const [count, setCount] = React.useState(1);\n  React.useEffect(() => {\n    setCount(2);\n  }, []);\n  return <div>{count}</div>;\n}\n```",
            choises: [
                "2",
                "1",
                "Erreur"
            ],
            correctAnswer: "2",
            hint: "useEffect s'exécute après le premier rendu."
        },
        {
            ques: "Quel est le but du hook useContext dans React ?",
            choises: [
                "Partager des données globales entre composants",
                "Gérer l'état local",
                "Créer des effets de bord"
            ],
            correctAnswer: "Partager des données globales entre composants",
            hint: "Il permet d'éviter le prop drilling."
        },
        {
            ques: "Que va afficher ce code ?\n\n```jsx\nfunction App() {\n  const [items] = React.useState([1,2,3]);\n  return <div>{items.map(i => i * 2).join(',')}</div>;\n}\n```",
            choises: [
                "2,4,6",
                "1,2,3",
                "Erreur"
            ],
            correctAnswer: "2,4,6",
            hint: "On multiplie chaque élément par 2."
        },
        {
            ques: "Quelle méthode permet de rendre une liste d'éléments en React ?",
            choises: [
                "Array.map()",
                "Array.forEach()",
                "Array.filter()"
            ],
            correctAnswer: "Array.map()",
            hint: "Elle retourne un nouveau tableau d'éléments."
        },
        {
            ques: "Que va afficher ce code ?\n\n```jsx\nfunction App() {\n  const [text, setText] = React.useState('A');\n  return <input value={text} onChange={e => setText(e.target.value)} />;\n}\n```\n\nSi on tape 'B' dans l'input, que contient l'input ?",
            choises: [
                "B",
                "A",
                "AB"
            ],
            correctAnswer: "B",
            hint: "L'état est mis à jour à chaque frappe."
        }
    ],
    [
         {
            ques: "Quel est le CDN officiel pour inclure Bootstrap CSS dans un projet ?",
            choises: [
                "https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css",
                "https://cdn.bootcss.com/bootstrap/bootstrap.min.css",
                "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.0.0/css/bootstrap.css"
            ],
            correctAnswer: "https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css",
            hint: "C'est le CDN recommandé dans la documentation officielle."
        },
        {
            ques: "Quelle classe Bootstrap permet de créer un bouton principal bleu ?",
            choises: [
                "btn btn-primary",
                "btn btn-success",
                "btn btn-info"
            ],
            correctAnswer: "btn btn-primary",
            hint: "La classe 'primary' est bleue par défaut."
        },
        {
            ques: "Quelle classe Bootstrap permet de rendre un élément responsive et centré horizontalement ?",
            choises: [
                "mx-auto",
                "text-center",
                "d-flex"
            ],
            correctAnswer: "mx-auto",
            hint: "Elle applique une marge automatique à gauche et à droite."
        },
        {
            ques: "Que fait la classe Bootstrap 'container-fluid' ?",
            choises: [
                "Crée un conteneur pleine largeur",
                "Crée un conteneur centré et fixe",
                "Ajoute un fond bleu"
            ],
            correctAnswer: "Crée un conteneur pleine largeur",
            hint: "Elle occupe toute la largeur de la fenêtre."
        },
        {
            ques: "Quelle classe Bootstrap permet de masquer un élément sur mobile uniquement ?",
            choises: [
                "d-none d-md-block",
                "d-block d-md-none",
                "d-sm-none"
            ],
            correctAnswer: "d-none d-md-block",
            hint: "L'élément est caché en dessous de 'md'."
        },
        {
            ques: "Quel composant Bootstrap permet de créer un menu déroulant ?",
            choises: [
                "Dropdown",
                "Accordion",
                "Carousel"
            ],
            correctAnswer: "Dropdown",
            hint: "Il affiche une liste d'options cachées."
        },
        {
            ques: "Quelle classe Bootstrap permet d'ajouter une bordure arrondie à un élément ?",
            choises: [
                "rounded",
                "border-circle",
                "border-rounded"
            ],
            correctAnswer: "rounded",
            hint: "C'est la classe utilitaire pour les coins arrondis."
        },
        {
            ques: "Que fait la classe Bootstrap 'row' ?",
            choises: [
                "Crée une ligne pour la grille",
                "Crée une colonne",
                "Ajoute un espacement vertical"
            ],
            correctAnswer: "Crée une ligne pour la grille",
            hint: "Elle sert à organiser les colonnes."
        },
        {
            ques: "Quelle classe Bootstrap permet d'ajouter un espacement intérieur (padding) de 3 ?",
            choises: [
                "p-3",
                "m-3",
                "pt-3"
            ],
            correctAnswer: "p-3",
            hint: "p-3 = padding sur tous les côtés."
        },
        {
            ques: "Que fait la classe Bootstrap 'text-danger' ?",
            choises: [
                "Colore le texte en rouge",
                "Colore le texte en vert",
                "Met le texte en gras"
            ],
            correctAnswer: "Colore le texte en rouge",
            hint: "Danger = rouge dans Bootstrap."
        }
    ],
]

const POINTS_PER_CORRECT_ANSWER = 100;
const POINTS_DEDUCTION_PER_HINT = 20;
const POINTS_DEDUCTION_PER_INCORRECT = 30;
const POINTS_DEDUCTION_PER_SKIP = 50;
const TIME_BONUS_THRESHOLD = 300; 
const MAX_TIME_BONUS = 500;

function calculatePoints(score, hintsUsed, incorrectAnswers, skippedAnswers, timeSpent) {
    let points = score * POINTS_PER_CORRECT_ANSWER;
    
    points -= hintsUsed * POINTS_DEDUCTION_PER_HINT;
    
    points -= incorrectAnswers * POINTS_DEDUCTION_PER_INCORRECT;
    
    points -= skippedAnswers * POINTS_DEDUCTION_PER_SKIP;
    
    if (timeSpent < TIME_BONUS_THRESHOLD) {
        const timeBonus = Math.floor((TIME_BONUS_THRESHOLD - timeSpent) / TIME_BONUS_THRESHOLD * MAX_TIME_BONUS);
        points += timeBonus;
    }
    
    return Math.max(0, Math.floor(points));
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function calcScore(){
    let score = localStorage.getItem('score') ? parseFloat(localStorage.getItem('score')) : 0;
    score = (!score)?0:score;
    let jsScore = localStorage.getItem('jsScore') ? parseFloat(localStorage.getItem('jsScore')) : 0;
    let htmlScore = localStorage.getItem('htmlScore') ? parseFloat(localStorage.getItem('htmlScore')) : 0;
    let cssScore = localStorage.getItem('cssScore') ? parseFloat(localStorage.getItem('cssScore')) : 0;
    let reactScore = localStorage.getItem('reactScore') ? parseFloat(localStorage.getItem('reactScore')) : 0;
    let bootstrapScore = localStorage.getItem('bootstrapScore') ? parseFloat(localStorage.getItem('bootstrapScore')) : 0;
    score = (jsScore + htmlScore + cssScore + reactScore + bootstrapScore) / 5;
    score = (0 > score || score >10)?0:score

    const timeSpent = localStorage.getItem('fullTime') ? parseInt(localStorage.getItem('fullTime')) : 0;
    localStorage.setItem('lastQuizTime', timeSpent);

    let userAnswers = localStorage.getItem('userAnswers') ? JSON.parse(localStorage.getItem('userAnswers')) : [[], [], [], [], []];
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let totalSkipped = 0;
    let hintsUsed = localStorage.getItem('hintsUsed') ? parseInt(localStorage.getItem('hintsUsed')) : 0;

    const points = calculatePoints(score * 10, hintsUsed, totalIncorrect, totalSkipped, timeSpent);
    localStorage.setItem('lastQuizPoints', points);

    document.getElementById('score').innerText = `${score.toFixed(1)}/10`;
    document.getElementById('jsTxt').innerText = `${jsScore.toFixed(1)}/10`;
    document.getElementById('htmlTxt').innerText = `${htmlScore.toFixed(1)}/10`;
    document.getElementById('cssTxt').innerText = `${cssScore.toFixed(1)}/10`;
    document.getElementById('reactTxt').innerText = `${reactScore.toFixed(1)}/10`;
    document.getElementById('bootstrapTxt').innerText = `${bootstrapScore.toFixed(1)}/10`;

    const timeElement = document.getElementById('totalTime');
    if (timeElement) {
        timeElement.innerHTML = `${formatTime(timeSpent)} <i class="bi bi-clock-fill"></i>`;
    }

    const pointsElement = document.getElementById('totalPoints');
    if (pointsElement) {
        pointsElement.innerHTML = `${points} <i class="bi bi-star-fill"></i>`;
    }

    let prg = document.getElementById('prg');
    document.getElementById('jsSc').setAttribute('stroke-dasharray', `${jsScore * 10}, 100`)
    document.getElementById('htmlSc').setAttribute('stroke-dasharray', `${htmlScore * 10}, 100`)
    document.getElementById('cssSc').setAttribute('stroke-dasharray', `${cssScore * 10}, 100`)
    document.getElementById('reactSc').setAttribute('stroke-dasharray', `${reactScore * 10}, 100`)
    document.getElementById('bootstrapSc').setAttribute('stroke-dasharray', `${bootstrapScore * 10}, 100`)

    let hintsElem = document.querySelector('.bg-yellow-500 p');
    if (hintsElem) hintsElem.innerHTML = `${hintsUsed} <i class="bi bi-lightbulb-fill"></i>`;
    for (let i = 0; i < 5; i++) {
        let sectionScore = 0;
        let sectionIncorrect = 0;
        let sectionSkipped = 0;
        let answers = userAnswers[i] || [];
        let sectionKey = ['jsScore', 'htmlScore', 'cssScore', 'reactScore', 'bootstrapScore'][i];
        let sectionTotal = localStorage.getItem(sectionKey) ? parseFloat(localStorage.getItem(sectionKey)) : 0;
        sectionScore = Math.round(sectionTotal);
        totalCorrect += sectionScore;
        for (let j = 0; j < answers.length; j++) {
            if (answers[j] === "" || answers[j] === " " || answers[j] === null || typeof answers[j] === "undefined") {
                sectionSkipped++;
            }
        }
        sectionIncorrect = answers.length - sectionScore - sectionSkipped;
        if (sectionIncorrect < 0) sectionIncorrect = 0;
        totalIncorrect += sectionIncorrect;
        totalSkipped += sectionSkipped;
    }
    let correctElem = document.querySelector('.bg-green-500 p');
    if (correctElem) correctElem.innerHTML = `${totalCorrect} <i class="bi bi-check-circle-fill"></i>`;
    let incorrectElem = document.querySelector('.bg-red-500 p');
    if (incorrectElem) incorrectElem.innerHTML = `${totalIncorrect} <i class="bi bi-x-circle-fill"></i>`;
    let skippedElem = document.querySelector('.bg-slate-500 p');
    if (skippedElem) skippedElem.innerHTML = `${totalSkipped} <i class="bi bi-skip-end-fill"></i>`;
    let progress = 0
    let target = (score > 0)?(score * 100 / 10):1
    let animation = setInterval(() => {
        if (progress >= target) {
            clearInterval(animation)
        } else {
            progress += 1
            prg.setAttribute('stroke-dasharray', `${progress}, 100`)
        }
    }, 10);
    let comment = document.getElementById('comment')
    let commentDesc = document.getElementById('commentDesc')
    if (score <= 2) {
        comment.innerText = 'Pas de chance cette fois !'
        commentDesc.innerText = 'Continue à t\'entraîner et tu t\'amélioreras.'
    } else if (score <= 5) {
        comment.innerText = 'Pas mal !'
        commentDesc.innerText = 'Tu progresses, continue comme ça !'
    } else if (score <= 8) {
        comment.innerText = 'Super boulot !'
        commentDesc.innerText = 'Tu es vraiment bon, presque parfait !'
    } else {
        comment.innerText = 'Partie parfaite !'
        commentDesc.innerText = 'Félicitations ! Tu as tout déchiré, serais-tu une IA ?'
    }

    const sectionBlocks = [
        {selector: '.jssection', index: 0, name: 'JavaScript'},
        {selector: '.bg-orange-500', index: 1, name: 'HTML'},
        {selector: '.bg-blue-500', index: 2, name: 'CSS'},
        {selector: '.bg-cyan-500', index: 3, name: 'React'},
        {selector: '.bg-purple-500', index: 4, name: 'Bootstrap'}
    ];
    sectionBlocks.forEach(block => {
        const el = document.querySelector(block.selector);
        if (el) {
            el.style.cursor = 'pointer';
            el.onclick = () => showSectionReview(block.index, block.name);
        }
    });
}

function showSectionReview(sectionIndex, sectionName) {
    const modal = document.getElementById('sectionReviewModal');
    const title = document.getElementById('sectionReviewTitle');
    const content = document.getElementById('sectionReviewContent');
    title.innerText = `Questions de ${sectionName}`;

    const questions = questionsList[sectionIndex] || [];
    let userAnswers = localStorage.getItem('userAnswers') ? JSON.parse(localStorage.getItem('userAnswers')) : [[], [], [], [], []];
    const answers = userAnswers[sectionIndex] || [];

    if (!questions.length) {
        content.innerHTML = '<p>Impossible de charger les questions.</p>';
        modal.classList.remove('hidden');
        return;
    }

    let html = '';
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const userAns = answers[i];
        const correctAns = q.correctAnswer;

        let questionHTML = '';
        if (q.ques.includes('```')) {
            const codeRegex = /```(\w*)\n([\s\S]*?)```/g;
            questionHTML = q.ques.replace(codeRegex, (match, lang, code) => {
                code = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                return `<pre><code class="language-${lang}">${code}</code></pre>`;
            });

            const questionPart = q.ques.split('```')[0];
            if (questionPart.trim() !== "") {
                questionHTML = `<span class="text-blue-900 font-semibold">${questionPart.trim()}</span>` + questionHTML.replace(questionPart, "");
            }
        } else {
            questionHTML = `<span class="text-blue-900 font-semibold">${q.ques.replace(/\n/g, '<br>')}</span>`;
        }

        html += `<div class="mb-6 p-0 border-2 border-slate-200 rounded-lg bg-white">
            <div class="font-semibold p-4">${questionHTML}</div>
            <div class="flex flex-col gap-2 px-4 pb-4">`;

        for (let c = 0; c < q.choises.length; c++) {
            let choice = q.choises[c];
            let baseClass = 'block p-4 border-2 border-b-4 mt-2 rounded-lg cursor-default';
            let colorClass = 'border-slate-200 bg-white text-slate-700';
            if (choice === userAns && userAns === correctAns) {
                colorClass = 'border-green-400 bg-green-50 text-green-700';
            } else if (choice === userAns && userAns !== correctAns) {
                colorClass = 'border-red-400 bg-red-50 text-red-700';
            } else if (choice === correctAns && userAns !== correctAns) {
                colorClass = 'border-green-400 bg-green-50 text-green-700';
            }
            html += `<div class="${baseClass} ${colorClass}">${choice.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>`;
        }

        html += `</div>`;
        html += `</div>`;
    }

    content.innerHTML = html;
    modal.classList.remove('hidden');

    if (window.hljs) {
        hljs.highlightAll();
    }
}


function closeSectionReview() {
    document.getElementById('sectionReviewModal').classList.add('hidden');
}