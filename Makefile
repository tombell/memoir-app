all: dev

dev:
	@npx rollup -c -w

test:
	@npx ava

clean:
	@rm -fr public/app.min.* .rpt2_cache

.PHONY: all dev test clean
