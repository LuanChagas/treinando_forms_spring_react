import React from "react";
import styles from "../navbar/NavBarApp.module.css";
import { Link, NavLink } from "react-router-dom";
function NavBarApp() {
  return (
    <div className={`${styles.container} bg-gray-600   `}>
      <h1 className={`${styles.titulo}  text-white `}>Treinando Forms</h1>
      <nav className={styles.nav}>
        <ul>
          <li className={`${""} text-gray-400   hover:text-gray-300`}>
            <NavLink activeClassName={styles.active} exact={true} to="/">
              Produtos
            </NavLink>
          </li>
          <li className={`${""} text-gray-400  hover:text-gray-300 `}>
            <NavLink activeClassName={styles.active} exact={true} to="/imagens">
              Imagens
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarApp;
