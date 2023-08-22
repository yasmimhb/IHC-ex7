import React from 'react';
import AddRecipe from './AddRecipe';
import { fetchRecipes } from '../api';

function AddRecipePage() {
  const handleAddRecipe = (newRecipe) => {
    fetchRecipes().then((data) => {
      const updatedRecipes = [...data, newRecipe];
      console.log('Nova lista de receitas:', updatedRecipes);

    });
  };

  return (
    <div>
      <h1>Página de Adicionar Nova Receita</h1>
      <AddRecipe onAddRecipe={handleAddRecipe} />
    </div>
  );
}

export default AddRecipePage;
