export const API_BASE_URL = 'https://api.ecommerce-website.com';
export const PRODUCT_ENDPOINT = `${API_BASE_URL}/products`;
export const USER_ENDPOINT = `${API_BASE_URL}/users`;
export const RECOMMENDATION_ENDPOINT = `${API_BASE_URL}/recommendations`;
export const CART_ENDPOINT = `${API_BASE_URL}/cart`;
export const WISHLIST_ENDPOINT = `${API_BASE_URL}/wishlist`;

export const DEFAULT_PAGE_SIZE = 20;
export const MAX_CART_ITEMS = 50;

export const USER_ROLES = {
    ADMIN: 'admin',
    CUSTOMER: 'customer',
    GUEST: 'guest',
};

export const ORDER_STATUSES = {
    PENDING: 'pending',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered',
    RETURNED: 'returned',
};

export const PAYMENT_METHODS = {
    CREDIT_CARD: 'credit_card',
    DEBIT_CARD: 'debit_card',
    PAYPAL: 'paypal',
    CASH_ON_DELIVERY: 'cash_on_delivery',
};