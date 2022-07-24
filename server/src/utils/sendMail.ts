import nodemailer from 'nodemailer';
import { Options } from 'nodemailer/lib/sendmail-transport';
import { User } from '../types/types';
import config from '../config';

const sendEmail = async (user: User, subject: string, html: String) => {
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        secureConnection: false,
        port: 587,
        tls: {
            ciphers:'SSLv3'
        },
        auth: {
            user: config.email,
            pass: config.email_password
        }
    } as any
);

    const mailOptions = {
        from: `Equipo Parrot Developments <${config.email}>`,
        to: user.email,
        subject: subject,
        html: html
    } as Options;
    
    transporter.sendMail(mailOptions,  (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export default sendEmail;