<template>
  <section class="sidebar">
    <p>Quick login</p>
    <button class="quick_login_button facebook" id="login_via_facebook">Signup via Facebook</button>
    <button class="quick_login_button twitter" id="login_via_twitter">Signup via Twitter</button>
    <button class="quick_login_button google" id="login_via_google">Signup via Google</button>
  </section>
</template>

<style lang="sass" scoped>
@import "../styles/config";

.sidebar {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 23%;
  min-height: 100%;
}

button {
  padding: .5em;
  margin-bottom: .5vmax;

  > *:last-child {
    margin-bottom: 0 !important;
  }
}

.quick_login_button {
  font-size: 60%;
  width: 100%;
  padding-left: 3px;
  padding-right: 3px;
  border: 0;
  border-radius: 2px;
}

.facebook {
  background-color: #5e81a8;
  color: #FFF;
}

.google {
  background-color: #FFF;
  color: $text-color;
}

.twitter {
  background-color: #4099FF;
  color: #FFF;
}
</style>

<script>
export default {
  name: 'sidebar'
}
</script>
