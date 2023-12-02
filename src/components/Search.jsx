import React, { useState } from 'react';
import './search.css';

const movieList = [
  { _id: 1, title: 'Movie 1', director: 'Director 1' },
  { _id: 2, title: 'Grave of the Fireflies', director: 'Director 2' },
  // ...more movie objects
];

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const results = movieList.filter(movie =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ion-icon name="search-outline"></ion-icon>
      console.log()

      <div className="search-results">
        {searchResults.map(movie => (
          <div key={movie.title}>
            <p>{movie.title}</p>
            <p>{movie.director}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
