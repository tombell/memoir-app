// eslint no-console: "off"

import { createServer, request } from "http";

import esbuild from "esbuild";
import stylePlugin from "esbuild-style-plugin";
import tailwindcss from "tailwindcss";

const buildJS = ({ src, dest, dev }) => {
  try {
    esbuild.build({
      entryPoints: [src],
      outfile: dest,
      bundle: true,
      minify: !dev,
      watch: dev && {
        onRebuild(err) {
          if (err) {
            console.error(`build js errored: ${err}`)
          } else {
            console.error("build js successful");
          }
        },
      },
      define: {
        MEMOIR_ADMIN_ENABLED: `"${dev}"`,
        MEMOIR_API_KEY: dev ? `"${process.env.MEMOIR_API_KEY}"` : '""',
        MEMOIR_API_URL: dev
          ? '"http://localhost:8080"'
          : '"https://api.iamdjriff.co.uk"',
        MEMOIR_CDN_URL: dev
          ? '"https://memoir-artwork-development.s3.amazonaws.com"'
          : '"https://d4vv6ayb6g3d4.cloudfront.net"',
      },
      plugins: [
        stylePlugin({
          postcss: {
            plugins: [tailwindcss],
          },
        }),
      ],
    });
    // eslint-disable-next-line no-empty
  } catch { }
};

const serve = async (servedir, listen) => {
  const { host, port } = await esbuild.serve({ servedir }, {});

  const proxy = createServer((req, res) => {
    const forwardRequest = (path) => {
      const options = {
        hostname: host,
        port,
        path,
        method: req.method,
        headers: req.headers,
      };

      const proxyReq = request(options, (proxyRes) => {
        if (proxyRes.statusCode === 404) {
          forwardRequest("/");
          return;
        }

        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(res, { end: true });
      });

      req.pipe(proxyReq, { end: true });
    };

    forwardRequest(req.url);
  });

  proxy.listen(listen);
};

const dev = process.argv[2] !== "--build";

buildJS({
  src: "src/index.tsx",
  dest: "public/app.js",
  dev,
});

if (dev) {
  serve("public", 10001);
  console.error("listening on http://localhost:10001");
}
