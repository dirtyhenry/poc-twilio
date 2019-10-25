install:
	yarn install

run: 
	node server.js

send_sms:
	node send_sms.js
	
clean:
	rm -rf node_modules
