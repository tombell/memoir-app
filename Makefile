all: dev

dev:
	@npx rollup -c -w

clean:
	@rm -fr public/app.min.* .rpt2_cache

.PHONY: all dev clean
