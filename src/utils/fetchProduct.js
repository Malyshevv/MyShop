import axios from 'axios';
import { apiUrl, accessToken, headersRequest } from '../config/configApi'
import { products,product } from '@store/store';

export const productsData = async (id) => {
    if (id) {
        const result = await axios.get(`${apiUrl}/category/${id}`, {headers: headersRequest});
        const data = await result.data;
        products.set(data);
        return data;
    } else {
        return false;
    }
}

export const productData = async (id) => {
    if (id) {
        const result = await axios.get(`${apiUrl}/product/${id}`, {headers: headersRequest});
        const data = await result.data;
        products.set(data);
        return data;
    } else {
        return false;
    }
}
