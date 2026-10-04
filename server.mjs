import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};
http
  .createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(
        new URL(request.url, "http://localhost").pathname,
      );
      let path = resolve(root, `.${pathname}`);
      if (path !== root && !path.startsWith(root + sep)) {
        response.writeHead(403).end("Forbidden");
        return;
      }
      if ((await stat(path)).isDirectory()) path = resolve(path, "index.html");
      const content = await readFile(path);
      response
        .writeHead(200, {
          "Content-Type": types[extname(path)] || "application/octet-stream",
          "Cache-Control": "no-cache",
        })
        .end(content);
    } catch {
      response.writeHead(404).end("Not found");
    }
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`Local: http://localhost:${port}`),
  );
