all: dev

dev:
	@BUILD=development npx rollup -c -w

dist:
	@npx sass -s compressed src/styles/app.scss public/app.css
	@BUILD=production npx rollup -c

css:
	@npx sass --watch src/styles/app.scss public/app.css

lint: lint-prettier lint-stylelint lint-eslint

lint-prettier:
	@npx prettier --loglevel=warn --write src/**/*.{ts,tsx}

lint-stylelint:
	@npx stylelint src/styles/**

lint-eslint:
	@npx eslint --ext .js,.jsx,.ts,.tsx src

clean:
	@rm -fr public/app.* .rpt2_cache

archive:
	@tar zcvf /tmp/memoir-app.tar.gz public

.PHONY: all dev dist css lint lint-prettier lint-stylelint lint-eslint clean archive
