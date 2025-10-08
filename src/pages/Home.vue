<template>
  <div class="home">
    <h1>🌤️ Weather Dashboard</h1>
    <p>Get real-time weather updates anywhere in the world.</p>
    <router-link to="/weather" class="btn">Get Started</router-link>
  </div>
</template>

<style>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #74ebd5, #ACB6E5);
  color: white;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}
.btn {
  margin-top: 20px;
  padding: 10px 20px;
  background: white;
  color: #2193b0;
  text-decoration: none;
  border-radius: 8px;
  transition: 0.3s;
}
.btn:hover {
  background: #6dd5ed;
  color: white;
}
</style>
