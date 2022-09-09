import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css'

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
  const pageNumbers = [];
  
  const [isActive, setIsActive] = useState(false);

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  } 

  return (
    <div className='pagination_section'>
      {/* <div className='page-item'><p>Prev</p></div> */}

      {pageNumbers.map(num => (
        <div key={num} 
          className='page-item' 
          onClick={() => paginate(num)}
          style={{
            backgroundColor: num === currentPage ? 'black' : 'white',
            color: num === currentPage ? 'white' : 'black',
          }}
         >
          <p>{num}</p>
        </div>
      ))}

      {/* <div className='page-item'><p>Next</p></div> */}
    </div>
  );
};

export default Pagination;