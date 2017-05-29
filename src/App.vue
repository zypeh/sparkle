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
import swagness from './components/footer.vue'

export default {
  components: {
    swagness
  }
}
</script>

<style lang="sass">
@import "./styles/config";
@import "./styles/mixins";
@import "./styles/normalize";

nav {
  background-color: $theme-color;
}

main {
  min-height: 100%;
}

.wrapper {
  max-width: 960px;
  margin: 0 auto;
}

.navigation {
  height: 42px;
}

.navigation, .mini-footer, .big-footer {
  width: 100%;
  display: flex;
  font-weight: bold;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
  }

  li {
    display: inline-block;
    line-height: 2;
    list-style: none;

    a {
      padding: .5em 1.2em;
      &:hover, &:focus {
        color: $background-color;
        text-decoration: none;
      }
      &.router-link-active {
        color: $background-color;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active { transition: all .2s ease; }
.fade-enter, .fade-leave-active { opacity: 0; }

</style>
