import HTTP from "../utils/HTTP";
import TokenHandler from "../utils/TokenHandler";

export default class Auth {

    static async login({ email, password }) {
        console.log('login', email);
        const data = await HTTP.add({ endpoint: '/auth/login/', data: { email, password } });
        TokenHandler.setUserToken({ token: data.token });
        TokenHandler.getUserToken();
    }

    static async register({ email, password }) {
        console.log('register', email);
    }
}