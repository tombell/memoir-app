all: dev

dev:
	@npx rollup -c -w

dist:
	@BUILD=production npx rollup -c

lint:
	@npx eslint --ext .js,.jsx,.ts,.tsx src test

test:
	@npx ava

serve:
	@npx serve -s public

clean:
	@rm -fr public/app.min.* .rpt2_cache

.PHONY: all dev test serve clean
