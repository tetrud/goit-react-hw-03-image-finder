import axios from 'axios';

const apiKey = '17278300-7d16b91202e921c50b7326d3b';

const fetchImages = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchImages };
