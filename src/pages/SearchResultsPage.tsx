import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { fetchSearchResults } from '../services/api';

const SearchResultsPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getSearchResults = async () => {
            try {
                const results = await fetchSearchResults(query);
                setProducts(results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            getSearchResults();
        }
    }, [query]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Search Results for "{query}"</h1>
            <ProductList products={products} />
        </div>
    );
};

export default SearchResultsPage;