import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Readable } from "stream";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes FIRST
  app.get("/api/video", async (req, res) => {
    try {
      const id = req.query.id as string;
      if (!id) {
        return res.status(400).send("Missing id parameter");
      }

      // Approach 1: Check if it's directly streamable
      const driveRes = await fetch(`https://drive.google.com/uc?export=download&id=${id}`);
      
      const contentType = driveRes.headers.get("content-type");
      let streamUrl = "";

      if (contentType && contentType !== "text/html; charset=utf-8") {
        // Direct stream (small files < 100MB usually)
        streamUrl = `https://drive.google.com/uc?export=download&id=${id}`;
      } else {
        // Approach 2: Virus Scan bypass
        const html = await driveRes.text();
        const actionMatch = html.match(/action="([^"]+)"/);
        const uuidMatch = html.match(/name="uuid" value="([^"]+)"/);
        
        if (actionMatch && uuidMatch) {
          streamUrl = actionMatch[1] + `?id=${id}&export=download&confirm=t&uuid=${uuidMatch[1]}`;
        }
      }

      if (!streamUrl) {
         return res.status(404).send("Could not resolve video URL");
      }

      // Forward the range header if it exists
      const headers: Record<string, string> = {};
      if (req.headers.range) {
         headers["Range"] = req.headers.range;
      }

      const proxyRes = await fetch(streamUrl, {
          method: req.method,
          headers
      });

      // Forward response headers
      proxyRes.headers.forEach((value, name) => {
          // Strip Content-Disposition to prevent browser from downloading instead of playing
          if (name.toLowerCase() === 'content-disposition') return;
          res.setHeader(name, value);
      });

      res.status(proxyRes.status);

      if (proxyRes.body) {
         // @ts-ignore - Readable.fromWeb exists in Node 18+
         Readable.fromWeb(proxyRes.body).pipe(res);
      } else {
         res.end();
      }

    } catch (e) {
      console.error(e);
      res.status(500).send("Error resolving video stream");
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
