// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: 465,
    host: '',
    auth: {
      user: 'admin@wishcards.co',
      pass: 'fingertips12D',
    },
    secure: true,
  })
  const mailData = {
    from: 'no-reply@wishcards.co',
    to: 'admin@wishcards.co',
    subject: `Message ${req.body.subject}`,
    text: 'Eail: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`,
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })
  console.log(res)
  res.status(200).end()
}
