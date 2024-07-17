import axios from 'axios';

// Create an Axios instance with a base URL from environment variables
const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

// Request interceptor to add the Authorization header with the token
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    // Handle request error
    return Promise.reject(error);
});

// Response interceptor to handle specific status codes or errors
axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const { response } = error;
    if (response) {
        if (response.status === 401) {
            localStorage.removeItem('ACCESS_TOKEN');
            // Optionally, you can redirect the user to the login page or show a message
            // window.location.href = '/login'; // Uncomment this line if you want to redirect
        }
        // Handle other specific status codes if needed
    } else {
        // Handle network or other errors
        console.error('Network or other error:', error);
    }
    // Reject the error so it can be handled by the calling code
    return Promise.reject(error);
});

export default axiosClient;
