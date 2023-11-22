import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

//Contacts

export async function getData() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addData(data) {
  const response = await axios.post('/contacts/', data);
  return response.data;
}

export async function deleteData(id) {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
}

//User

export async function createUser(userInfo) {
  const response = await axios.post('/users/signup', userInfo);
  return response.data;
}

// {
//   "name": "Adrian Cross",
//   "email": "across@mail.com",
//   "password": "examplepwd12345"
// }

export async function login(userInfo) {
  const response = await axios.post('/users/login', userInfo);
  return response.data;
}

// {
//   "email": "string",
//   "password": "string"
// }

export async function logOut() {
  const response = await axios.post('/users/logout');
  return response.data;
}

export async function getUserInfo() {
  const response = await axios.get('/users/current');
  return response.data;
}
