<template>
  <section>
    <!-- NewsFeed Card Start -->
    <div class="card" v-for="post in posts" :index="index">
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
      <div class="card-image" v-if="post.img !== ''">
        <img :src="post.img" class="img-responsive" />
      </div>
      <div class="card-body">
        We believe online ads should be better. Here's how we'll be suporting the Better Ads Standards → <a href="#"> https://goo.gl/MRJkiZ</a>
        <div class="time grey">8hrs ago</div>
      </div>
      <div class="divider"></div>
      <div class="card-footer grey" id="action-card">
        <a class="action like">
          <span class="icon-heart"></span>
          <span>Like</span>
        </a>
        <a class="action comment">
          <span class="icon-chat-3"></span>
          <span>Comment</span>
        </a>
        <a class="action share">
          <span class="icon-share-square-o"></span>
          <span>Share</span>
        </a>
        <div class="like-area" v-if="post.like > 0">
          <span v-if="post.like == 1">{{ post.like }} like</span>
          <span v-else>{{ post.like }} likes</span>
        </div>
        <div class="tile" v-for="(comment,index) in post.comments">
          <div class="tile-icon">
            <figure class="avatar avatar-sm">
              <img :src="comment.img" />
            </figure>
          </div>
          <div class="tile-content">
            <a href="#" class="tile-title">
							{{comment.name}}
						</a>
            <p class="tile-subtitle">
							<span class="grey-text"
										v-if="comment.reply !== ''"
										>Reply {{comment.reply}} : </span>{{comment.comment}}</p>
            <a href="javascript:void(0)"
							 class="comment-action reply action"
							 @click="post[0].replyuser = comment.name">
							<span class="icomoon icon-reply" style="top:-2px;"></span>
							reply {{post[0].replyuser}}
						</a>
            <a href="#" class="comment-action share action">
							<span class="icon-mail-forward"></span>
							share
						</a>
          </div>
				</div>
				<div class="comment-here">
					<span class="grey-text"
								v-if="replyuser !== ''"
								>Reply {{post[index]}} : </span>
					<autosize/>
					<div class="tips">Press enter to comment</div>
				</div>
      </div>
    </div>
    <!-- NewsFeed Card End -->
  </section>
</template>

<script>
	import autosize from '~components/autoresize-textarea'
  export default{
		components:{
			autosize
		},
    data(){return{
      posts:[
        {
					postId:'0',
					replyuser:'',
          author:'Linus Xenos',
          org:'Google',
          role:'Founder of Tex Inc',
          img:'bicycle.jpg',
          content:`We believe online ads should be better. Here's how we'll be suporting the Better Ads Standards → <a href="#"> https://goo.gl/MRJkiZ`,
          time:'8hrs ago',
          like:190,
					comments:[
						{
							img:'user.png',
							name:'Linus everland',
							reply:'',
							comment:'ndrerit. Etiam dictum augue in sagittis volutpat. Integer gravida tristique quam, ut consequat lorem rhoncus in. Quisque sem sem, sagittis nec scelerisque vel, malesuada at metus. Ut a fermentum enim, vel feugiat nunc. Phasellus pharetra eros sit amet lacinia vulputate. Duis posuere orci mi, posuere ultricies odio elementum eget. Proin',
							replyuser:'',
						},
						{
							img:'user.png',
							name:'Hellow',
							reply: 'Linus everland',
							comment:'Quisque sem sem, sagittis nec scelerisque vel, malesuada at metus. Ut a fermentum enim, vel feugiat nunc. Phasellus pharetra eros sit amet lacinia vulputate. Duis posuere orci mi, posuere ultricies odio elementum eget. Proin'
						}
					]
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
	.grey-text{
		color: #9e9e9e;
	}
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
		margin-bottom: 3px;
		color: #95989A;
  }
  .action span{
    font-size: 1em;
    padding: 3px;
    display: inline-block;
    vertical-align: middle;
  }
  .like-area{
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
  }
	.action.like:hover{
		color: #f44336;
	}
	.action.comment:hover,.comment-action.reply:hover{
		color: #2196F3;
	}
	.action.share:hover,.comment-action.share:hover{
		color: #616161;
	}
	.tips{
		font-size: 10px;
	}
</style>
