<template>
  <section>
    <div class="card">
      <div class="card-header">
        <figure class="avatar avatar-sm">
          <img src="~static/user.png" />
        </figure>
        <div class="title">
          <div class="title-desc">
            <a class="text-bold black">Alex Tim</a>
            posted a post at
            <a class="text-bold black">Google</a>
          </div>
          <div class="role">
            Founder of Tex Inc.
          </div>
        </div>
      </div>
      <div class="card-image">
        <img src="~static/bicycle.jpg" class="img-responsive" />
      </div>
      <div class="card-body">
        We believe online ads should be better. Here's how we'll be suporting the Better Ads Standards → <a href="#"> https://goo.gl/MRJkiZ</a>
        <div class="time grey">8hrs ago</div>
      </div>
      <div class="divider"></div>
      <div class="card-footer grey">
        <div class="action">
          <div class="action-img">
            <img src="~static/like.png">
          </div>
          <span>Like</span>
        </div>
        <div class="action">
          <div class="action-img">
            <img src="~static/like.png">
          </div>
          <span>Like</span>
        </div>
        <div class="action">
          <div class="action-img">
            <img src="~static/like.png">
          </div>
          <span>Like</span>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-image">
        <img src="~static/bicycle.jpg" class="img-responsive" />
      </div>
      <div class="card-header">
        <h4 class="card-title">Microsoft</h4>
        <h6 class="card-subtitle">Software and hardware</h6>
      </div>
      <div class="card-body">
        Empower every person and every organization on the planet to achieve more.
      </div>
      <div class="card-footer">
        <button class="btn btn-primary">Do</button>
      </div>
    </div>
    <div class="card">
      <div class="card-image">
        <img src="~static/bicycle.jpg" class="img-responsive" />
      </div>
      <div class="card-header">
        <h4 class="card-title">Microsoft</h4>
        <h6 class="card-subtitle">Software and hardware</h6>
      </div>
      <div class="card-body">
        Empower every person and every organization on the planet to achieve more.
      </div>
      <div class="card-footer">
        <button class="btn btn-primary">Do</button>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
  .card{
    margin-top: 15px;
  }
  .card-image img{
    width: 100%;
  }
  .avatar-sm{
    width: 3.6rem;
    height: 3.6rem;
  }
  .card-header{
    padding: 0.7em 0.7em 0 0.7em;
  }
  .card-image{
    padding-top: 0.7em;
  }
  .title{
    display: inline-block;
    padding: 0px 0.5em;
    vertical-align: middle;
  }
  .title a{
    cursor: pointer;
  }
  .title a:hover{
    text-decoration: none;
  }
  .role{
    font-size: 0.8em;
  }
  .card-body{
    font-size: 1.1em;
  }
  .time{
    margin-top: 0.5em;
    font-size: 0.8em;
  }
  .card .card-footer{
    padding: 0em 1em;
    padding-bottom: 0.6em;
  }
  .action img{
    height: 20px;
  }
  .action-img{
    display: inline-block;
    vertical-align: middle;
  }
  .action{
    display: inline-block;
    padding-right: 0.5em;
  }
  .action span{
    font-size: 0.87em;
    padding: 3px;
  }
</style>
