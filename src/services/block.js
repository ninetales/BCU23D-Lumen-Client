import HTTP from "../utils/HTTP";

export default class Block {
    static async mine() {
        return await HTTP.add({ endpoint: '/block/mine' });
    }
}