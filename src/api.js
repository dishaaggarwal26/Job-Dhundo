import axios from "axios";

const API_BASE_URL = "http://localhost:8080/auth"; // Adjust if backend runs on a different port

// Signup API
export const signup = async (userData) => {
    return axios.post(`${API_BASE_URL}/signup`, userData, { withCredentials: true });
};

// Login API
export const login = async (userData) => {
    return axios.post(`${API_BASE_URL}/login`, userData, { withCredentials: true });
};

// Logout API
export const logout = async () => {
    return axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
};
