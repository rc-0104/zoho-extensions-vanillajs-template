build:
	npm run build:prod
	touch app/app.js
	touch app/app.css
	touch app/app.html
	rm -f app/*.js
	rm -f app/*.css
	rm -f app/*.html

	cp build/*.js app
	cp build/*.css app
	cp build/*.html app

	npx zet validate
	npx zet pack

.PHONY: build