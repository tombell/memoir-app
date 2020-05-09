ARCHIVE_PATH=/tmp/memoir-app.tar.gz

all: dev

dev:
	@BUILD=development npx rollup -c -w

prod:
	@npx sass -s compressed src/styles/styles.scss public/styles.css
	@BUILD=production npx rollup -c

styles:
	@npx sass --watch src/styles/styles.scss public/styles.css

lint: lint-stylesheets lint-typescript

lint-typescript:
	@npx eslint --ext .ts,.tsx src

lint-stylesheets:
	@npx stylelint src/styles/**

clean:
	@rm -fr public/app.* $(ARCHIVE_PATH)

archive: prod
	@tar zcvf $(ARCHIVE_PATH) public Caddyfile

.PHONY: all              \
        dev              \
        prod             \
        styles           \
        lint             \
        lint-typescript  \
        lint-stylesheets \
        clean            \
        archive          \
