import { jwtDecode } from "jwt-decode";
import { SETTINGS } from "../config/settings";
export default class TokenHandler {

    /**
     * @desc Set the user token in the cookie
     */
    static setUserToken({ token }) {
        const decodedToken = jwtDecode(token);
        const date = new Date(decodedToken.exp * 1000);
        document.cookie = `${SETTINGS.PORT}=${token}; expires = ${date.toUTCString()}; path =/`;
    }

    /**
     * @desc Get the user token from the cookie
     * @returns {string} The user token
     */
    static getUserToken() {
        console.log('get user token');
        const keyValuePair = document.cookie.split(';').map(pair => pair.trim().split('='));
        console.log('keyValuePair', keyValuePair);
        const token = keyValuePair.find(([name, value]) => name === SETTINGS.PORT.toString());

        return token ? token[1] : null;
    }

    /**
     * @desc Clear the user token from the cookie
     */
    static clearUserToken() {
        document.cookie = `${SETTINGS.PORT}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

}