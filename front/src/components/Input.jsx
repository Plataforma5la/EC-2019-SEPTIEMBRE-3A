import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FaStarOfDavid } from "react-icons/fa";

export default props => (
  <div className="containerBro">
    {props.user.username ? (
      <div style={{ width: "100%" }}>
        <form onSubmit={props.handleSubmit} style={{ width: "100%" }}>
          <div className="inputContainer">
            <p className="greeter">Hello {props.user.username}</p>
            <Link to="/favorites">
              <button>
                <FaStarOfDavid />
              </button>
            </Link>
            <div>
              <input
                type="text"
                value={props.movieQuery}
                onChange={e => props.handleChange(e.target.value)}
              />
              <button type="submit" className="gradient">
                <FaSearch />
              </button>
            </div>
            <button onClick={props.handleLogOut}>
              <FiLogOut />
            </button>
          </div>
        </form>
      </div>
    ) : (
      <div className="inputContainer">
        <Link to="/login">
          <button>LOGIN</button>
        </Link>
        <Link to="/register">
          <button>REGISTER</button>
        </Link>
      </div>
    )}
  </div>
);
