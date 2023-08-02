import { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className={"header"}>
        <menu className={"menu"}>
          <li>
            <NavLink to={"/posts"}>posts</NavLink>
          </li>
          <li>
            <NavLink to={"/comments"}>comments</NavLink>
          </li>
          <li>
            <NavLink to={"/cars"}>cars</NavLink>
          </li>
        </menu>
      </header>
    );
  }
}

export { Header };
