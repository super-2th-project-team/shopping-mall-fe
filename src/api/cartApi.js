import APIClient from './ApiClient';

const BASE_URL = 'http://3.34.122.57:8080';
const GET = '/get';

export const cartApi = new APIClient(BASE_URL + '/api/cart');

export const getCartItems = async () => {
	return await cartApi.get(GET);
};
