/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React from 'react';

export default function LoginPage() {
  const submitHandler = (e) => {
    e.preventDefault();
    try {
      axios.post('/api/login', Object.fromEntries(new FormData(e.target))).then((user) => {
        window.location.href = `/account/${user.data.id}`;
      });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  return (
    <form onSubmit={submitHandler} className="formLogin">
      <div className="newLogin"><div className="row">
        <div className="col-4">
          <h2>Авторизация</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
            Электронная почта
            </label>
            <input
              type="email"
              className="form-control newInput"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Пароль
            </label>
            <input
              name="password"
              type="password"
              className="form-control newInput"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary newButton">
            Отправить
          </button>
        </div>
      </div></div>
    </form>
  );
}
