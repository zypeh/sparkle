<template>
  <div id="app">
    <!-- navigation bar -->
    <header class="navbar-container">
      <div class="navbar">
        <section class="navbar-section">
          <a href="/" class="navbar-brand logo">
            <img src="logo.svg">
            <span class="blue-text">Doboom</span>
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
          <a href="#" class="nav-icon"><span class="icon-explore"></span></a>
          <a href="#" class="nav-icon"><span class="icon-notifications"></span></a>
          <a href="#" class="nav-icon"><i class="icon icon-plus"></i></a>
          <div class="dropdown dropdown-right">
              <a href="javascript:void(0)" class="avatar dropdown-toggle" tabindex="0">
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
    <main class="content" role="main" style="margin-top:60px;">
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
/* navbar (default.vue) */
.navbar-container{
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  background-color: white;
  border-bottom:1px solid rgba(0,0,0,.0975);
  
  .navbar{
    margin: 0 auto;
    min-width: 290px;
    max-width: 960px;
    padding: 20px 0px;
    
    /* Logo */
    .logo{
      img ,span{
        display: inline-block;
        vertical-align: middle;
      }
      img{
        height: 40px;
      }
      span{
        font-size: 18px;
        padding: 5px;
      }
    }

    /* Search bar */
    .has-icon-right{
      /* 把 Search bar 向右移15px [美观] */
      margin-left: 15px;
    }
    .form-input{
      width: 300px;
      padding: 0rem 1.2rem;
      border-radius: 3px;
    }
    .icon-search:before{
      width:11px;
      height: 11px;
    }
    .icon-search{
      margin-right: 10px;
    }
  }
}

/*
  Responsive
*/
/* Large Device */
@media screen {

  @media (max-width: 980px) {
    .navbar-container .navbar{
      padding: 10px 10px;

      .navbar-brand{
        width: 125px;
      }
    }
  }
  @media (max-width: 601px) {
    .navbar-container .navbar{
      .navbar-brand span{
      display: none;
      }
      .has-icon-right{
        margin-left: 10px;
      }
      .navbar-brand{
        width:auto;
      }
    }
  }
  @media (max-width: 480px) {
    .navbar-container .navbar{
      .form-input{
        width: auto;
      }
    }
  }
}
</style>
