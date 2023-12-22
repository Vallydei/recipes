import React, { useState } from 'react';
import axios from 'axios';
import AccountCard from '../ui/AccountCard';
import Modal from '../ui/Modal';

export default function AccountPage({ mapedRecipes, user }) {
  const [recipes, setRecipes] = useState(mapedRecipes);
  const [modalContent, setModalContent] = useState(mapedRecipes[0]);
  const deleteFavorite = async (e) => {
    e.preventDefault();
    const data = { userId: user.id, recipeId: e.target.id };
    const response = await axios.delete(`/api/account/deleterecipe`, { data });

    if (response.status === 200) {
      setRecipes((prev) => prev.filter((el) => el.id !== Number(e.target.id)));
    }
  };
  return (
    <>
      <div className="titleContainer">
        <h1 className="titleAccount">Избранное</h1>
      </div>
      <div className="mainContainer">
        {recipes.map((recipe) => (
          <AccountCard
            recipe={recipe}
            key={recipe.id}
            id={recipe.id}
            deleteFavorite={deleteFavorite}
            setModalContent={setModalContent}
            user={user}
          />
        ))}
      </div>
      <Modal recipe={modalContent} user={user} />
    </>
  );
}
