// src/api/userService.js
import axios from "axios";

const API_BASE = "https://jsonplaceholder.typicode.com";

export const getUsers = () => axios.get(`${API_BASE}/users`);
export const getUser = (id) => axios.get(`${API_BASE}/users/${id}`);
export const createUser = (user) => axios.post(`${API_BASE}/users`, user);
export const updateUser = (id, user) => axios.put(`${API_BASE}/users/${id}`, user);
export const deleteUserApi = (id) => axios.delete(`${API_BASE}/users/${id}`);
