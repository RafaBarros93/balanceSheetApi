const mongosse = require('../database');

const BalanceSchema = new mongosse.Schema({
    company: {
        type: mongosse.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,

    },
    balanceSheets: [{
        type: mongosse.Schema.Types.ObjectId,
        ref: 'BalanceSheet',
        required: true,

    }]
});

const Balance = mongosse.model('Balance', BalanceSchema);

module.exports = Balance;