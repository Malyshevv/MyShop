import axios from 'axios';
import { apiUrl, accessToken, headersRequest } from '../config/configApi'
import { category } from '@store/store';

export const categoryData = async () => {
   const result = await axios.get( `${apiUrl}/category`, { headers: headersRequest});
   const data = await result.data;
   category.set(data);
   return data;
}
