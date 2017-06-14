<template>
  <section>
    <div class="sidebar">
      <ul class="menu">
        <!-- menu header text -->
        <button class="btn">Create Startup</button>
        <li class="divider" data-content="ORGANIZATION">
        </li>
        <!-- menu item -->
        <li class="menu-item">
          <a href="#">
            <div class="tile tile-centered">
              <div class="tile-icon">
                <img src="~static/logo.svg" class="avatar">
              </div>
              <div class="tile-content">
                Steve Rogers
              </div>
            </div>
          </a>
        </li>
        <!-- menu divider -->
        <li class="divider" data-content="YOUR PRODUCT">
        </li>
        <!-- menu item -->
        <li class="menu-item">
          <a href="#">
            <div class="tile tile-centered">
              <div class="tile-icon">
                <img src="~static/key.jpg" class="avatar">
              </div>
              <div class="tile-content">
                Smart key
              </div>
            </div>
          </a>
          <a href="#">
            <div class="tile tile-centered">
              <div class="tile-icon">
                <img src="~static/bicycle.jpg" class="avatar">
              </div>
              <div class="tile-content">
                Smart BIKE
              </div>
            </div>
          </a>
        </li>
        <!-- menu divider -->
        <li class="divider" data-content="FOLLOWED PRODUCT">
        </li>
        <!-- menu item -->
        <li class="menu-item">
          <a href="#">
            <div class="tile tile-centered">
              <div class="tile-icon">
                <img src="~static/user.png" class="avatar">
              </div>
              <div class="tile-content">
                Linux
              </div>
            </div>
          </a>
          <a href="#">
            <div class="tile tile-centered">
              <div class="tile-icon">
                <img src="~static/aircooler.png" class="avatar">
              </div>
              <div class="tile-content">
                Air cooler
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
</script>

<style lang="less" scoped>
  .sidebar{
    padding: 20px 0px;
    width: 250px;
  }
  .menu{
    box-shadow: none;
    border: 0;
  }
  .btn{
    width: 100%;
    margin-bottom: 10px;
  }
</style>
