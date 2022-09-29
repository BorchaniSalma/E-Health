// import { messageTemplate } from "../mails/templates/contact_us_message.ejs";
import dotenv from "dotenv";
dotenv.config();
const ENV = process.env;

 import {send} from "../mails/index.js";
import { InternalServerError } from "../errors/http.js";

export const sendEmail = (options) =>
    new Promise((resolve, reject) => {
        return send(options, (error, response) => {
            if (error) {
                return reject(error);
            }

            return resolve(response);
        });
    });

export const clientMessage = (message) =>
    new Promise((resolve, reject) => {
        try {
            const mailOptions = {
                from: message.email,
                to: ENV.MAIL_FROM,
                replyTo: message.email,
                subject: "Message from a visitor - Tansa",
                // html: messageTemplate(
                //     message.nom,
                //     message.email,
                //     message.phone,
                //     message.message
                // ),
            };

            return sendEmail(mailOptions, (error, response) => {
                if (error) {
                    return reject(new InternalServerError(error.message));
                }

                return resolve(response);
            });
        } catch (e) {
            return reject(new Error(e.message));
        }
    });
