// On récupère la div du template et le container des palettes
const paletteTemplate = document.querySelector("#palette-template");
const palettesContainer = document.querySelector("#palettes-container");

// On créer un tableau d'objets qui représentent des palettes de couleurs
const palettesGrid = [
  {
    colors: ["#2C3E50", "#E74C3C", "#ECF0F1", "#F1C40F"],
    likes: 245,
    date: "8 hours"
  },
  {
    colors: ["#8E44AD", "#3498DB", "#1ABC9C", "#2ECC71"],
    likes: 189,
    date: "12 hours"
  },
  {
    colors: ["#F39C12", "#D35400", "#C0392B", "#E67E22"],
    likes: 312,
    date: "1 day"
  },

  {
    colors: ["#1B2631", "#566573", "#AAB7B8", "#FDFEFE"],
    likes: 98,
    date: "2 days"
  },
  {
    colors: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"],
    likes: 421,
    date: "3 hours"
  },
  {
    colors: ["#0F2027", "#203A43", "#2C5364", "#00C9A7"],
    likes: 356,
    date: "5 hours"
  },
  {
    colors: ["#F7971E", "#FFD200", "#FF512F", "#DD2476"],
    likes: 274,
    date: "6 hours"
  },
  {
    colors: ["#232526", "#414345", "#BDBDBD", "#ECE9E6"],
    likes: 145,
    date: "1 day"
  },
  {
    colors: ["#56CCF2", "#2F80ED", "#2193B0", "#6DD5ED"],
    likes: 508,
    date: "9 hours"
  },
  {
    colors: ["#FF416C", "#FF4B2B", "#F9D423", "#FF4E50"],
    likes: 390,
    date: "4 hours"
  },
  {
    colors: ["#00B09B", "#96C93D", "#3A1C71", "#D76D77"],
    likes: 233,
    date: "10 hours"
  },
  {
    colors: ["#373B44", "#4286F4", "#E0EAFC", "#CFDEF3"],
    likes: 167,
    date: "2 hours"
  }
];

// On boucle sur le tableau des palettes à afficher
palettesGrid.forEach((palette) => {

  // On clone le contenu du template
  const clonePalette = paletteTemplate.content.cloneNode(true);

  // On modifie le contenu du clone
  clonePalette.querySelector(".likes span").textContent = palette.likes;
  clonePalette.querySelector(".date").textContent = palette.date;

  const colors = clonePalette.querySelectorAll(".color");

  colors[0].style.backgroundColor = palette.colors[0];
  colors[1].style.backgroundColor = palette.colors[1];
  colors[2].style.backgroundColor = palette.colors[2];
  colors[3].style.backgroundColor = palette.colors[3];

  // On ajoute le contenu cloné au container des palettes
  palettesContainer.appendChild(clonePalette);
});