require("dotenv").config();

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

client.messages
  .create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: process.env.SEND_FROM_NUMBER,
    to: process.env.SEND_TO_NUMBER
  })
  .then(message => console.log(message.sid))
  .catch(e => console.error(e));
