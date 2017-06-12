<template>
  <div id="app">
    <!-- navigation bar -->
    <header class="navbar">
        <section class="navbar-section">
            <a href="/" class="navbar-brand logo">
              <img src="~static/logo.svg" height="40px">
              <span class="blue-text">Doboom</span>
            </a>
        </section>
        <section class="navbar-section">
            <!-- user section(avatar) -->
            <div class="dropdown dropdown-right">
                <a href="#" class="avatar dropdown-toggle" tabindex="0">
                  <img src="~static/user.png">
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
    
    <!-- content -->
    <main class="content" role="main">
      <nuxt/>
    </main>

  </div>
</template>

