<template>
  <section>
    <div class="home-view">
      <!-- left
      show top button, and the user related operation if there is any.-->
      <sidebar></sidebar>
      <!-- center
      mostly content and main viewport. -->
      <sidebar></sidebar>
      <!-- right -->
      <sidebar></sidebar>
    </div>
  </section>
</template>

<style lang="sass" scoped>
section {
  .home-view {
    display: flex;
    flex-direction: row;
  }
}
</style>
<script>
import sidebar from '../components/sidebar.vue'

export default {
  components: {
    sidebar
  }
}
</script>
