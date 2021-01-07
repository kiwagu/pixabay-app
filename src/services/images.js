const axios = require('axios');
const SITE_URL = 'https://pixabay.com';
const API_URL = `${SITE_URL}/api`;

export const getImages = (page = 1) =>
  axios.get(`${API_URL}/?page=${page}&key=${process.env.REACT_APP_APIKEY}`);

export const searchImages = (keyword, page = 1) =>
  axios.get(
    `${API_URL}/?page=${page}&key=${process.env.REACT_APP_APIKEY}&q=${keyword}`
  );

export const getImageById = (imageId) =>
  axios.get(`${API_URL}/?key=${process.env.REACT_APP_APIKEY}&id=${imageId}`);
