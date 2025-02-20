import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

// Function to fetch all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching products: ' + error.message);
    }
};

// Function to fetch product details by ID
export const fetchProductById = async (productId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching product details: ' + error.message);
    }
};

// Function to fetch user information
export const fetchUserInfo = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user information: ' + error.message);
    }
};

// Function to fetch recommendations based on user data
export const fetchRecommendations = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/recommendations/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching recommendations: ' + error.message);
    }
};