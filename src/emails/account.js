const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chaconrojasa@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chaconrojasa@gmail.com',
        subject: "We're sorry to have you gone!",
        text: `Thanks for trying out our app, ${name}! In your opinion, what could we have done to keep you onboard?`
    })
}

module.exports = {
    sendWelcomeEmail, sendCancellationEmail
}