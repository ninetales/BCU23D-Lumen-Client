import HTTP from "../utils/HTTP";

export default class Ledger {

    static async get() {
        return await HTTP.get({ endpoint: '/ledger/' });
    }

}