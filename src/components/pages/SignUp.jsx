/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const changeHandler = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/signup', formData);
      if (response.status === 200) {
        window.location = '/';
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="newSignUp">
      <div className="newLogin">
        <div className="row">
          <div className="col-4">
            <h2>Регистрация</h2>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputLogin1" className="form-label">
            Имя
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={changeHandler}
            type="text"
            className="form-control newInput"
            id="exampleInputLogin1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Электронная почта
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            className="form-control newInput"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
          </label>
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            className="form-control newInput"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary newButton">
          Отправить
        </button>
      </div>
    </form>
  );
}
