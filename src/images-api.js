import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com';
const KEY = 'Fi-MzvnSMDADzYfU91iPV9yymOD8HaCMjxpoLqwS360';

export const fetchImages = async (searchQuery, page = 1) => {
  const response = await axios.get("/search/photos",{
    params: {
      query: searchQuery,
      client_id: KEY,
      page,
      per_page: 12,
    },
  });

    return response.data.results;
};
