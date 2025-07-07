# 🚀 XUI Subscription Template

A simple, customizable Node.js-based server to manage and serve XUI subscription links to clients via a clean, structured endpoint.

---

## 📦 Features

- 🌐 Serve dynamic subscription files
- 🔒 Environment-based configuration
- 🧰 Easily deployed using `pm2`
- ⚡ Quick setup with `.env` file
- ✅ Works perfectly with any XUI panel

---

## ⚙️ Prerequisites

Make sure you have the following installed on your server:

- Node.js (v16 or later recommended)
- npm
- [pm2](https://pm2.keymetrics.io/) (for process management)

Install PM2 globally if you haven't already:

```bash
npm install -g pm2
```

---

## 🚀 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Sahandi81/XUI-Subscription-Template.git
cd XUI-Subscription-Template
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure environment variables:**

Copy the sample config file and edit it:

```bash
cp config.env.sample config.env
nano config.env
```

### `.env` Configuration

| Key      | Description                                |
|----------|--------------------------------------------|
| `HOST`   | Your server's IP (e.g., `123.123.123.123`) |
| `SUBS`   | XUI subscription URL (e.g., `http://yourdomain.com:12345/sub/`) |

---

## 🧪 Run the Server

### Using Node (for development only):

```bash
node server.js
```

### Using PM2 (recommended for production):

```bash
pm2 start server.js --name xui-sub-template
```

To persist across reboots:

```bash
pm2 save
pm2 startup
```

---

## 🔗 Access Subscriptions

Once the server is running, users can access their subscription links at:

```
http://<HOST>:<PORT>/client-name
```

Each client should have a corresponding `.txt` file inside the `public/` directory:

Example:  
```
public/sahand.txt → http://<HOST>/sahand
```

---

## 🛠 Add a New Client

To serve a new subscription link:

1. Add a new `.txt` file in the `public/` folder named after the client (e.g., `ali.txt`).
2. Paste the subscription URL inside the file.
3. Access it via `http://<HOST>/ali`

---

## 📤 Deployment Notes

- Ensure ports are open on your firewall (default is 80 or use a reverse proxy like Nginx).
- You can deploy this behind Nginx with HTTPS (recommended for security).

---

## 🤝 Contributing

Pull requests and suggestions are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📄 License

We got it soon.

---