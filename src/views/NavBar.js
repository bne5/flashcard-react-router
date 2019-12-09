import React from "react";
import { Menu, } from "semantic-ui-react";
import { Link, } from "react-router-dom";

const NavBar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/add">
      <Menu.Item>
        Add Card
      </Menu.Item>
    </Link>
    <Link to="/delete">
      <Menu.Item>
        Delete Card
      </Menu.Item>
    </Link>
    <Link to="/edit">
      <Menu.Item>
        Edit Card
      </Menu.Item>
    </Link>
    <Link to="/view">
      <Menu.Item>
        View Cards
      </Menu.Item>
    </Link>
    <Link to="/score">
      <Menu.Item>
        Score Card
      </Menu.Item>
    </Link>
  </Menu>
);

export default NavBar;