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
        <img :src="post.img" class="img-responsive" />
      </div>
      <div class="card-body">
        We believe online ads should be better. Here's how we'll be suporting the Better Ads Standards → <a href="#"> https://goo.gl/MRJkiZ</a>
        <div class="time grey">8hrs ago</div>
      </div>
      <div class="divider"></div>
      <div class="card-footer grey" id="action-card">
        <a class="action like action">
          <span class="icon-heart"></span>
          <span>Like</span>
        </a>
        <a class="action comment action">
          <span class="icon-chat-3"></span>
          <span>Comment</span>
        </a>
        <a class="action share action">
          <span class="icon-share-square-o"></span>
          <span>Share</span>
        </a>
        <div class="comment-area">
          <span v-if="post.like == 1">{{ post.like }} like</span>
          <span v-else>{{ post.like }} likes</span>
        </div>
        <div class="tile">
          <div class="tile-icon">
            <figure class="avatar avatar-sm">
              <img src="user.png" />
            </figure>
          </div>
          <div class="tile-content">
            <a href="#" class="tile-title">Linus everland</a>
            <p class="tile-subtitle">Vivamus feugiat sapien sed dui dictum, eget finibus nunc volutpat. Quisque blandit et est non hendrerit. Etiam dictum augue in sagittis volutpat. Integer gravida tristique quam, ut consequat lorem rhoncus in. Quisque sem sem, sagittis nec scelerisque vel, malesuada at metus. Ut a fermentum enim, vel feugiat nunc. Phasellus pharetra eros sit amet lacinia vulputate. Duis posuere orci mi, posuere ultricies odio elementum eget. Proin eget posuere erat. Maecenas eleifend suscipit felis, non aliquet turpis ullamcorper efficitur. Nunc in elit feugiat, elementum velit non, fermentum urna. Maecenas aliquet commodo eros eget fringilla.</p>
            <a href="#" class="comment-action action"><span class="icomoon icon-reply" style="top:-2px;"></span> reply</a>
            <a href="#" class="comment-action action"><span class="icon-mail-forward"></span> share</a>
            <div class="tile">
              <div class="tile-icon">
                <figure class="avatar avatar-sm">
                  <img src="user.png" />
                </figure>
              </div>
              <div class="tile-content">
                <a href="#" class="tile-title">Linus everland</a>
                <p class="tile-subtitle">Vivamus feugiat sapien sed dui dictum, eget finibus nunc volutpat. Quisque blandit et est non hendrerit. Etiam dictum augue in sagittis volutpat. Integer gravida tristique quam, ut consequat lorem rhoncus in. Quisque sem sem, sagittis nec scelerisque vel, malesuada at metus. Ut a fermentum enim, vel feugiat nunc. Phasellus pharetra eros sit amet lacinia vulputate. Duis posuere orci mi, posuere ultricies odio elementum eget. Proin eget posuere erat. Maecenas eleifend suscipit felis, non aliquet turpis ullamcorper efficitur. Nunc in elit feugiat, elementum velit non, fermentum urna. Maecenas aliquet commodo eros eget fringilla.</p>
                <a href="#" class="comment-action action"><span class="icomoon icon-reply" style="top:-2px;"></span> reply</a>
                <a href="#" class="comment-action action"><span class="icon-mail-forward"></span> share</a>
              </div>
            </div>
          </div>
        </div>
        <div class="input-group">
          <textarea class="form-input" placeholder="Comment here" />
          <button class="btn btn-primary input-group-btn" style="height:auto">Comment</button>
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
          time:'8hrs ago',
          like:190,
        },
        {
          author:'Linus Xenos',
          org:'Google',
          role:'Founder of Tex Inc',
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
  .comment-area{
    margin: 7px 0px;
  }
  .tile-title{
    font-weight: 600;
    font-size: 15px;
  }
  .tile-title, .tile-subtitle{
    margin-bottom: 0px;
    color: #4E4E4E;
  }
  .comment-action{
    display: inline-block;
    padding: 5px 10px 10px 0px;
    
  }
  .comment-action:nth-child(even) span{
    font-size: 10px;
  }
  .action:hover{
    text-decoration: none;
    color: #2196F3;
  }
  .action{
    color: #95989A;
  }
</style>
