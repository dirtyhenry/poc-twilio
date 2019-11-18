const express = require("express");

const axios = require("axios");
const bodyParser = require("body-parser");
const http = require("http");
const twilio = require("twilio");

const port = process.env.PORT || 5000;

axios.defaults.headers.post["Content-Type"] = "application/json";

let latestMessage = undefined;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Hello!"));

app.post("/sms", twilio.webhook(), (req, res) => {
  if (req.body == null || req.body.Body == null) {
    throw Error("Invalid message");
  }

  const message = req.body.Body;
  console.log(`New incoming SMS received: ${message}`);

  res.writeHead(204);
  res.end();

  latestMessage = message;

  if (process.env.SLACK_WEBHOOK_URL) {
    axios
      .post(process.env.SLACK_WEBHOOK_URL, {
        text: message
      })
      .catch(function(error) {
        console.log(error);
      });
  }
});

app.get("/latest", (req, res) => {
  if (
    process.env.AUTH_TOKEN &&
    req.headers["x-auth-token"] === process.env.AUTH_TOKEN
  ) {
    res.send(latestMessage);
  } else {
    res.writeHead(403);
    res.end();
  }
});

http.createServer(app).listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
