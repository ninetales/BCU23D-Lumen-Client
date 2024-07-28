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

        console.log('the url is', url);
        console.log('the data is', data);

        try {

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TokenHandler.getUserToken()}`,
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                return await response.json();
            };

        } catch (error) {
            throw new Error(`Error adding data: ${error.status} - ${error.statusText}`);
        }

    }

    /**
     * @desc Fetch data
     * @param {*} param0 
     * @returns 
     */
    static get = async ({ endpoint }) => {

        const url = `${SETTINGS.API_URL}${endpoint}`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TokenHandler.getUserToken()}`,
                }
            });
            if (response.ok) {
                return await response.json();
            } else {
                const errorData = await response.json();
                throw new Error(`Error fetching data: ${response.status} - ${errorData.message}`);
            }

        } catch (error) {
            throw new Error(`Error fetching data: ${error.status} - ${error.statusText}`);
        }
    }

}