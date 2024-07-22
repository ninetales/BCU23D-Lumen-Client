import { SETTINGS } from '../config/settings';
import TokenHandler from './TokenHandler';

export default class HTTP {

    /**
     * @desc Add data
     * @param {*} param0 
     * @returns 
     */
    static add = async ({ endpoint, data }) => {

        const url = `${SETTINGS.API_URL}${endpoint}`;
        const token = TokenHandler.getUserToken();
        const headers = {
            'Content-Type': 'application/json',
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        };

        console.log('the url is', url);
        console.log('the data is', data);

        try {

            const response = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(data)
            });

            if (response.ok) {
                return await response.json();
            }

        } catch (error) {
            throw new Error(`Error adding data: ${response.status} - ${response.statusText}`);
        }

    }

    /**
     * @desc Fetch data
     * @param {*} param0 
     * @returns 
     */
    static get = async ({ endpoint }) => {

        const url = `${SETTINGS.API_URL}${endpoint}`;
        const token = TokenHandler.getUserToken();
        const headers = {
            'Content-Type': 'application/json'
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers
            });
            if (response.ok) {
                return await response.json();
            }

        } catch (error) {
            throw new Error(`Error fetching data: ${response.status} - ${response.statusText}`);
        }
    }

}