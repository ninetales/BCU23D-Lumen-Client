import HTTP from "../utils/HTTP";
import TokenHandler from "../utils/TokenHandler";

export default class Auth {

    static async login({ email, password }) {
        const data = await HTTP.add({ endpoint: '/auth/login/', data: { email, password } });
        TokenHandler.setUserToken({ token: data.token });
    }

    static async register({ name, email, password }) {
        return await HTTP.add({ endpoint: '/auth/register/', data: { name, email, password } });
    }

    static async user() {
        const { data: { name, email, _id } } = await HTTP.get({ endpoint: '/auth/user/' });
        const { data: { privateKey, publicKey, balance } } = await HTTP.get({ endpoint: '/wallet/credentials' });

        const user = {
            credentials: {
                name,
                email,
                _id
            },
            wallet: {
                privateKey,
                publicKey,
                balance
            }
        }
        return user;
    }
}