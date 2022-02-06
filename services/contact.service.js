const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ContactService {

    constructor() {
        this.client = models;
    }

    async find() {
        const message = await this.client.Contact.findAll(); // Con Pool de conexiones sin ORM
        return message;
    }

    async findOne(id) {
        const message = await this.client.Contact.findByPk(id);
        if (!message) {
            throw boom.notFound('Mensaje no Existe');
        }
        return message;
    }

    async create(contact) {
        const newUser = await this.client.Contact.create(contact);
        return newUser;
    }

    async delete(id) {
        const message = await this.findOne(id);
        await message.destroy();
        return id;
    }

}

module.exports = ContactService;