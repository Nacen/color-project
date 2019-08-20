import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const stringSpaceToDash = str => {
  return str
    .trim()
    .split(" ")
    .join("-");
};

const getRange = hexColor => {
  const end = "#fff";
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
};

const generateScale = (hexColor, numberOfColors) => {
  return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
};

const generatePalette = starterPalette => {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };
  for (let level in levels) {
    newPalette.colors[levels[level]] = [];
  }
  
  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: stringSpaceToDash(color.name),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)") 
      });
    }
  }
  return newPalette;
};

export { generatePalette };
