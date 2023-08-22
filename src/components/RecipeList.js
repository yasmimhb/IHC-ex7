import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../api';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes().then((data) => {
      setRecipes(data);
    });
  }, []);

  return (
    <div>
      <h1>Lista de Receitas</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
