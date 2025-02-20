import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../services/recommendationEngine';

const RecommendationEngine: React.FC = () => {
    const [recommendations, setRecommendations] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const data = await getRecommendations();
                setRecommendations(data);
            } catch (err) {
                setError('Failed to load recommendations');
            } finally {
                setLoading(false);
            }
        };

        fetchRecommendations();
    }, []);

    if (loading) {
        return <div>Loading recommendations...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="recommendation-engine">
            <h2>Recommended for You</h2>
            <ul>
                {recommendations.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendationEngine;