<template>
  <nav class="navbar navbar-expand-lg navbar-light nav">
    <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link exact class="nav-link" :to="{ name: 'Home'}">HOME
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Payper'}">PAYPER
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'PE-LiveIPS'}">LIVE IPS
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'PAX'}">PAX</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"
               id="navbarDropdownMenuLink" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              INFO
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link class="dropdown-item"
                           :to="{ name: 'PE-Info-Payperex'}">PAYPEREX
              </router-link>
              <router-link class="dropdown-item" :to="{ name: 'PE-Info-FAQ'}">
                FAQ
              </router-link>
              <router-link class="dropdown-item bd_none"
                           :to="{ name: 'PE-Info-Glossary'}">GLOSSARY
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'PE-ContactUs'}">CONTACT
              US
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavHeader',
};
</script>
<style scoped>
</style>
