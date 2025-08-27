# 🌦️ Weather App

A simple and responsive **Weather App** built with **React.js** and **Material UI**.  
It fetches real-time weather data from the **OpenWeatherMap API** and displays useful information like temperature, humidity, min/max temperature, and weather conditions.

---

## 🚀 Features

- Search weather information by **city name**  
- Displays:
  - 🌡️ Temperature (current, min, max)
  - 💧 Humidity
  - 🌥️ Weather condition (with icons)
  - 🌞 Feels like temperature
- Beautiful **UI with Material UI components**  
- Dynamic weather cards with different background images for **hot, cold, and rainy** weather conditions  
- Error handling for invalid city names  

---

## 🌍 Live Demo

🔗 [Click here to view the Weather App](https://weather-app278.netlify.app/)  

---

## 🛠️ Tech Stack

- **React.js** ⚛️  
- **Material UI (MUI)** 🎨  
- **OpenWeatherMap API** 🌐  
- **CSS**

---

## 📂 Project Structure

```bash
📦 weather-app
┣ 📂 src
┃ ┣ 📜 App.jsx
┃ ┣ 📜 SearchBox.jsx
┃ ┣ 📜 InfoBox.jsx
┃ ┣ 📜 SearchBox.css
┃ ┣ 📜 InfoBox.css
┃ ┗ 📜 index.js
┣ 📜 package.json
┣ 📜 README.md
┗ 📜 .env
```
---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kumarshobhit-1/weather-app.git
   cd weather-app
   ```


2. **Install dependencies**
    ```bash
    npm install
    ```


3. **Create .env file in project root**

VITE_API_URL=https://api.openweathermap.org/data/2.5/weather
VITE_API_KEY=your_openweathermap_api_key


4. **Run the project**

    ```bash
    npm run dev
    ```

---

## 🎯 Usage

- Enter a city name in the search box

- Click on Search

- Weather details will be displayed in a beautiful card

---

## 🌍 API Reference

This project uses the [OpenWeatherMap](https://openweathermap.org/api) API to fetch weather data.

Example API call:
    ```bash
    https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=YOUR_API_KEY&un
    ```

---

## 👨‍💻 Author

Shobhit Kumar 
- 📧 Email: shobhitkumar1437@gmail.com
- 🔗 LinkedIn: [Shobhit Kumar](https://www.linkedin.com/in/shobhit-kumar1/)

---

## 🛡 Copyright Notice

© 2025 Shobhit Kumar — This is developed and maintained by Shobhit Kumar. All rights reserved.
