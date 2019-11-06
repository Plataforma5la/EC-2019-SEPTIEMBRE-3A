import React from "react";

export default props => (
  <form onSubmit={props.handleSubmit}>
    <input
      type="text"
      placeholder="user"
      onChange={e => props.setUsername(e.target.value)}
    />
    <input
      type="email"
      placeholder="sexbomb@hardcore.sex"
      onChange={e => props.setMail(e.target.value)}
    />
    <input
      type="password"
      placeholder="password"
      onChange={e => props.setPassword(e.target.value)}
    />
    <button>Send</button>
  </form>
);
