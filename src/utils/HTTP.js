import { SETTINGS } from '../config/settings';
import TokenHandler from './TokenHandler';

export default class HTTP {

    static add = async ({ endpoint, data }) => {

        const url = `${SETTINGS.API_URL}${endpoint}`;
        console.log('the url is', url);
        console.log('the data is', data);

        try {

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                return await response.json();
            }

        } catch (error) {
            throw new Error(`Error adding data: ${response.status} - ${response.statusText}`);
        }

    }

    static get = async ({ url }) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TokenHandler.getUserToken()}`
                }
            });
            if (response.ok) {
                return await response.json();
            }

        } catch (error) {
            throw new Error(`Error fetching data: ${response.status} - ${response.statusText}`);
        }
    }

}