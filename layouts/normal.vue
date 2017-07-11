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
    <footer>
      
    </footer>
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

body{
    background-color: white;
}
@blue:#2196F3;
@black: #2B2B2B;
@grey-1:#9E9E9E;
@grey-2:#95989A;
@grey-3:#616161;
@grey-4:#E5E5E5;
@red:#f44336;
@background-1:#FAFAFA;

@border-grey:1px solid rgba(0,0,0,.0975);

/* navbar (default.vue) */
.navbar-container{
  position: fixed;
  top: 0;
  z-index: 200;
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
        height: 35px;
      }
      span{
        font-size: 20px;
        padding: 5px;
        color:@blue;
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

    /* 那三个icon */
    .nav-icon{
      font-size:25px;
      color:#2b2b2b;
      margin:2.5px 0px;
      &:hover,&:focus{
        box-shadow:none;
      }
    }
    .add.nav-icon{
      margin:0px;
      font-size:30px;
    }

    .dropdown{
      margin-left:20px;
      .avatar-tx{
        width:32px;
        height:32px;
      }
      .avatar{
        margin:5px 0px;
      }
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
