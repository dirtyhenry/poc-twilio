const http = require("http");
const express = require("express");
const twilio = require("twilio");
const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Welcome to poc-twilio"));

app.post("/sms", twilio.webhook({ validate: true }), (req, res) => {
  if (req.body == null || req.body.Body == null) {
    throw Error("Invalid message");
  }

  console.log(`New incoming SMS received: ${req.body.Body}`);

  res.writeHead(204);
  res.end();
});

http.createServer(app).listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
