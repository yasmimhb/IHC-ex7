import React, { useState } from 'react';

function AddRecipe({ onAddRecipe }) {
  const [newRecipe, setNewRecipe] = useState({
    id: Date.now(),
    titulo: '',
    ingredientes: '',
    modoPreparo: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe(newRecipe);
    setNewRecipe({
      id: Date.now(),
      titulo: '',
      ingredientes: '',
      modoPreparo: '',
    });
  };

  return (
    <div>
      <h1>Adicionar Nova Receita</h1>
      <form onSubmit={handleSubmit}>
        <label>Título</label>
        <input
          type="text"
          value={newRecipe.titulo}
          onChange={(e) =>
            setNewRecipe({ ...newRecipe, titulo: e.target.value })
          }
        />
        <label>Ingredientes</label>
        <textarea
          value={newRecipe.ingredientes}
          onChange={(e) =>
            setNewRecipe({ ...newRecipe, ingredientes: e.target.value })
          }
        />
        <label>Modo de Preparo</label>
        <textarea
          value={newRecipe.modoPreparo}
          onChange={(e) =>
            setNewRecipe({ ...newRecipe, modoPreparo: e.target.value })
          }
        />
        <button type="submit">Adicionar Receita</button>
      </form>
    </div>
  );
}

export default AddRecipe;
