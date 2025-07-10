import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    // TODO: Replace with your video/API search logic
    // Example: fetch results based on the query
    // For now, we'll just mock search results

    // Mock results for demonstration
    const mockResults = [
      { id: 1, title: `Result for "${query}" #1` },
      { id: 2, title: `Result for "${query}" #2` },
    ];

    setResults(mockResults);
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h2>Search Videos</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ width: '80%', padding: 8, marginRight: 8 }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          Search
        </button>
      </form>
      <div style={{ marginTop: 20 }}>
        {results.length > 0 ? (
          <ul>
            {results.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;