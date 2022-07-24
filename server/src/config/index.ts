import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT,
    mongo_uri: process.env.MONGODB_URI,
    jwt_secret: process.env.JWT_SECRET,
    email: process.env.PARROT_EMAIL,
    email_password: process.env.PARROT_EMAIL_PASSWORD
};
