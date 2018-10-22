const mongosse = require('../database');

const CompanySchema = new mongosse.Schema({
    nameComapany: {
        type: String,
        require: true
    },
    info: {
        type: String,
        require: true
    },
    
})

const Company = mongosse.model('Company', CompanySchema);

module.exports = Company;