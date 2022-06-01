import axios from 'axios';
let url = `http://localhost:5000`;

export const  fetchUsers = async() => await axios.get(`http://localhost:5000/users`);

export const  fetchUserById = async(fetchUrl) => await axios.get(fetchUrl);

export const updateUser = async (data) => await axios.post(`http://localhost:5000/users/update`, data);

export const createUser = async(newUser) => await axios.post(`http://localhost:5000/users/add`,newUser);

export const removeUser = async (id) => await axios.post(`http://localhost:5000/users/delete`,{id:id});

export const createProduct = async(newProduct) => await axios.post(`http://localhost:5000/products/add`,newProduct);

export const removeProduct = async (id) => await axios.post(`http://localhost:5000/products/delete`,{id:id});

export const  fetchProductById = async(fetchUrl) => await axios.get(fetchUrl);

export const updateProduct = async (data) => await axios.post(`http://localhost:5000/products/update`, data);