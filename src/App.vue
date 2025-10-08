<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/weather" class="nav-link">Weather</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

#app {
  text-align: center;
}

/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: center;
  gap: 30px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
}

.nav-link:hover {
  color: #6dd5ed;
}

.router-link-active {
  border-bottom: 2px solid #6dd5ed;
}
</style>
