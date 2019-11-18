install:
	brew bundle
	yarn install

run: 
	node -r dotenv/config server.js

send_sms:
	node send_sms.js
	
clean:
	rm -rf node_modules
