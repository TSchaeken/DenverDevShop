require('dotenv').config();
import express from 'express';
import Log from 'log';
import renderer from './helpers/renderer';
const nodemailer = require('nodemailer');
const smtp = require('nodemailer-smtp-transport');
const bodyParser = require('body-parser');

const _ = require('lodash');
const log = new Log('info');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

let smtpTransport
try {
    smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.SMTP_USER,
            clientId: process.env.SMTP_CLIENT_ID,
            clientSecret: process.env.SMTP_CLIENT_SECRET,
            refreshToken: process.env.SMTP_REFRESH_TOKEN,
            accessToken: process.env.SMTP_ACCESS_TOKEN
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
            to: 'noah@denverdevshop.com',
            subject: `Inquiry from: ${body.name}`,
            generateTextFromHTML: true,
            html: `<b>${body.name} ${body.address} ${body.message}</b>`
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
