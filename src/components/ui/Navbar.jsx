import React from 'react';

export default function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-logo" href="/">
        CookBook
      </a>
      {user && <h3 className="greeting">Привет, {user.name}!</h3>}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse newNav" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Личный кабинет
            </a>
            {!user ? (
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/login">
                  Авторизация
                </a>
                <a className="dropdown-item" href="/signup">
                  Регистрация
                </a>
                {/* <a className="dropdown-item" href="/logout">
                  Выйти
                </a> */}
              </div>
            ) : (
              <>
                {' '}
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">
                    Главная
                  </a>
                  <a className="dropdown-item" href={`/account/${user.id}`}>
                    Избранное
                  </a>
                  <a className="dropdown-item" href="/logout">
                    Выйти
                  </a>
                </div>
              </>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
