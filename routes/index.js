const express = require('express');

const contactRouter = require('./contact.router');
const voluntaryRouter = require('./voluntary.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api-contact-rest', router);
    router.use('/contacts', contactRouter);
    router.use('/voluntaries', voluntaryRouter);
}

module.exports = routerApi;
