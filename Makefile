ARCHIVE_PATH=/tmp/memoir-app.tar.gz
all: dev

dev:
	@BUILD=development npx rollup -c -w

dist:
	@npx sass -s compressed src/styles/app.scss public/app.css
	@BUILD=production npx rollup -c

css:
	@npx sass --watch src/styles/app.scss public/app.css

lint: lint-stylelint lint-eslint

lint-stylelint:
	@npx stylelint src/styles/**

lint-eslint:
	@npx eslint --ext .js,.jsx,.ts,.tsx src

clean:
	@rm -fr public/app.* .rpt2_cache $(ARCHIVE_PATH)

archive: dist
	@tar zcvf $(ARCHIVE_PATH) public Caddyfile

.PHONY: all            \
        dev            \
        dist           \
        css            \
        lint           \
        lint-stylelint \
        lint-eslint    \
        clean          \
        archive        \
