# 🎮 Esports & Gaming Stats Dashboard
A live dashboard displaying real-time gaming and esports statistics using the RAWG API and optional Twitch API integration.

Deployment Link - https://minigamedashboard.onrender.com

---

## 📌 Objective
Build an interactive dashboard that fetches and visualizes video game statistics such as ratings, genres, platforms, and trending game insights.

---

## 🚀 Features

### 🔹 Core Features
- Fetch trending games using **RAWG Video Game Database API**.
- Display:
  - Game titles  
  - Ratings  
  - Release dates  
  - Platforms  
  - Genres  
- Clean and interactive UI built with React.
- Data visualizations using **Chart.js**.

### 🔹 Bonus (Optional)
- Integrate **Twitch API** to show:
  - Live streams  
  - Viewer counts  
  - Top streamers per game  

---

## 🧰 Tech Stack

| Layer | Technologies |
|------|--------------|
| Frontend | React.js, Chart.js, TailwindCSS (optional) |
| Backend | Node.js, Express.js |
| APIs | RAWG API, Twitch API (optional) |
| Tools | GitHub |

---

## 🔑 API Details

### ✔ RAWG API  
Docs: https://rawg.io/apidocs  
Used for:
- Trending games  
- Game details  
- Ratings  
- Genres  
- Platforms  

### ✔ Twitch API (Optional)  
Docs: https://dev.twitch.tv/docs/api  

---

## ⚙️ Installation

### 1️⃣ Clone the repo
```bash
git clone https://github.com/abhishekratnakar31/miniGameDashboard.git

npm inatall

cd miniGameDashboard

npm install

npm run dev
