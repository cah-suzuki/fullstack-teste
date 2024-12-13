import Cookies from 'universal-cookie';
import axios from 'axios';

export const Api = () => {
    // pergar do local storage 
    const cookies = new Cookies();
    let token = cookies.get('_findme_v3_token');
    let baseURL = cookies.get('_findme_v3_base_url');
  
    if (process.env.BASE_URL) {
      baseURL = process.env.BASE_URL;
    }
    baseURL = 'http://localhost:3333'
  
    return axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${token} `,
      },
    });
  };