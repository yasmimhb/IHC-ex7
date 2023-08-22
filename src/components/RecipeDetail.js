import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipes } from '../api';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes().then((data) => {
      const selectedRecipe = data.find((r) => r.id === parseInt(id));
      setRecipe(selectedRecipe);
    });
  }, [id]);

  if (!recipe) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{recipe.titulo}</h1>
      <h2>Ingredientes</h2>
      <p>{recipe.ingredientes}</p>
      <h2>Modo de Preparo</h2>
      <p>{recipe.modoPreparo}</p>
    </div>
  );
}

export default RecipeDetail;
