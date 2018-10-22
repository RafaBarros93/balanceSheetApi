const mongosse = require('../database');

const CompanySchema = new mongosse.Schema({
    nameComapany: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    
})

const Company = mongosse.model('Company', CompanySchema);

module.exports = Company;