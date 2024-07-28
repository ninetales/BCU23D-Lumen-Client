/**
 * @desc Returns an array of transactions
 * @return {Array} transactions
 */
const transactionHandler = ({ transactions }) => {

    return transactions.flatMap((transaction) => {
        delete transaction.outputMap[transaction.inputMap.address];
        const sender = transaction.inputMap.address;
        const timestamp = transaction.inputMap.timestamp;
        return Object.entries(transaction.outputMap).map(
            ([recipient, amount]) => ({
                sender,
                recipient,
                amount,
                timestamp: timestamp ? timestamp : null,
                reward: sender === 'reward-address' ? true : false
            })
        );
    });
};

export default transactionHandler;