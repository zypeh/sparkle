<template>
  <section class="profile">
    <sidebar></sidebar>
    <div class="card">
      <img src="~public/logo.png" alt="logo"></img>
      <p align="center"> Nyao ~ !</p>
    </div>
  </section>
</template>

<style lang="sass">
@import "../styles/config";

.profile {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: flex;
  min-height: 100%;
}

.card {
  width: 100%;
  background: $foreground-color;
  border-radius: 2px;
  box-shadow: 0 1px 0 0 #D7D8DB, 0 0 0 1px #E3E4E8;
}

</style>

<script>
import sidebar from '../components/sidebar.vue'

export default {
  name: 'profile',
  components: {
    sidebar
  }
}
</script>
