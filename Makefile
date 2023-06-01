build:
	npm run build:prod
	npx zet validate
	npx zet pack

.PHONY: build