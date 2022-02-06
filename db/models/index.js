const { Contact, ContactSchema } = require('./contact.model');
const { Voluntary, VoluntarySchema } = require('./voluntary.model');

// Arcivo de modelos
function setupModels(sequelize) {
    Contact.init(ContactSchema, Contact.config(sequelize));
    Voluntary.init(VoluntarySchema, Voluntary.config(sequelize));
}

module.exports = setupModels;