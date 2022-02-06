const Joi = require('joi');
const constants = require('../constants/constants');
const id = Joi.number().integer();
const fullName = Joi.string().min(2).max(100);
const email = Joi.string().email().max(64);
const message = Joi.string().min(10).max(400);
const voluntaryType = Joi.number().integer().min(1);
const createdAt = Joi.string();
const updatedAt = Joi.string();

const createVoluntarySchema = Joi.object({
    email: email.required(),
    fullName: fullName.required(),
    message: message.required(),
    voluntaryType: voluntaryType.required(),
})
.messages(constants.VOLUNTARY_VALIDATION_MSG);

const getVoluntarySchema = Joi.object({
    id: id.required(),
});

module.exports = { createVoluntarySchema, getVoluntarySchema };