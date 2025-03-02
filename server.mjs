import https from "node:https";
import fs from "node:fs";
import path from "node:path";
import next from "next";

// Environment variables
const PORT = Number.parseInt(process.env.PORT || "59319", 10);
const HOST = process.env.HOST || "127.204.236.114";
const dev = process.env.NODE_ENV !== "production";

// Initialize Next.js app
const app = next({ dev });
const handle = app.getRequestHandler();

// HTTPS options
const httpsOptions = {
  key: fs.readFileSync(path.join(process.cwd(), "certificates", "ca.key")),
  cert: fs.readFileSync(path.join(process.cwd(), "certificates", "ca.crt")),
};

// Prepare the Next.js app and start the server
app.prepare().then(() => {
  https
    .createServer(httpsOptions, (req, res) => {
      handle(req, res);
    })
    .listen(PORT, HOST, () => {
      console.log(`> Ready on https://${HOST}:${PORT}`);
    });
});
