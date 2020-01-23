# Twilio Playground

`poc-twilio` is a playground around **Twilio’s SMS sending/receiving capabilities**.

## Installation

With **Homebrew**, **Node** and **Yarn** installed:

```bash
make install
```

Then create a `.env` file based on `.env.sample`, and replacing the required values.

## Usage

### Sending SMS

```bash
make send_sms
```

### Receiving SMS

By running `server.js`, you create a server with 3 endpoints:

- `GET /`: a simple greeting health check;
- `POST /sms`: use this endpoint as Twilio Phone Number’s Messaging incoming webhook;
- `GET /latest`: returns the last received SMS content stored in memory.

Optionnaly, the `/sms` endpoint can forward received texts to a Slack channel (cf. `.env.sample` for configuration).

⚠️ For some reason, the webhook doesn’t seem to be get called when texts were sent from Twilio’s platform itself. 🤷‍♂️

## Deployment

This project is deployed via Heroku.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
