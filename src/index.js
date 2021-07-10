import './scss/index.scss';

// import 'core-js';
// import 'core-js/modules/es.object.values';
// import 'core-js/modules/es.promise';
// import 'regenerator-runtime/runtime';

import includesExample from './includesExample';

includesExample(['a', 'b', 'c'], 'b');

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

console.log('ES* Object.values example', Object.values(elvenGauntletsRecipe));

function resolveAfter2seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2seconds();
  console.log(result);
}

asyncCall();
