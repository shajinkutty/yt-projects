import React from 'react';

const PageNumbers = ({ totalPosts, postsPerPage, loading, paginate }) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {paginationNumbers.map(num => {
          return (
            <li className="page-item" key={num}>
              <a
                className="page-link"
                href="!#"
                onClick={e => {
                  e.preventDefault();
                  paginate(num);
                }}
              >
                {num}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PageNumbers;
