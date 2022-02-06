const express = require('express');
const ContactService = require('../services/contact.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { getContactSchema, createContactSchema } = require('./../schemas/contact.schema');
const router = express.Router();
const service = new ContactService();


router.get('/', async (req, res, next) => {
    try {
        const messsage = await service.find();
        res.json(messsage);
    } catch (error) {
        next(error);
    }
});

router.get('/:id',
    validatorHandler(getContactSchema, 'params'),
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
    validatorHandler(createContactSchema, 'body'),
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
    validatorHandler(getContactSchema, 'params'),
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