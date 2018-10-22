const express = require('express');

const router = express();

Company = require('../models/company');

router.get('/', async (req, res) => {
    try {
        const company = await Company.find();

        return res.status(200).send({company});
    } catch (err) {
        console.log(err);
        return res.status(400).send({error: 'Error loading new company'});
    }
});

router.get('/:idCompany', async (req, res) => {
    const company = await company.findById(req.params.idCompany)
});

router.post('/', async (req, res) => {
    try {
        const company = await Company.create(req.body);

        return res.status(200).send({company});
    } catch (err) {
        return res.status(400).send({error: 'Error add new company'});
    }


});

router.put('/', async (req, res) => {

});

router.delete('/', async (req, res) => {

});



module.exports = app => app.use('/company', router);