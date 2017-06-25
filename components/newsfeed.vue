<template>
  <section>
    <!-- NewsFeed Card Start -->
    <div class="card" v-for="post in posts">
      <div class="card-header">
        <figure class="avatar avatar-sm">
          <img src="~static/user.png" />
        </figure>
        <div class="title">
          <div class="title-desc">
            <a class="text-bold black">{{ post.author }}</a>
            posted a post at
            <a class="text-bold black">Google</a>
          </div>
          <div class="role">
            Founder of Tex Inc.
          </div>
        </div>
      </div>
      <div class="card-image">
        <img v-if="post.img" :src="`${post.img}`" class="img-responsive" />
      </div>
      <div class="card-body">
        We believe online ads should be better. Here's how we'll be suporting the Better Ads Standards → <a href="#"> https://goo.gl/MRJkiZ</a>
        <div class="time grey">8hrs ago</div>
      </div>
      <div class="divider"></div>
      <div class="card-footer grey" id="action-card">
        <div :style="{color: color}" class="action like" v-on:click="changeColor">
          <span class="icon-like"></span>
          <span>Like</span>
        </div>
        <div class="action comment">
          <span class="icon-comment"></span>
          <span>Comment</span>
        </div>
        <div class="action share">
          <span class="icon-share-icon"></span>
          <span>Share</span>
        </div>
      </div>
    </div>
    <!-- NewsFeed Card End -->
  </section>
</template>

<script>

  export default{
    data(){return{
      posts:[
        {
          author:'Linus Xenos',
          org:'Google',
          role:'Founder of Tex Inc',
          img:'bicycle.jpg',
          content:`We believe online ads should be better. Here's how we'll be suporting the Better Ads Standards → <a href="#"> https://goo.gl/MRJkiZ`,
          time:'8hrs ago'
        },
        {
          author:'Linus Xenos',
          org:'Google',
          role:'Founder of Tex Inc',
          img:'',
          content:`We believe online ads should be better. Here's how we'll be suporting the Better Ads Standards → <a href="#"> https://goo.gl/MRJkiZ`,
          time:'8hrs ago'
        },
        {
          author:'Linus Xenos',
          org:'Google',
          role:'Founder of Tex Inc',
          img:'',
          content:`We believe online ads should be better. Here's how we'll be suporting the Better Ads Standards → <a href="#"> https://goo.gl/MRJkiZ`,
          time:'8hrs ago'
        },
      ]
    }}
  }
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
  .action{
    display: inline-block;
    padding-right: 0.5em;
    cursor: pointer;
  }
  .action span{
    font-size: 1em;
    padding: 3px;
    display: inline-block;
    vertical-align: middle;
  }
</style>
