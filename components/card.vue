<template>
  <section class="cards">
    <!-- NewsFeed Card Start -->
    <div class="card" v-for="(card,index) in cards"> 

    <!-- Header [show if header exist] -->
      <div class="card-header" v-if="card.header">
        <figure class="avatar avatar-sl">
          <img :src="card.header.author_img" />
        </figure>
        <div class="title">
          <div class="title-desc">
            <a href="#">{{ card.header.author }}</a>
            posted a post at
            <a href="#">{{ card.header.org }}</a>
          </div>
          <div class="role">
            {{ card.header.role }}
          </div>
        </div>
      </div>

      <!-- Image [show if img exist] -->
      <div class="card-image" v-if="card.img">
        <img :src="card.img" class="img-responsive" />
      </div>

      <!-- Content [show if header exist] -->
      <div class="card-body">
        {{ card.content }}
        <div class="time">
            {{ card.time }}
        </div>
      </div>
      <div class="divider"></div>
      <div class="card-footer grey" id="action-card">
        <a class="action like"
          @click="cards[index].isLiked = !cards[index].isLiked"
          :class="{'love-active': cards[index].isLiked}">
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
        <div class="action" v-if="card.like > 0" style="display:block;padding-bottom:3px;">
          <span v-if="card.like == 1">{{ card.like }} like</span>
          <span v-else>{{ card.like }} likes</span>
        </div>
        <div class="tile" v-for="comment in card.comments">
          <div class="tile-icon">
            <figure class="avatar avatar-sl">
              <img :src="comment.img" />
            </figure>
          </div>
          <div class="tile-content">
            <a href="#" class="tile-title">
              {{comment.name}}
            </a>
            <p class="tile-subtitle">
              <span class="grey-text"
                v-if="comment.reply !== ''">
                Reply {{comment.reply}} : </span>
                {{comment.comment}}</p>
            <a href="javascript:void(0)"
              class="comment-action action reply"
              @click="cards[index].replyuser = comment.name">
              <span class="icomoon icon-reply" style="top:-2px;"></span>
              reply
            </a>
            <a href="#" class="comment-action action share">
              <span class="icon-mail-forward"></span>
              share
            </a>
          </div>
        </div>
        <div class="comment-here">
          <span class="grey-text"
            v-if="cards[index].replyuser !== ''"
            >Reply {{cards[index].replyuser}} : </span>
          <autosize/>
          <div class="tips">Press enter to comment</div>
        </div>
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
      autosize,
    },
    data(){return{}},
      props:
    {
      cards  : { default: null },
    },
  }
</script>

<style scoped>
	.love-active{
		animation: zoom 200ms ease-out alternate;
	}
	@keyframes zoom{
		0%{
			transform: scale(1);
		}
		50%{
			transform: scale(1.5);
		}
		100%{
			transform: scale(1);
		}
	}
</style>
