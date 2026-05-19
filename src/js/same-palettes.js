// On récupère la div du template et le container des palettes
const paletteTemplate = document.querySelector("#palette-template");
const palettesContainer = document.querySelector("#palettes-container");

// On crée un objet qui représente une palette de couleurs (exemple)
const paletteExemple = {
  colors: ["#2C3E50", "#E74C3C", "#ECF0F1", "#F1C40F"],
  likes: 245,
  date: "8 hours"
};

// On boucle sur un nombre de palettes à afficher (exemple : 10)
for (let i = 0; i < 10; i++) {
  
  // On clone le contenu du template
  const clonePalette = paletteTemplate.content.cloneNode(true);

  // On modifie le contenu du clone
  clonePalette.querySelector(".likes span").textContent = paletteExemple.likes;
  clonePalette.querySelector(".date").textContent = paletteExemple.date;

  const colors = clonePalette.querySelectorAll(".color");

  colors[0].style.backgroundColor = paletteExemple.colors[0];
  colors[1].style.backgroundColor = paletteExemple.colors[1];
  colors[2].style.backgroundColor = paletteExemple.colors[2];
  colors[3].style.backgroundColor = paletteExemple.colors[3];

  // On ajoute le contenu cloné au container des palettes
  palettesContainer.appendChild(clonePalette);

}