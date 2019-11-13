import React from "react";
import { Link } from "react-router-dom";

export default function({ users, setUserAsAdmin }) {
  return (
   <div className="container cartProductsContainer">
       <h3>ACCESO USUARIOS</h3>
       <ul className="list-unstyled">
       {users.map(user=>{
           return (
        <li key={user.id} className="cartSingleProductBox"
                // onClick={() => FilterbyCategory(category.id)}
        >
            
            {user.username}
            {`Admin: ${user.isAdmin}`}
            <button onClick={() => setUserAsAdmin(user)}>Setear como ADMIN</button>
        </li>
           );
       }) }
       </ul>
   </div>
  );
}