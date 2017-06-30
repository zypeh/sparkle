<template>
  <div id="app">
    <!-- navigation bar -->
    <header class="navbar-container">
      <div class="navbar">
        <section class="navbar-section">
          <a href="/" class="navbar-brand logo">
            <img src="logo.svg" height="40px" style="vertical-align:middle">
            <span class="blue-text">Doboom</span>
          </a>
          <div class="has-icon-right">
            <input type="text" class="form-input" placeholder="Explore Project" />
            <i class="form-icon icon icon-search"></i>
          </div>
        </section>
        <section class="navbar-section">
            <div class="dropdown dropdown-right">
                <a href="#" class="avatar dropdown-toggle" tabindex="0">
                  <img src="user.png">
                </a>
                <ul class="menu">
                    <li class="menu-item">
                      <a href="#"><span class="icomoon  icon-settings"></span> Settings</a>
                      <a href="#"><span class="icomoon  icon-exit_to_app"></span> Logout</a>
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

<style lang="less">
  @border-grey:1px solid rgba(0,0,0,.0975);
  body{
    background-color:#FAFAFA;
  }
  .icomoon{
    position: relative;
    top: 1px;
  }
  .blue-text{
    color: #2196F3;
  }
  
</style>
<style scoped lang="less">
  @border-grey:1px solid rgba(0,0,0,.0975);
  .logo img ,.logo span{
    vertical-align: middle;
  }
  .navbar-container{
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    z-index: 999;
    border-bottom:@border-grey;
  }
  .navbar{
    width: 960px;
    margin: 0 auto;
    padding: 10px 0px;
    min-width: 290px;
  }
  .logo span{
    font-size: 18px;
    padding: 5px;
  }
  .has-icon-right{
    margin-left: 20px;
  }
  .form-input{
    width: 300px;
    border-radius: 20px;
    padding: 0.3rem 1.2rem !important;
  }
  .icon-search:before{
    width:11px;
    height: 11px;
  }
  .icon-search{
    margin-right: 10px;
  }
  @media screen and (max-width: 980px) {
    .navbar{
      width: 100%;
      padding: 10px 10px;
    }
    .navbar-brand{
      width: 122px;
    }
  }
  @media screen and (max-width: 601px){
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
  @media screen and (max-width: 480px){
    .form-input{
      width: auto;
    }
  }
</style>
