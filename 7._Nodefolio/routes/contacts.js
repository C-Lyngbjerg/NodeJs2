const router = require("express").Router();
const nodemailer = require('nodemailer');

router.post("/api/contact", (req, res, next) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'nodetesterjs@gmail.com',
          pass: 'test#123!'
        }
    }) 
    const mailOptions = {
        from: `${req.body.email}`,
        to: 'nodetesterjs@gmail.com',
        subject: `${req.body.name}`,
        text: `${req.body.message}`,
        replyTo: `${req.body.email}`
    }

    transporter.sendMail(mailOptions, function(err, res) {
        if (err) {
          console.error('there was an error: ', err);
        } else {
          console.log('here is the res: ', res)
        }
    })

});

module.exports = {
    router
}



/*
const message = req.body;
    console.log(message);
    // todo send email
    const reply = 'thank you,'+message.name+' for the message';
    res.send({body:reply})
*/
