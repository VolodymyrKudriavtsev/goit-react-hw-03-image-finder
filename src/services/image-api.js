import axios from 'axios';

// export const searchImage = async (q, _page = 1) => {
//   const { data } = await instance.get('/', {
//     params: {
//       q,
//       _page,
//     },
//   });
//   return data;
// };

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '31991210-5d8d315bab6d2995c6cf86716',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 4,
  },
});

export const searchImage = async (q, page) => {
  const { data } = await instance.get(`?q=${q}&page=${page}`);
  return data;
};
