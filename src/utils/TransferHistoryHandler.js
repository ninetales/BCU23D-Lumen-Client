import Auth from "../services/auth";


const HistoryHandler = async ({ data }) => {
    const user = await Auth.user();
    const accountAddress = user.wallet.publicKey;

    const blockTransfers = data.map(block => ({
        ...block,

        transfers: block.transactions.flatMap((transaction) => {

            if (transaction.inputMap.address === accountAddress) {
                // Sent transactions
                delete transaction.outputMap[accountAddress];
                const timestamp = transaction.inputMap.timestamp;
                return Object.entries(transaction.outputMap).map(
                    ([recipient, amount]) => ({
                        transactionType: 'debit',
                        sender: accountAddress,
                        recipient,
                        amount,
                        timestamp: timestamp ? timestamp : null,
                    })
                );

            } else {
                // Recieved transactions
                const timestamp = transaction.inputMap.timestamp;
                const sender = transaction.inputMap.address;

                return Object.entries(transaction.outputMap)
                    .filter(([recipient, amount]) => recipient === accountAddress)
                    .map(
                        ([recipient, amount]) => ({
                            transactionType: sender === 'reward-address' ? 'reward' : 'credit',
                            sender: transaction.inputMap.address,
                            recipient,
                            amount,
                            timestamp: timestamp ? timestamp : null,
                            reward: sender === 'reward-address' ? true : false
                        })
                    );
            }

        }),

    }));

    console.log('blockTransfers', blockTransfers);
    return blockTransfers;
};

export default HistoryHandler;