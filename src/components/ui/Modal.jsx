import axios from 'axios';
import React, { useState } from 'react';

export default function ModalPage({ recipe, user }) {
  const [btnFavorite, setBtnFavorite] = useState('btn-favorite-off');
  const clickHandler = async (e) => {
    e.preventDefault();
    const dataFavorite = {
      userIdGet: user?.id,
      recipeIdGet: recipe?.id,
    };
    const response = await axios.post('/api/favorite', dataFavorite);
    if (response.status === 200) {
      setBtnFavorite('btn-favorite-on');
    }
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {recipe?.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Закрыть"
            />
          </div>
          <div className="modal-body">
            <div className="modal-img-container">
              <img src={recipe?.img} alt="" className="imgDish imgModal" />
              <div className="time time-modal">
                Время приготовления: <br /> {recipe?.time} минут(ы)
              </div>
            </div>
            <ul className="ingridientsList">
              {recipe?.ingredients.map((el) => (
                <li className="card__meta" key={el.id + Math.floor(Math.random()*100)}>
                  {el}
                </li>
              ))}
            </ul>
            <div className="formula">{recipe?.formula}</div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Закрыть
            </button>
            {user && (
              <button type="button" className={`btn ${btnFavorite}`} onClick={clickHandler}>
                Добавить в избранное
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
