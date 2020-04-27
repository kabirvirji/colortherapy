import Colour from "./Colors";

export const calculateValence = (arrayOfColours, stateValences) => {
  const centroids = {
    red: Colour.XYZ2LAB(...Colour.RGB2XYZ(255, 0, 0)),
    green: Colour.XYZ2LAB(...Colour.RGB2XYZ(0, 128, 0)),
    blue: Colour.XYZ2LAB(...Colour.RGB2XYZ(0, 0, 255)),
    yellow: Colour.XYZ2LAB(...Colour.RGB2XYZ(255, 255, 0)),
    black: Colour.XYZ2LAB(...Colour.RGB2XYZ(0, 0, 0)),
    white: Colour.XYZ2LAB(...Colour.RGB2XYZ(255, 255, 255)),
  };
  //All selected colours in [R, G, B] format in the selectedColoursRGB array
  const selectedColoursRGB = [];
  arrayOfColours.forEach((colour) => {
    const numberRGB = colour
      .match(/([0-9]+\.?[0-9]*)/g)
      .map((element) => Number(element));
    selectedColoursRGB.push(numberRGB);
  });
  const vibes = [];
  for (let colour of selectedColoursRGB) {
    const [l1, a1, b1] = Colour.XYZ2LAB(
      ...Colour.RGB2XYZ(colour[0], colour[1], colour[2])
    );
    const keys = Object.keys(centroids);
    let currentColor = []; // [deltae, colourName]
    for (let key of keys) {
      const [l2, a2, b2] = centroids[key];
      const deltaE = Colour.DeltaE00(l1, a1, b1, l2, a2, b2);
      if (currentColor.length > 0 && currentColor[0] > deltaE) {
        currentColor = [deltaE, key];
      } else if (currentColor.length === 0) {
        currentColor = [deltaE, key];
      }
    }
    vibes.push(currentColor[1]);
  }
  const valences = [];
  for (let vibe of vibes) {
    valences.push(stateValences[vibe]);
  }
  return valences;
};

export const getMinMaxAvg = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let avg = 0;
  arr.forEach((element) => {
    avg += element;
  });
  avg = avg / arr.length;
  return [min, max, avg];
};
