import React from 'react';
import { Link, IndexLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-toggleable-md bg-inverse mt-5">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <IndexLink className="navbar-brand" to="/" activeClassName="active">Home</IndexLink>
      <div className="collapse navbar-collapse" id="navCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" activeClassName="active">Budget</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="todo" activeClassName="active">To do</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
