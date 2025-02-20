import axios from 'axios';

const API_URL = 'https://your-api-url.com'; // Replace with your actual API URL

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, { email, password });
        return response.data;
    } catch (error) {
        throw new Error('Login failed. Please check your credentials.');
    }
};

export const register = async (userData: { name: string; email: string; password: string }) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        throw new Error('Registration failed. Please try again.');
    }
};

export const logout = async () => {
    try {
        await axios.post(`${API_URL}/auth/logout`);
    } catch (error) {
        throw new Error('Logout failed. Please try again.');
    }
};

export const getCurrentUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/auth/current-user`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch current user data.');
    }
};