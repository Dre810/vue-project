<template>
  <div class="about">
    <h2>About This App</h2>
    <p>
      I built this weather dashboard using <strong>Vue.js</strong> and the
      <strong>OpenWeatherMap API</strong>. It allows users to view real time
      weather updates for any city in the world. It can fetch accurate data such as
       temperature, humidity, wind speed, and sky conditions all
       displayed in a clean, animated interface with dynamic backgrounds that change depending
        on the weather.
    </p>
    <router-link to="/" class="btn">Back Home</router-link>
  </div>
</template>

<style>
.about {
  
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  padding: 20px;
}
.btn {
  margin-top: 20px;
  padding: 10px 20px;
  background: white;
  color: #764ba2;
  text-decoration: none;
  border-radius: 8px;
}
.btn:hover {
  background: #b993d6;
  color: white;
}
</style>