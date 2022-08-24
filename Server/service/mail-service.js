const nodemailer = require("nodemailer")

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        })
    }

    async sendCodeMail(email, code) {
        await this.transporter.sendMail({
            form: process.env.SMTP_USER,
            to: email,
            subject: "logging into telegram copy",
            text: "",
            html: `
                <div>
                    <h1>code: ${code}</h1>
                </div>
            `,
        })
    }
}

module.exports = new MailService()
