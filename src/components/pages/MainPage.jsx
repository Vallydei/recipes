import React, { useState } from 'react';
import RecipeCard from '../ui/RecipeCard';
import Modal from '../ui/Modal';

export default function MainPage({ mapedRecipes, user }) {
  const [recipes, setRecipes] = useState(mapedRecipes);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const [modalContent, setModalContent] = useState(recipes[0]);

  const ingridientSortHandler = async (e) => {
    setLoading(true);
    if (e.target.name === 'manyFirst') {
      setRecipes((prev) => prev.slice().sort((a, b) => b.numberIngridient - a.numberIngridient));
    } else if (e.target.name === 'fewFirst') {
      setRecipes((prev) => prev.slice().sort((a, b) => a.numberIngridient - b.numberIngridient));
    }
    setLoading(false);
  };
  const timeSortHandler = async (e) => {
    setLoading(true);
    if (e.target.name === 'longestFirst') {
      setRecipes((prev) => prev.slice().sort((a, b) => b.time - a.time));
    } else if (e.target.name === 'quickestFirst') {
      setRecipes((prev) => prev.slice().sort((a, b) => a.time - b.time));
    }
    setLoading(false);
  };
  return (
    <>
      <div className="sort">
        <div className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#/"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className='text-sort'>
            Сортировка по кол-ву ингридиентов
            </div>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a onClick={ingridientSortHandler} className="dropdown-item" name="manyFirst" href="#/">
              По убыванию
            </a>
            <a onClick={ingridientSortHandler} className="dropdown-item" name="fewFirst" href="#/">
              По возрастанию
            </a>
          </div>
        </div>
        <div className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#/"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className='text-time'>
            Время приготовления
            </div>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a onClick={timeSortHandler} className="dropdown-item" name="longestFirst" href="#/">
              По убыванию
            </a>
            <a onClick={timeSortHandler} className="dropdown-item" name="quickestFirst" href="#/">
              По возрастанию
            </a>
          </div>
        </div>
      </div>
      <div className="mainContainer">
        {recipes.map((recipe) => (
          <RecipeCard
            user={user}
            recipe={recipe}
            key={recipe.id}
            setModalContent={setModalContent}
          />
        ))}
      </div>
      <Modal recipe={modalContent} user={user} />
    </>
  );
}
