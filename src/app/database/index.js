const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/balanceSheet',{useNewUrlParser: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;
