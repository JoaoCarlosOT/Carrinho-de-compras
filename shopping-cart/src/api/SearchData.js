import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.mercadolibre.com/sites/MLB',
});

const fetchProducts = async (query) => {
  try {
    const response = await api.get(`/search`, {
      params: {
        q: query
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching products:', error);
    
  }
};

export default fetchProducts;
