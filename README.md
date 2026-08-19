# VG Website Downloader 💾

Download the complete source code and all assets of any website for offline use.
---

## 📒 Description

**VG Website Downloader** is a self-hosted web utility built on Node.js, Express, and Socket.io. It leverages `wget` on the server backend to crawl, download, and reconstruct websites locally, converting asset links to make them fully browseable offline. The downloaded folder is compressed into a ZIP file and streamed back to the client.

The frontend is designed with a premium, responsive glassmorphic dark theme, featuring a real-time progress terminal that pipes execution logs directly from the server download process.

---

## ✨ Features

- **Recursive Mirroring**: Downloads all pages, stylesheets, images, scripts, and document resources.
- **Offline Link Conversion**: Auto-converts links, CSS urls, and image sources to local relative paths.
- **Real-time Terminal Logs**: Streams live wget logs directly to the user interface using WebSockets.
- **Asset ZIP Compression**: Packs the target website folder into a single ZIP archive once downloaded.
- **Aesthetic User Experience**: Modern glassmorphic panel, responsive flexbox layout, and custom animations.
- **Safe Directory Scoping**: Every download executes inside its own cryptographically randomized job directory.

---

## 🔍 How It Works

Under the hood, the application spawns a child process invoking `wget` with the following optimal mirroring flags:

```bash
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent <URL>
```

- `--mirror`: Makes the download recursive and enables settings suitable for mirroring.
- `--convert-links`: Converts all the links (including CSS/JS assets) to relative paths.
- `--adjust-extension`: Appends appropriate extensions (e.g. `.html`, `.css`) based on the response content-type.
- `--page-requisites`: Grabs necessary files (images, sheets) to render pages offline.
- `--no-parent`: Prevents climbing back to parent directories, restricting download to the specified subdirectory pathway.

---

## 🛠️ Requirements

- **Node.js**: Version 16.0.0 or newer.
- **wget**: Must be installed and available on your system `PATH`.
  - **macOS**: `brew install wget`
  - **Ubuntu/Debian**: `sudo apt install wget`
  - **Windows**: `winget install JernejSimoncic.Wget`

---

## 🚀 Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VG31OP/Web-installer.git
   cd Web-installer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   # Start the production server
   npm start

   # Or start in development mode
   npm run dev
   ```

4. **Access the interface:**
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## ⚙️ Configuration & Environment Variables

You can customize the downloader's behavior using the following environment variables:

| Variable | Default | Description |
| --- | --- | --- |
| `PORT` | `3000` | Port the web server listens on. |
| `DOWNLOAD_QUOTA` | `100m` | Size limit passed to `wget` to prevent disk saturation. |
| `DOWNLOAD_TIMEOUT_MS` | `300000` | Max milliseconds a download job is allowed to run before termination (default 5 minutes). |

---

## ☁️ Deploy on Cloud Providers

Deploy your own instance of **VG Website Downloader** directly to your favorite hosting platforms using these links:

[![Run on Replit](https://binbashbanana.github.io/deploy-buttons/buttons/remade/replit.svg)](https://replit.com/github/VG31OP/web-installer)
[![Remix on Glitch](https://binbashbanana.github.io/deploy-buttons/buttons/remade/glitch.svg)](https://glitch.com/edit/#!/import/github/VG31OP/web-installer)
[![Deploy on Railway](https://binbashbanana.github.io/deploy-buttons/buttons/remade/railway.svg)](https://railway.app/new/template?template=https://github.com/VG31OP/web-installer)
[![Deploy to Cyclic](https://binbashbanana.github.io/deploy-buttons/buttons/remade/cyclic.svg)](https://app.cyclic.sh/api/app/deploy/VG31OP/web-installer)
[![Deploy to Koyeb](https://binbashbanana.github.io/deploy-buttons/buttons/remade/koyeb.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/VG31OP/web-installer&branch=main&name=web-installer)
[![Deploy to Render](https://binbashbanana.github.io/deploy-buttons/buttons/remade/render.svg)](https://render.com/deploy?repo=https://github.com/VG31OP/web-installer)

---

## 👥 How to Contribute

1. Fork this repository.
2. Create a feature branch: `git checkout -b feature/your-awesome-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-awesome-feature`.
5. Open a Pull Request!

Please report any bugs or suggest enhancements by opening an issue on [GitHub Issues](https://github.com/VG31OP/web-installer/issues).

---

## 👨‍💻 Maintainer

Developed & Maintained by **Vraj Shiroya (VG31OP)**.
- **GitHub**: [@VG31OP](https://github.com/VG31OP)
- **Personal Website**: [https://vraj.shiroya.in](https://vraj.shiroya.in)

---

## 📄 License

This project is licensed under the **MIT License**. For details, please check the [LICENSE.md](LICENSE.md) file.
