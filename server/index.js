import express from 'express';
import Log from 'log';
import renderer from './helpers/renderer';
const cors = require('cors');
const nodemailer = require('nodemailer');
const smtp = require('nodemailer-smtp-transport');
const bodyParser = require('body-parser');

const _ = require('lodash');
const log = new Log('info');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(cors());
app.use(cors({
    'allowedHeaders': [
        'Content-Type',
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods',
        'Access-Control-Allow-Headers',
    ]
}));

app.use(express.static('public'));

let smtpTransport
try {
    smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'noah@denverdevshop.com',
            clientId: '1060387934321-ko82pl7g8hftu09k6hstq4j4h5dn2i1u.apps.googleusercontent.com',
            clientSecret: 'NX9tTX4GceqDcW5IFnH2XADP',
            refreshToken: '1/H1DC63NBHRe1kMpNrqfcib-lYGWHRDJagUK9UwvtHuY',
            accessToken: 'ya29.GltJBmw4W9SHgjvFHP3sDSBwBwFrSljeFMbdwwZTmLrLDYQ026RwlF5mgiX0K2nTxsud8F_Z44BlCjyUsUxwSc4WHeQXTW2j9YM2CAijSci3dz1nCFtes-4jIXA8'
        }
    });
} catch (e) {
    log.error(e);
}

app.get('*', (req, res) => {
  if (req.path === '/') {
    res.send(renderer(req));
  } else {
    res.redirect(301, '/');
  }
});

app.post('/sendEmail', (req, res) => {
    const body = _.pick(req.body, [
        'name',
        'address',
        'message',
    ]);
    try {
        const mailOptions = {
            from: 'noah@denverdevshop.com',
            to: body.address,
            subject: `Inquiry from: ${body.name}`,
            generateTextFromHTML: true,
            html: `<b>${body.message}</b>`
        };

        smtpTransport.sendMail(mailOptions, function(error, response) {
            if (error) {
                log.error(`Failed to send email with error: ${error.message}`);
                res.sendStatus(400);
            }
        });
        res.sendStatus(200);

    } catch (error) {
        log.error(`Failed to send email with error: ${error.message}`);
        res.sendStatus(400);
    }
});

app.listen(PORT, () => {
  log.info(`Server is running on port: ${PORT}`);
});
