import Message from "../schemas/Message.js"
export const create = (
  nom,
  email,
  phone,
  msg,
) => new Promise((resolve, reject) => {
  const message = new Message();
  message.nom = nom;
  message.email = email;
  message.phone = phone;
  message.message = msg;
  return message.save()
    .then(
      messageObject => resolve(messageObject),
    )
    .catch(
      e => reject(console.log(e.message)),
    );
});
