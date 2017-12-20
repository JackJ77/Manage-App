import React from 'react';
import { Link, IndexLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <IndexLink className="navbar-brand" to="/" activeClassName="active">Home</IndexLink>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <IndexLink to="/" activeClassName="active">Calendar</IndexLink>
          </li>
          <li>
            <Link to="budget" activeClassName="active">Budget</Link>
          </li>
          <li>
            <Link to="todo" activeClassName="active">To do</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
