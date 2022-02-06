const express = require('express');
const cors = require('cors');
const { config } = require('./config/config');
const routes = require('./routes');
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');
const app = express();

app.use(express.json());

app.get("/", ( req, res ) => {
    res.json({message: 'Welcome api-contact-rest-1.0'});
});

const whitelist = config.corsWhiteList
const options = {
    origin: ( origin, callback ) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Host no Permitido'));
        }
    }
};

app.use(cors(options));

routes(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(config.port);