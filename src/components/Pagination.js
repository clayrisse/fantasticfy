import React from 'react';

import { Link } from 'react-router-dom';

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  } 

  return (
    <nav>
      <ul>
        {pageNumbers.map(num => (
          <li key={num} className='page-item'>
            <p onClick={() => paginate(num)}>{num}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;