const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/balanceSheet',{usoMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;
