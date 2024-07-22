import HTTP from "../utils/HTTP";

export default class Wallet {

    static async transfer({ sender, recipient, amount }) {
        return HTTP.add({ endpoint: '/wallet/transaction', data: { recipient, amount } });
    }

    static async transactions() {
        const { data } = await HTTP.get({ endpoint: '/wallet/transactions' });
        return data;
    }

}