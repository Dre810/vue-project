<template>
  <div class="weather-page" :class="weatherBackground">
    <div class="weather-container">
      <h1>🌤️ Weather Dashboard</h1>
      <div class="search-box">
        <input
          type="text"
          v-model="city"
          placeholder="Enter city name..."
          @keyup.enter="getWeather"
        />
        <button @click="getWeather">Search</button>
      </div>

      <div v-if="weather" class="weather-card">
        <h2>{{ weather.name }}, {{ weather.sys.country }}</h2>
        <p class="temp">{{ Math.round(weather.main.temp) }}°C</p>
        <p class="desc">{{ weather.weather[0].description }}</p>
        <p>Humidity: {{ weather.main.humidity }}%</p>
        <p>Wind: {{ weather.wind.speed }} m/s</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const city = ref('')
const weather = ref(null)
const apiKey = '00a0e42a2b93e98f879bf96c16ab3f21' // replace with your OpenWeatherMap key

const getWeather = async () => {
  if (!city.value) return
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`
    )
    weather.value = response.data
  } catch (error) {
    alert('City not found. Try again!')
  }
}

// 🎨 compute background class dynamically based on weather
const weatherBackground = computed(() => {
  if (!weather.value) return 'default-bg'
  const main = weather.value.weather[0].main.toLowerCase()
  if (main.includes('cloud')) return 'cloudy-bg'
  if (main.includes('rain')) return 'rainy-bg'
  if (main.includes('clear')) return 'sunny-bg'
  if (main.includes('snow')) return 'snow-bg'
  if (main.includes('storm') || main.includes('thunder')) return 'storm-bg'
  return 'default-bg'
})
</script>


<style>

.weather-page {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 1s ease;
}

.weather-container {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.3);
  color: white;
  width: 350px;
  text-align: center;
  animation: fadeIn 1s ease;
}

/* Removed duplicate input, button, .temp, .desc, and @keyframes fadeIn */

/* 🌈 Weather-based backgrounds */
.default-bg {
  background: linear-gradient(135deg, #74ebd5, #ACB6E5);
}

.sunny-bg {
  background: linear-gradient(135deg, #f6d365, #fda085);
}

.cloudy-bg {
  background: linear-gradient(135deg, #bdc3c7, #2c3e50);
}

.rainy-bg {
  background: linear-gradient(135deg, #00c6ff, #0072ff);
}

.snow-bg {
  background: linear-gradient(135deg, #e0eafc, #cfdef3);
}

.storm-bg {
  background: linear-gradient(135deg, #232526, #414345);
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #74ebd5, #ACB6E5);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.3);
  width: 350px;
  color: #fff;
  animation: fadeIn 1s ease;
}

h1 {
  margin-bottom: 1.5rem;
}

.search-box {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1.5rem;
}

input {
  padding: 10px;
  border: none;
  border-radius: 10px;
  width: 70%;
  outline: none;
  transition: 0.3s;
}

input:focus {
  transform: scale(1.03);
}

button {
  padding: 10px 15px;
  background: #2193b0;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #6dd5ed;
}

.weather-card {
  animation: slideIn 1s ease;
}

.temp {
  font-size: 3rem;
  font-weight: bold;
}

.desc {
  font-style: italic;
  text-transform: capitalize;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes slideIn {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>
.temp {
  font-size: 3rem;
  font-weight: bold;
}

.desc {
  font-style: italic;
  text-transform: capitalize;
}

@keyframes slideIn {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
