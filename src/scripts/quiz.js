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
        // React Quiz (10 questions, some with code execution)
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
        // Bootstrap Quiz (10 questions)
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



let question = localStorage.getItem('question') || 1;
let section = localStorage.getItem('section') || 'html';
// Now userAnswers has 5 arrays: html, css, js, react, bootstrap
let userAnswers = (localStorage.getItem('userAnswers')) ? JSON.parse(localStorage.getItem('userAnswers')) : [[], [], [], [], []];
// Add react and bootstrap to sections
let sections = ['html', 'css', 'js', 'react', 'bootstrap'];
// Ensure userAnswers has 5 arrays (one for each section)
while (userAnswers.length < 5) userAnswers.push([]);

// Points system
let points = parseInt(localStorage.getItem('points') || '50');

function updatePointsDisplay() {
    document.getElementById('points').textContent = points;
}

// Timer variables
let timer;
let timeLeft = 15;
let fullTime = parseInt(localStorage.getItem('fullTime') || '0');

function startTimer() {
    timeLeft = 15;
    document.getElementById('timer').textContent = timeLeft;
    
    if (timer) clearInterval(timer);
    
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            fullTime += 15; // Add full time when timer ends
            localStorage.setItem('fullTime', fullTime);
            document.getElementById('slow').style.display = 'block'
            setTimeout(() => {
                document.getElementById('slow').style.display = 'none';
            }, 4000);
            skip();
        }
    }, 1000);
}

function loadData() {
    // Accept new sections in validation
    if (
        !section ||
        section.trim() === '' ||
        !['javascript', 'html', 'css', 'js', 'react', 'bootstrap'].includes(section.toLowerCase())
    ) {
        document.getElementById('quizBox').style.display = 'none';
        document.getElementById('errorBox').style.display = 'flex';
        return;
    }
    jsProgress = (localStorage.getItem('jsProgress')) ? parseInt(localStorage.getItem('jsProgress')) : 1;
    htmlProgress = (localStorage.getItem('htmlProgress')) ? parseInt(localStorage.getItem('htmlProgress')) : 1;
    cssProgress = (localStorage.getItem('cssProgress')) ? parseInt(localStorage.getItem('cssProgress')) : 1;
    reactProgress = (localStorage.getItem('reactProgress')) ? parseInt(localStorage.getItem('reactProgress')) : 1;
    bootstrapProgress = (localStorage.getItem('bootstrapProgress')) ? parseInt(localStorage.getItem('bootstrapProgress')) : 1;

    document.getElementById('title').innerText = section;

    // Determine which section is active
    if (section.toLocaleLowerCase() == "javascript" || section.toLocaleLowerCase() == "js") {
        questions = questionsList[0];
        Qnum = jsProgress;
        sectionData = 'jsProgress';
        sectionIndex = 0;
    } else if (section.toLocaleLowerCase() == "html") {
        questions = questionsList[1];
        Qnum = htmlProgress;
        sectionData = 'htmlProgress';
        sectionIndex = 1;
    } else if (section.toLocaleLowerCase() == "css") {
        questions = questionsList[2];
        Qnum = cssProgress;
        sectionData = 'cssProgress';
        sectionIndex = 2;
    } else if (section.toLocaleLowerCase() == "react") {
        questions = questionsList[3];
        Qnum = reactProgress;
        sectionData = 'reactProgress';
        sectionIndex = 3;
    } else if (section.toLocaleLowerCase() == "bootstrap") {
        questions = questionsList[4];
        Qnum = bootstrapProgress;
        sectionData = 'bootstrapProgress';
        sectionIndex = 4;
    } else {
        // fallback, should not happen due to validation above
    }
    updatePointsDisplay(); // Update points display when quiz loads
    refresh();
    startTimer();
}

function refresh() {
    closeHint();
    document.getElementById('Question').style.borderColor = 'rgb(226 232 240 / var(--tw-border-opacity, 1)';
    let num = document.getElementById('Qnumber');
    let pLine = document.getElementById('progressLine');
    let questionText = document.getElementById('questionText');

    let q1 = document.getElementById('choice1');
    let q2 = document.getElementById('choice2');
    let q3 = document.getElementById('choice3');

    let q1Label = document.getElementById('choice1Label');
    let q2Label = document.getElementById('choice2Label');
    let q3Label = document.getElementById('choice3Label');
    if (Qnum <= 10) {
        num.innerText = `${Qnum}/10`;
        pLine.style.width = `${Qnum * 100 / 10}%`;
        const ques = questions[Qnum - 1].ques;
        if (ques.includes('```')) {
            const codeRegex = /```(\w*)\n([\s\S]*?)```/g;
            let html = ques.replace(codeRegex, (match, lang, code) => {
                code = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                let bgColor = "bg-slate-100";
                let borderColor = "";
                if (lang) {
                    if (lang.toLowerCase() === "js" || lang.toLowerCase() === "javascript") {
                        bgColor = "bg-yellow-50";
                        borderColor = "border-l-4 border-yellow-400";
                    } else if (lang.toLowerCase() === "html") {
                        bgColor = "bg-pink-50";
                        borderColor = "border-l-4 border-pink-400";
                    } else if (lang.toLowerCase() === "css") {
                        bgColor = "bg-blue-50";
                        borderColor = "border-l-4 border-blue-400";
                    } else if (lang.toLowerCase() === "jsx" || lang.toLowerCase() === "react") {
                        bgColor = "bg-cyan-50";
                        borderColor = "border-l-4 border-cyan-400";
                    }
                }
                return `<pre class="${bgColor} ${borderColor} rounded p-0 overflow-hidden my-2 overflow-x-auto"><code${lang ? ' class="language-' + lang + '"' : ''}>${code}</code></pre>`;
            });
            let questionPart = ques.split('```')[0];
            if (questionPart.trim() !== "") {
                html = `<span class="text-blue-900 font-semibold">${questionPart.trim()}</span>` + html.replace(questionPart, "");
            }
            questionText.innerHTML = html;
            hljs.highlightAll();
        } else {
            questionText.innerHTML = `<span class="text-blue-900 font-semibold">${ques}</span>`;
        }
        q1.value = questions[Qnum - 1].choises[0];
        q2.value = questions[Qnum - 1].choises[1];
        q3.value = questions[Qnum - 1].choises[2];

        q1Label.innerText = questions[Qnum - 1].choises[0];
        q2Label.innerText = questions[Qnum - 1].choises[1];
        q3Label.innerText = questions[Qnum - 1].choises[2];
        for (elt of [q1, q2, q3]) {
            elt.checked = false;
        }
    }
    startTimer(); // Start timer for new question
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        nextQuestion();
    }
});

function nextQuestion() {
    let chk = null;
    for (elt of document.getElementsByName('answer')) {
        if (elt.checked) {
            chk = elt;
            break;
        }
    }
    if (chk) {
        // Add remaining time to fullTime
        fullTime += (15 - timeLeft);
        localStorage.setItem('fullTime', fullTime);
        
        if (Qnum < 10) {
            Qnum++;
            localStorage.setItem(sectionData, Qnum);
            userAnswers[sectionIndex].push(chk.value);
            localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
            refresh();
        } else {
            localStorage.setItem(sectionData, Qnum);
            userAnswers[sectionIndex].push(chk.value);
            localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
            refresh();
            if (section === 'bootstrap') {
                result();
            } else {
                result();
                localStorage.setItem('section', sections[sections.indexOf(section) + 1]);
                localStorage.setItem('question', 1);
                window.location.href = '';
            }
        }
    } else {
        document.getElementById('Question').style.borderColor = 'red';
    }
}

function skip() {
    // Add remaining time to fullTime
    fullTime += (15 - timeLeft);
    localStorage.setItem('fullTime', fullTime);
    
    if (Qnum < 10) {
        Qnum++;
        localStorage.setItem(sectionData, Qnum);
        userAnswers[sectionIndex].push("");
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
        refresh();
    } else if (Qnum == 10) {
        localStorage.setItem(sectionData, Qnum);
        userAnswers[sectionIndex].push("");
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
        refresh();
        if (section === 'bootstrap') {
            result();
        } else {
            result();
            localStorage.setItem('section', sections[sections.indexOf(section) + 1]);
            localStorage.setItem('question', 1);
            window.location.href = '';
        }
    }
}

function result() {
    // Now totals for all 5 sections
    let totals = [0, 0, 0, 0, 0];
    let total = totals[sectionIndex];
    for (let i = 0; i < 10; i++) {
        if (userAnswers[sectionIndex][i] == questionsList[sectionIndex][i].correctAnswer) {
            totals[sectionIndex] += 1;
        }
    }
    localStorage.setItem(`${section}Score`, totals[sectionIndex]);
    // If last section, calculate overall score and go to score page
    if (section === 'bootstrap') {
        let overallTotal = 0;
        for (let idx = 0; idx < 5; idx++) {
            // Only count if userAnswers exist for that section
            if (userAnswers[idx] && userAnswers[idx].length === 10) {
                overallTotal += totals[idx];
            }
        }
        let overallScore = (overallTotal / 50) * 10; // out of 10
        localStorage.setItem('score', overallScore);
        window.location.href = 'score.html';
    }
}

function showHint() {
    if (points >= 10) {
        points -= 10;
        localStorage.setItem('points', points);
        updatePointsDisplay();
        
        document.getElementById('hintText').innerText = questionsList[sectionIndex][Qnum - 1].hint;
        let rect = document.getElementById('hintButton').getBoundingClientRect();
        document.getElementById('hintBox').style.top = `${rect.bottom + window.scrollY + 10}px`;
        document.getElementById('hintBox').classList.remove('hidden');
        let hintsUsed = parseInt(localStorage.getItem('hintsUsed') || '0');
        hintsUsed++;
        localStorage.setItem('hintsUsed', hintsUsed);
    } else {
        const pointsDiv = document.getElementById('pointsDiv');
        pointsDiv.style.color = 'red';
        pointsDiv.style.background = '#ffe2e2';
        pointsDiv.style.transition = 'color 0.5s ease';
        
        setTimeout(() => {
            pointsDiv.style.color = ''; 
            pointsDiv.style.background = ''; 
        }, 500);
    }
}
function closeHint() {
    document.getElementById('hintBox').classList.add('hidden');
}