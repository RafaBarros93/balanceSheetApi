const mongosse = require('../database');

const BalanceSheetSchema = new mongosse.Schema({

    i: {
        type: Number,
        required: true,
        

    },
    classification: {
        type: String,
        required: true
    },
    description_nd: {
        type: String,
        required: true

    },

    initialCash: {
        type: String,
        required: true
    },
    debit: {
        type: String,
        required: true
    },

    credit: {
        type: String,
        required: true
    },
    finalCash: {
        type: String,
        required: true
    },
    balance:{
        type: mongosse.Schema.Types.ObjectId,
        ref: 'Balance',
        required: true,
    }


});

const BalanceSheet = mongosse.model('BalanceSheet', BalanceSheetSchema);

module.exports = BalanceSheet;