# Imagine - AI Image Generation Landing Page

A stunning landing page for an AI-powered image generation SaaS product with a Node.js proxy server to handle Hugging Face API calls.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Hugging Face API Token ([Get one here](https://huggingface.co/settings/tokens))

### Setup Instructions

**1. Install Dependencies**
```bash
npm install
```

**2. Configure Your Hugging Face Token**

Add your token to the `.env` file:
```
HF_TOKEN=hf_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

**3. Start the Server**
```bash
npm start
```

**4. Open in Browser**

Navigate to: **http://localhost:3000**

That's it! 🎉

---

## 🔧 How It Works

### The CORS Problem
Hugging Face's Inference API **does not support direct browser calls** due to CORS (Cross-Origin Resource Sharing) restrictions. When you try to call the API directly from JavaScript in the browser, you get:

```
Access to fetch at 'https://api-inference.huggingface.co/...' has been blocked by CORS policy
```

### The Solution: Proxy Server
This project uses a **Node.js Express proxy server** that:

1. ✅ Receives requests from your frontend (same origin = no CORS)
2. ✅ Makes the API call to Hugging Face from the server (server-to-server = no CORS)
3. ✅ Returns the generated image to your frontend
4. ✅ Keeps your API token secure on the server (not exposed in browser)

**Architecture:**
```
Browser → Proxy Server (localhost:3000) → Hugging Face API → Image → Browser
```

---

## 📁 Project Structure

```
├── index.html          # Landing page
├── styles.css          # Styles
├── server.js           # Express proxy server (handles CORS)
├── package.json        # Dependencies
├── .env                # Your HF_TOKEN (gitignored)
├── .env.example        # Template for .env
└── assets/             # Images and assets
```

---

## 🎨 Features

- ✨ **Live Image Generation**: Enter prompts and generate images in real-time
- 🎨 **Beautiful UI**: Dark theme with gradient accents and smooth animations
- ⚡ **Loading States**: Animated spinner while generating
- 🚨 **Error Handling**: Clear error messages
- 📱 **Responsive Design**: Works on all devices
- 🔒 **Secure**: API token stays on server, never exposed to browser

---

## 🧪 How to Use

1. Enter a descriptive prompt (e.g., "Astronaut riding a horse")
2. Click "Generate" or press Enter
3. Wait 5-10 seconds for the loading animation
4. View your generated image!

---

## 🐛 Troubleshooting

### "Cannot GET /"
- Make sure you're running `npm start`
- Access via `http://localhost:3000` not `file://`

### "Server Error: 401"
- Your Hugging Face token is invalid or missing
- Check your `.env` file has `HF_TOKEN=your_actual_token`

### "Server Error: 503"
- The model is loading or temporarily unavailable
- Wait 30-60 seconds and try again

### "Failed to fetch"
- Make sure the server is running (`npm start`)
- Check that you're accessing `http://localhost:3000`

---

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **API**: Hugging Face Inference API via router.huggingface.co (Z-Image-Turbo model)
- **Dependencies**: 
  - `express` - Web server
  - `cors` - CORS handling
  - `node-fetch` - HTTP requests
  - `dotenv` - Environment variables

---

## 📝 Development

To run with auto-reload during development:

```bash
npm run dev
```

This uses `nodemon` to automatically restart the server when you make changes.

---

## 🔐 Security Notes

- ✅ Never commit your `.env` file (it's in `.gitignore`)
- ✅ API token is only stored on the server
- ✅ Token is never exposed to the browser
- ✅ Use HTTPS in production

---

## 📄 License

MIT License - Feel free to use this for your projects!

---

## 🎯 Why This Approach?

**Direct Browser Call** ❌
```javascript
// This FAILS due to CORS
fetch('https://api-inference.huggingface.co/...')
```

**Proxy Server** ✅
```javascript
// This WORKS - no CORS issues
fetch('http://localhost:3000/api/generate')
```

The proxy server is the **recommended solution** by Hugging Face for browser-based applications.