import React, { useState } from 'react';

const Search: React.FC = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        // Call the API to fetch search results based on the query
        const response = await fetch(`/api/search?query=${query}`);
        const data = await response.json();
        setResults(data.products);
    };

    return (
        <div className="search-component">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for products..."
                />
                <button type="submit">Search</button>
            </form>
            <div className="search-results">
                {results.map((product) => (
                    <div key={product.id} className="search-result-item">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <span>${product.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;