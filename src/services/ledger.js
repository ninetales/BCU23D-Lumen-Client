import HTTP from "../utils/HTTP";

export default class Ledger {

    static async get() {
        const data = await HTTP.get({ endpoint: '/ledger/' });
        console.log('the data is', data);
        return data;
    }

}