<template>
  <div id="app">
    <!-- navigation bar -->
    <header class="navbar-container">
      <div class="navbar">
        <section class="navbar-section">
          <a href="/" class="navbar-brand logo">
            <img src="logo.svg">
            <span>Doboom</span>
          </a>
        </section>
        <section class="navbar-center">
          <div class="has-icon-right">
            <input type="text" class="form-input"
									 placeholder="Explore Project"
									 :disabled="!searchLoad"
									 />
            <i class="form-icon"
							 @click="searchLoad = !searchLoad"
							 :class="[ searchLoad ? 'icon-search icon': 'loading disabled' ]"
							 ></i>
          </div>
        </section>
        <section class="navbar-section">
          <a href="#" class="nav-icon" style="margin-left:15px">
            <span class="icon-explore"></span>
          </a>
          <div class="dropdown dropdown-right">
            <a href="javascript:void(0)" class="dropdown-toggle nav-icon" tabindex="0">
              <span class="icon-notifications"></span>
            </a>
            <ul class="menu">
              <li class="menu-item">
                <a href="#"><span class="icomoon icon-settings"></span> Settings</a>
                <a href="#"><span class="icomoon icon-exit_to_app"></span> Logout</a>
              </li>
            </ul>
          </div> 
          <div class="dropdown dropdown-right">
            <a href="javascript:void(0)" class="dropdown-toggle nav-icon add" tabindex="0">
              <span class="icon-add"></span>
            </a>
            <ul class="menu">
              <li class="menu-item">
                <a href="#"><span class="icomoon icon-settings"></span> Settings</a>
                <a href="#"><span class="icomoon icon-exit_to_app"></span> Logout</a>
              </li>
            </ul>
          </div>
          <div class="dropdown dropdown-right">
            <a href="javascript:void(0)" class="avatar avatar-tx dropdown-toggle" tabindex="0">
              <img src="user.png">
            </a>
            <ul class="menu">
              <li class="menu-item">
                <a href="#"><span class="icomoon icon-settings"></span> Settings</a>
                <a href="#"><span class="icomoon icon-exit_to_app"></span> Logout</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </header>

    <!-- content -->
    <main class="content" role="main" style="margin-top:82px;">
      <nuxt/>
    </main>
  </div>
</template>
<script>
	export default{
		data(){
			return{ searchLoad:true }
		}
	}
</script>
<style lang="less">
@import '~assets/tex/navbar.less';
</style>
