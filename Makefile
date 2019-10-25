install:
	yarn install

clean:
	rm -rf node_modules

send_sms:
	node send_sms.js