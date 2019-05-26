all: dev

dev:
	@BUILD=development npx rollup -c -w

dist:
	@npx sass -s compressed src/styles/app.scss public/app.css
	@BUILD=production npx rollup -c

css:
	@npx sass --watch src/styles/app.scss public/app.css

lint:
	@npx prettier --loglevel=warn --write src/**/*.{ts,tsx}
	@npx stylelint src/styles/**
	@npx eslint --ext .js,.jsx,.ts,.tsx src

clean:
	@rm -fr public/app.* .rpt2_cache

.PHONY: all dev dist css lint clean
