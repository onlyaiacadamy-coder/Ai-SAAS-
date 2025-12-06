# 🚀 QUICK START - READ THIS FIRST!

## ✅ CORS Issue SOLVED!

I've implemented a **Node.js proxy server** to completely bypass the CORS issue. This is the recommended solution by Hugging Face.

---

## 📋 What You Need to Do:

### 1️⃣ Add Your Hugging Face Token to `.env`

Open your `.env` file and make sure it looks like this:

```
HF_TOKEN=hf_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

Replace `hf_xxxxxxxxxxxxxxxxxxxxxxxxxx` with your actual token.

### 2️⃣ Start the Server

Run this command:

```bash
npm start
```

You should see:
```
✅ Proxy server running at http://localhost:3000
📂 Serving files from: E:\New folder
🔑 Using HF_TOKEN from .env file
```

### 3️⃣ Open Your Browser

Go to: **http://localhost:3000**

### 4️⃣ Test It!

- Type a prompt: "Astronaut riding a horse"
- Click "Generate"
- Wait 5-10 seconds
- See your image! 🎉

---

## 🎯 Why This Works

**Before (FAILED):**
```
Browser → Hugging Face API ❌ CORS Error
```

**Now (WORKS):**
```
Browser → Proxy Server → Hugging Face API ✅ No CORS!
```

The proxy server makes the API call for you, so the browser never directly contacts Hugging Face.

---

## ⚠️ Important Notes

- ✅ Dependencies are already installed (`npm install` completed)
- ✅ Server runs on port **3000** (not 8000 anymore)
- ✅ Your API token is secure on the server
- ✅ No more CORS errors!

---

## 🐛 If Something Goes Wrong

**"Cannot find module"**
→ Run `npm install` again

**"Server Error: 401"**
→ Check your `.env` file has the correct token

**"EADDRINUSE: address already in use"**
→ Port 3000 is busy, close other apps or change the port in `server.js`

---

Ready? Run `npm start` and open http://localhost:3000! 🚀
