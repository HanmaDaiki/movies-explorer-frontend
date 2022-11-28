import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <NavLink to='/movies' className={({ isActive }) =>
              isActive ? 'navigation__link_active' : 'navigation__link'
            } >
        Фильмы
      </NavLink>
      <NavLink to='/saved-movies' className={({ isActive }) =>
              isActive ? 'navigation__link_active' : 'navigation__link'
            } >
        Сохранённые фильмы
      </NavLink>
    </nav>
  );
}

export default Navigation;
