ARCHIVE_PATH=/tmp/memoir-app.tar.gz

all: dev

dev:
	@BUILD=development npx rollup -c -w

prod:
	@npx sass -s compressed src/styles/app.scss public/app.css
	@BUILD=production npx rollup -c

styles:
	@npx sass --watch src/styles/app.scss public/app.css

lint:
	@npx eslint --ext .ts,.tsx src
	@npx stylelint src/styles/**

clean:
	@rm -fr public/app.* $(ARCHIVE_PATH)

archive: dist
	@tar zcvf $(ARCHIVE_PATH) public Caddyfile

.PHONY: all            \
        dev            \
        prod           \
        styles         \
        lint           \
        clean          \
        archive        \
