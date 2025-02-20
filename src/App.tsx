import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import SearchResultsPage from './pages/SearchResultsPage';
import UserProfilePage from './pages/UserProfilePage';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/wishlist" component={WishlistPage} />
                <Route path="/search" component={SearchResultsPage} />
                <Route path="/profile" component={UserProfilePage} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;