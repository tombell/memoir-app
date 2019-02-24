all: dev

dev:
	@npx rollup -c -w

test:
	@npx ava

serve:
	@npx serve -s public

clean:
	@rm -fr public/app.min.* .rpt2_cache

.PHONY: all dev test serve clean
