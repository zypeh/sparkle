<!--
This will be used in
the main content page, smaller footer bar.
-->
<template>
  <footer>
    <div class="wrapper">
      <div class="mini-footer">

        <div class="footer-left">
          <ul>
            <li><a href="/">TEAMS</a></li>
            <li><a href="/">SUPPORT</a></li>
          </ul>
        </div>

        <div class="footer-center"><router-link to="/" exact><img class="logo" src="~public/logo.png" height="33" alt="logo"></router-link></div>

        <div class="footer-right">
          <ul>
            <li><a href="/">BRANDING</a></li>
            <li><a href="/">CONTACTS</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>

<!-- This will be used in the main and non main page.
Used at BRANDING, SUPPORT, TEAMS and homepage
<template>
  <footer>
    <div class="wrapper">
      <div class="big-footer">
        <p>Praise the sun!</p>
      </div>
    </div>
  </footer>
</template>
-->

<style>
footer {
  vertical-align: baseline;
  margin: 0;
  padding: 0;
}

.mini-footer {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  font-size: 60% !important;
  justify-content: space-between;
  align-content: center;
  padding: 0.4em 0;
  border-top: 1px solid #000;
}

.big-footer {
  height: 4vmax;
}

.footer-left, .footer-right {
  display: flex;
  align-items: center;
}

.footer-left { padding-left: 1.5em; }
.footer-right { padding-right: 1.5em; }
.footer-center { display: block; }

</style>

<script>
export default {
  name: 'swagness'
}
</script>

