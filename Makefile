all: dev

dev:
	@npx rollup -c -w

dist:
	@npx sass src/styles/app.scss public/app.css
	@BUILD=production npx rollup -c

css:
	@npx sass --watch src/styles/app.scss public/app.css

lint:
	@npx eslint --ext .js,.jsx,.ts,.tsx src test

test:
	@npx ava

serve:
	@npx serve -s public

clean:
	@rm -fr public/app.min.* .rpt2_cache

.PHONY: all dev dist lint test serve clean
