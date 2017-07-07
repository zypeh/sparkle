<template>
  <section class="cards">
    <!-- NewsFeed Card Start -->
    <div class="card" v-for="(card,index) in cards"> 

      <!-- Header -->
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

      <!-- Image -->
      <div class="card-image" v-if="card.img">
        <img :src="card.img" class="img-responsive" />
      </div>

      <!-- Content -->
      <div class="card-body">
        {{ card.content }}
        <div class="time">
            {{ card.time }}
        </div>
      </div>

      <div class="divider"></div>

      <!-- Card action -->
      <div class="card-footer grey" id="action-card">

        <!-- Like -->
        <a class="action like"
          @click="cards[index].isLiked = !cards[index].isLiked"
          :class="{'love-active': cards[index].isLiked}">
          <span class="icon-heart"></span>
          <span>Like</span>
        </a>

        <!-- Comment -->
        <a class="action comment">
          <span class="icon-chat-3"></span>
          <span>Comment</span>
        </a>

        <!-- Share -->
        <a class="action share">
          <span class="icon-share-square-o"></span>
          <span>Share</span>
        </a>

        <!-- like count -->
        <div class="action like-count" v-if="card.like > 0">
          <span v-text="Cardlike(card.like)"></span>
        </div>

        <!-- UserComment Area -->
        <div class="tile" v-for="comment in card.comments">

          <!-- User Photo -->
          <div class="tile-icon">
            <figure class="avatar avatar-sl">
              <img :src="comment.img" />
            </figure>
          </div>

          <div class="tile-content">

            <!-- Username -->
            <a href="#" class="tile-title">
              {{comment.name}}
            </a>

            <!-- Comment Text -->
            <p class="tile-subtitle">
              <span class="grey-text" v-text="ShowReply(comment.reply)"></span>
              {{comment.comment}}
            </p>

            <!-- Reply User Comment -->
            <a href="javascript:void(0)"
              class="comment-action action reply"
              @click="cards[index].replyuser = comment.name">
              <span class="icomoon icon-reply"></span>
              reply
            </a>

            <!-- Share User Comment -->
            <a href="#" class="comment-action action share">
              <span class="icon-mail-forward"></span>
              share
            </a>
          </div>
        </div>

        <!-- Comment TextBox -->
        <div class="comment-here">
          <span v-text="ShowReply(cards[index].replyuser)"></span>
          <autosize :placeholder="'Comment here...'"></autosize>
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
    autosize
  },

  props:{
    cards  : { default: null },
  },

  data(){
    return{}
  },

  methods: {
    Cardlike :(count) => count > 1 ? count + ' likes' : count + 'like', 
    ShowReply :(text) => text ? 'Reply ' + text + ' : ' : null
  },
}
</script>

<style scoped>
.icon-reply{
  top:-2px;
}
.like-count.action{
  display:block !important;
  padding-bottom:4px;
}
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
