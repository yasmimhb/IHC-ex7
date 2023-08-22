import recipesData from './data/recipes.json';

export function fetchRecipes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(recipesData);
    }, 1000);
  });
}
