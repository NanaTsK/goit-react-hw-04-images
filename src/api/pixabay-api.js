import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38687572-8bc90b5796d20c3c60f436eda';
const PER_PAGE = 12;

export const fetchImages = async (searchQuery, page) => {
  const option = {
    headers: {
      'Content-type': 'application/json',
    },
    params: {
      key: API_KEY,
      q: `${searchQuery}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: `${page}`,
      per_page: PER_PAGE,
    },
  };
  const { data } = await axios.get(BASE_URL, option);
  return { ...data, perPage: PER_PAGE };
};
