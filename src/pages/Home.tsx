import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import RecommendationEngine from '../components/RecommendationEngine';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to Our E-Commerce Store</h1>
                <RecommendationEngine />
                <ProductList />
            </main>
            <Footer />
        </div>
    );
};

export default Home;