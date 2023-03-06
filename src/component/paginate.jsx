import React from 'react';

export default function Pagination({ postsperpage, totalPosts, setCurrentpage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsperpage); i++) {
    pageNumbers.push(i);
  };
  return (
    <div>
      <ul className="flex">
        {pageNumbers.map(number => (
          <li className="flex" key={number}>
            <button onClick={() => setCurrentpage(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  )

}
