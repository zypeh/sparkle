<template>
  <div id="app">
    <!-- navigation bar -->
    <nav>
      <div class="wrapper">
        <div class="navigation">
          <div><router-link to="/" exact><img class="logo" src="~public/logo.png" height="33" alt="logo"></router-link></div>
          <ul>
            <li><router-link to="/faq">FAQ</router-link></li>
            <li><router-link to="/about">About us</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- transition for the main viewport -->
    <transition name="fade" mode="out-in">
      <main class="content" role="main">
        <div class="wrapper">
          <router-view class="view"></router-view>
        </div>
      </main>
    </transition>
    <!-- footer section -->
    <swagness></swagness>
  </div>
</template>

<!-- handcrafted stylesheet, tend to make it leaner -->
<!-- <style lang="sass" src="./styles/config.scss"></style> -->

<script>
//import swagness from './components/footer.vue'

export default {
  //components: {swagness}
}
</script>

<style>

</style>
