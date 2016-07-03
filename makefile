render: 
	sass --watch sass:public/css/

build:
	docker build -t subsquare/color-palettes .

run:
	docker run -d -p 80:8080 subsquare/color-palettes

mount:
	docker run -t -p 8080:8080 -v $(shell pwd):/usr/src/app subsquare/color-palettes