import React from 'react';
import { Link } from 'react-router-dom';

export default function ({categories}) { 
  
  return (
  
    <div className="col-xs-2">
    <section className='sidebar'>
      {/* <img src="https://www.colourbox.com/preview/24207220-lips-kiss-vector-patch-sticker-isolated-on-white-cool-sexy-red-kissed-selphie-cartoon-sign-for-print-in-comics-fashion-pop-art-retro-style-80-s-90s.jpg" className="logo" /> */}

    
      {/* <hr /> */}
      <section>
        <h4 className="text-muted">CATEGORIAS</h4>
        <ul className="list-unstyled">
          {
            categories.map(category => {
              return (
                <li key={category.id} className="playlist-item menu-item">
                  <Link to={`/products/cat/${category.id}`}>{category.name}</Link>
                </li>
              );
            })
          }
        </ul>
      </section>
    </section>
  </div>
  
  );
}