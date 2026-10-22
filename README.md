# VG Website Downloader (web-installer) 💾

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D16-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-4.x-010101?logo=socketdotio&logoColor=white)

A self-hosted web utility to crawl, download, and mirror complete websites and assets for offline browsing, engineered by [Vraj Shiroya (VG31OP)](https://github.com/VG31OP). Powers the Web Shiroya source tool on [Shiroya Tool Lab](https://shiroya.in).

VG Website Downloader utilizes Node.js, Express, Socket.io, and `wget` on the backend to recursively download target web pages, stylesheets, images, and scripts, automatically adjusting links so they can be browsed completely offline. Downloaded directories are compressed into a single ZIP archive and streamed directly to the user.

- **Live Application**: [https://web.shiroya.in](https://web.shiroya.in)
- **Parent Platform**: [https://shiroya.in](https://shiroya.in)
- **Creator**: [Vraj Shiroya (@VG31OP)](https://github.com/VG31OP) • [Website](https://vraj.shiroya.in) • [LinkedIn](https://www.linkedin.com/in/vrajshiroya)
- **Email Contact**: [vraj@shiroya.in](mailto:vraj@shiroya.in)

---

## ✨ Features

- **Recursive Mirroring**: Crawls and downloads pages, CSS stylesheets, images, scripts, and embedded documents.
- **Offline Link Conversion**: Auto-converts absolute links, CSS `url()` assets, and images to local relative paths for seamless offline browsing.
- **Real-Time Terminal Logs**: Pipes live `wget` download progress and stdout logs directly to the browser UI via WebSockets.
- **One-Click ZIP Packaging**: Bundles the entire mirrored site hierarchy into a downloadable ZIP archive upon completion.
- **Job Isolation**: Each crawling task runs within an isolated, randomized directory to prevent cross-job collisions.
- **Aesthetic Glassmorphic UI**: Clean, responsive dark-themed dashboard.

---

## 🔍 How It Works

The backend spawns a child process invoking `wget` with optimized mirroring parameters:

```bash
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent <URL>
```

- `--mirror`: Enables recursive crawling, timestamp checking, and infinite depth within the target scope.
- `--convert-links`: Rewrites hyperlinks to point to local files for offline browsing.
- `--adjust-extension`: Appends `.html` or `.css` based on MIME content-type.
- `--page-requisites`: Downloads all inline assets necessary to properly render pages offline.
- `--no-parent`: Restricts download to the specified subdirectory pathway.

---

## ⚠️ Known Limitations

- **Client-Side SPA Limitations**: `wget` retrieves server-delivered HTML. Websites heavily reliant on client-side JavaScript Single Page Application rendering (e.g. client-rendered React/Vue without SSR or hydration) may not capture dynamically generated DOM elements.
- **Authentication & Captchas**: Pages behind authentication paywalls, CAPTCHAs, or Cloudflare bot challenges cannot be mirrored via automated `wget`.
- **Bandwidth Quotas**: Downloads respect `DOWNLOAD_QUOTA` to prevent server disk saturation.

---

## 🛠️ Prerequisites

- **Node.js**: Version 16.0.0 or higher
- **wget**: Must be installed and available on system `PATH`
  - **Ubuntu / Debian**: `sudo apt update && sudo apt install wget`
  - **macOS**: `brew install wget`
  - **Windows**: `winget install JernejSimoncic.Wget`

---

## 🚀 Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VG31OP/web-installer.git
   cd web-installer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   # Development mode (with auto-restart)
   npm run dev

   # Production mode
   npm start
   ```

4. **Access the interface:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your web browser.

---

## ⚙️ Configuration & Environment Variables

| Variable | Default | Description |
| --- | --- | --- |
| `PORT` | `3000` | Port the HTTP and WebSocket server listens on. |
| `DOWNLOAD_QUOTA` | `100m` | Maximum total download size limit passed to `wget` to prevent disk exhaustion. |
| `DOWNLOAD_TIMEOUT_MS` | `300000` | Maximum execution time allowed for a single job before automatic cancellation (default 5 minutes). |

---

## ☁️ Deployment

VG Website Downloader is deployable on any cloud provider supporting Node.js with `wget` installed:
- **Render**: Connect repository as a Web Service with Docker or Node environment.
- **Railway**: Deploy using standard Node.js Nixpack / Dockerfile.
- **Self-Hosted VPS**: Run using PM2 or Docker behind Nginx/Caddy reverse proxy.

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE.md](LICENSE.md) for details.
