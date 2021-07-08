import './scss/index.scss';

const elvenShieldrecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 3,
};

const elvenGauntletsRecipe = {
  ...elvenShieldrecipe,
  leather: 1,
  refinedMoonstone: 4,
};

console.log(elvenShieldrecipe);
console.log(elvenGauntletsRecipe);
