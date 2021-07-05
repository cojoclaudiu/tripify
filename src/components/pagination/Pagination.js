import './Pagination.css';
import React from 'react';
// import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination widthAlign">
        {pageNumbers.map(number => {
          return (
            <li className="paginationItem" key={number}>
              <a onClick={() => paginate(number)} className="paginationLink" href={`/page/${number}`}>
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
