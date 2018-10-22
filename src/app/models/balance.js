const mongosse = require('../database');

const BalanceSchema = new mongosse.Schema({
    company: {
        type: mongosse.Schema.Types.ObjectId,
        ref: 'Company',
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,

    },
    balanceSheets: [{
        type: mongosse.Schema.Types.ObjectId,
        ref: 'BalanceSheet',
        require: true,

    }]
});

const Balance = mongosse.model('Balance', BalanceSchema);

module.exports = Balance;