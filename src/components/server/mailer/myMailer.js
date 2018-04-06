const mailer = require('nodemailer')
const config = require('./conf/mailerConfig')

let transporter = mailer.createTransport({
    service: 'mail.ru',
    secure: false,
    port: 25,
    auth: {
        user: config.user,
        pass: config.pass
    },
    tls: {
        rejectUnauthorized: false
    },
    sendingRate: 1
});

let HelperOptions = {
    from: config.from,
    to: config.user,
    subject: config.subject,
    text: ''
}

/*отправка сообщения*/

const sendMail = (phone, name) => {
    HelperOptions.text = 'Телефон: ' + phone + ' Имя: ' + name;

    return new Promise((resolve, reject) => {
        transporter.sendMail(HelperOptions,
            (err, info) => {
                if (err) reject(err);
                else resolve({
                    phone: phone,
                    name: name
                });
            });
    });
};

export default sendMail