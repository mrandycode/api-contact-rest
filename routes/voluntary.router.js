const express = require('express');
const VoluntaryService = require('../services/voluntary.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getVoluntarySchema, createVoluntarySchema } = require('../schemas/voluntary.schema');
const router = express.Router();
const service = new VoluntaryService();


router.get('/', async (req, res, next) => {
    try {
        const messsage = await service.find();
        res.json(messsage);
    } catch (error) {
        next(error);
    }
});

router.get('/:id',
    validatorHandler(getVoluntarySchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const message = await service.findOne(id);
            res.json(message);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/create',
    validatorHandler(createVoluntarySchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newMessage = await service.create(body);
            res.status(201).json(newMessage);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/delete/:id',
    validatorHandler(getVoluntarySchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            await service.delete(id);
            res.status(201).json({ id });
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;