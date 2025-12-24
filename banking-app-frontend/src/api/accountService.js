import axios from "axios";

const API_URL = "http://localhost:8081/api/accounts";

export const getAllAccounts = () => axios.get(API_URL);

export const getAccountById = (id) => axios.get(`${API_URL}/${id}`);

export const createAccount = (account) => axios.post(API_URL, account);

export const deleteAccount = (id) => axios.delete(`${API_URL}/${id}`);

export const deposit = (id, amount) =>
  axios.put(`${API_URL}/${id}/deposit`, { amount });

export const withdraw = (id, amount) =>
  axios.put(`${API_URL}/${id}/withdraw`, { amount });
