const mailer = require('nodemailer')

let transporter = mailer.createTransport({
    service: 'mail.ru',
    secure: false,
    port: 25,
    auth: {
        user: 'ucplaneta70@mail.ru',
        pass: 'vcxz0987'
    },
    tls: {
        rejectUnauthorized: false
    },
    sendingRate: 1
});

let HelperOptions = {
    from: '"Smarty" <ucplaneta70@mail.ru>',
    to: 'ucplaneta70@mail.ru',
    subject: 'Заявка',
    text: 'testtesttesttest'
}

/*отправка сообщения*/

const sendMail = (phone, name) => {
    return new Promise((resolve, reject) => {
        HelperOptions.text += ' ' + phone + ' ' + name;
        transporter.sendMail(HelperOptions,
            (err, info) => {
                if (err) reject(err);
                else resolve({
                    phone: phone,
                    name: name
                });
                /*if (err) {
                    console.log(err)
                }
                console.log(info.envelope);
                console.log(info.messageId);*/
            });
    });
};

export default sendMail