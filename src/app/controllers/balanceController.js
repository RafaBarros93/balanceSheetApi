const express = require('express');

const router = express();

const Balance = require('../models/balance');
const BalanceSheet = require('../models/balanceSheet');



router.get('/', async (req, res) => {
    try {
        const balance = await Balance.find().populate(['company', 'balanceSheets']);

        return res.status(200).send({balance});
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error loading new balance' });
    }
});

router.post('/', async (req, res) => {
    try {
        const {company,balanceSheets} = req.body;

        const balance = await Balance.create({company});
        
        var cont = 1;
            
        await Promise.all(balanceSheets.map(async sheets => {

            const balanceSheet = new BalanceSheet({ ...sheets,balance: balance._id });
            
            balanceSheet.i = cont++;
           
            console.log(balanceSheet.i);

            await balanceSheet.save();

        
            balance.balanceSheets.push(balanceSheet);
        }));

        await balance.save();

        return res.status(200).send({balance});
    } catch (err) {
        console.log(err);
        return res.status(400).send({error: 'Error creating new balance'});
    }

});

router.put('/:balanceId', async (req, res) => {

    try {
        
        const {company,balanceSheets} = req.body;

        const balance = await Balance.findByIdAndUpdate(req.params.balanceId, {new: true });
        
        balance.balanceSheets = [];

        await BalanceSheet.remove({balance: balance._id});


        await Promise.all(balanceSheets.map(async sheets => {

            const balanceSheet = new BalanceSheet({ ...sheets,balance: balance._id });

            await balanceSheet.save();

            balance.balanceSheets.push(balanceSheet);
        }));

        await balance.save();

        return res.status(200).send({balance});
    } catch (err) {
        console.log(err);
        return res.status(400).send({error: 'Error creating new balance'});
    }
});

router.delete('/:balanceId', async (req, res) => {
    try {
        await Balance.findByIdAndRemove(req.params.balanceId).populate('company');

      
        return res.status(200).send({message: 'Remove balance successfully'});
    } catch (err) {
        console.log(err);
        return res.status(400).send({error: 'Error deleting new project'});
    }
});





module.exports = app => app.use('/balance', router);