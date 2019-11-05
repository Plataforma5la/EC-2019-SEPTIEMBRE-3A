import React from "react";

export default props => (
    <form onSubmit={props.handleSubmit}>
        <input
            type="text"
            placeholder="username"
            onChange={e => props.setUsername(e.target.value)}
        />
        <input
            type="email"
            placeholder="pone tu HOTmail"
        /* onChange={e => props.setPassword(e.target.value)} */
        />
        <input
            type="password"
            placeholder="password"
            onChange={e => props.setPassword(e.target.value)}
        />
        <button>Send</button>
    </form>
);
