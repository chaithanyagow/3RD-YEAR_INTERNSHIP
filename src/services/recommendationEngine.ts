import { UserData, Product, Recommendation } from '../types';

const getRecommendations = (userData: UserData, products: Product[]): Recommendation[] => {
    const recommendations: Recommendation[] = [];

    // Analyze user interaction data
    const interactedProducts = userData.interactionHistory.map(interaction => interaction.productId);
    
    // Filter products based on user preferences and interaction history
    products.forEach(product => {
        if (interactedProducts.includes(product.id) || userData.preferences.includes(product.category)) {
            recommendations.push({
                productId: product.id,
                score: calculateScore(userData, product)
            });
        }
    });

    // Sort recommendations by score
    recommendations.sort((a, b) => b.score - a.score);
    
    return recommendations.slice(0, 10); // Return top 10 recommendations
};

const calculateScore = (userData: UserData, product: Product): number => {
    let score = 0;

    // Increase score based on purchase history
    if (userData.purchaseHistory.includes(product.id)) {
        score += 10;
    }

    // Increase score based on product ratings
    score += product.rating * 2;

    // Increase score based on time spent on product pages
    const timeSpent = userData.timeSpent[product.id] || 0;
    score += timeSpent;

    // Additional scoring logic can be added here

    return score;
};

export { getRecommendations };