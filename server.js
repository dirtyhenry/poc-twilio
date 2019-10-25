const http = require("http");
const express = require("express");
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Welcome to poc-twilio"));

app.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message("The Robots are coming! Head for the hills!");

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

http.createServer(app).listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
