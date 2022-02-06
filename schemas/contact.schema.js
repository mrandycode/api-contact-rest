const Joi = require('joi');
const constants = require('../constants/constants');

const id = Joi.number().integer();
const fullName = Joi.string().min(2).max(100);
const email = Joi.string().email().max(64);
const message = Joi.string().min(10).max(400);
const createdAt = Joi.string();
const updatedAt = Joi.string();

const createContactSchema = Joi.object({
    email: email.required(),
    fullName: fullName.required(),
    message: message.required(),
})
.messages(constants.CONTACTS_VALIDATIONS_MSG);

const getContactSchema = Joi.object({
    id: id.required(),
});

module.exports = { createContactSchema, getContactSchema};