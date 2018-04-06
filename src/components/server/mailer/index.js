import express from 'express'
import bodyParser from 'body-parser'

import mailer from './myMailer'

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    // And insert something like this instead:
    res.json([{
        id: 1,
        username: "samsepi0l"
    }, {
        id: 2,
        username: "D0loresH4ze"
    }]);
});

app.post('/contact', (req, res) => {
    const { phone = '', name = ''} = req.body;
    console.log(req.body);
    console.log(phone);
    console.log(name);

    mailer(phone, name).then(()=>{
        console.log('request was posted');
    });

    res.json(
        {status: 'SUCCESS', data: {phone: phone, name: name}}
    );

    /*mailer(phone, name).then(() => {
        console.log(`Sender phone "${phone}" name <${name}>`);
        res.redirect('/#success');
    }).catch((error) => {
        console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
        res.redirect('/#error');
    })*/
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
})
