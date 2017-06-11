<template>
  <div id="app">
    <!-- navigation bar -->
    <header class="navbar">
        <section class="navbar-section">
            <a href="/" class="navbar-brand logo">
                <img src="~public/logo.svg" height="40px">
                <span class="blue-text">Doboom</span>
            </a>
        </section>
        <section class="navbar-section">
            <!-- user section(avatar) -->
            <div class="dropdown dropdown-right">
                <a href="#" class="avatar dropdown-toggle" tabindex="0">
                    <img src="~public/user.png">
                </a>
                <ul class="menu">
                    <li class="menu-item">
                        <a href="#">Settings</a>
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </section>
    </header>
    <!-- transition for the main viewport -->
    <transition name="fade" mode="out-in">
      <main class="content" role="main">
        <div class="wrapper">
          <router-view class="view"></router-view>
        </div>
      </main>
    </transition>
    <!-- footer section -->
    <!--<swagness></swagness>-->
  </div>
</template>
<style lang="less" src="./styles/spectre-master/spectre.less"></style>
<style lang="less" src="./styles/spectre-master/spectre-exp.less"></style>
<style lang="less" src="./styles/spectre-master/spectre-icons.less"></style>
<!-- handcrafted stylesheet, tend to make it leaner -->
<!-- <style lang="sass" src="./styles/config.scss"></style> -->

<script>
//import swagness from './components/footer.vue'
export default {
  //components: {swagness}
}
</script>

<style>
	.navbar{
		width: 960px;
		margin: 0 auto;
		padding: 5px 0px;
	}
	.blue-text{
		color: #2196F3;
	}
	.logo img ,.logo span{
		vertical-align: middle;
	}
	.logo span{
		font-size: 18px;
		padding: 5px;
	}
	.container{
		width: 980px;
	}
</style>
