const mongosse = require('../database');

const BalanceSheetSchema = new mongosse.Schema({

    i: {
        type: Number,
        require: true,
        sequence_value: 1

    },
    classification: {
        type: String,
        require: true
    },
    description_nd: {
        type: String,
        require: true

    },

    initialCash: {
        type: String,
        require: true
    },
    debit: {
        type: String,
        require: true
    },

    credit: {
        type: String,
        require: true
    },
    finalCash: {
        type: String,
        require: true
    },
    balance:{
        type: mongosse.Schema.Types.ObjectId,
        ref: 'Balance',
        require: true,
    }


});

const BalanceSheet = mongosse.model('BalanceSheet', BalanceSheetSchema);

module.exports = BalanceSheet;