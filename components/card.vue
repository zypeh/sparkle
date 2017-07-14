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
          <span class="icon-love"></span>
          <span>Like</span>
        </a>

        <!-- Comment -->
        <a class="action comment">
          <span class="icon-comment"></span>
          <span>Comment</span>
        </a>

        <!-- Share -->
        <a class="action share">
          <span class="icon-share-1"></span>
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
              <span class="icon-share-1"></span>
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

  methods: {
    Cardlike :(count) => count > 1 ? count + ' likes' : count + 'like', 
    ShowReply :(text) => text ? 'Reply ' + text + ' : ' : null
  },
}
</script>

<style lang="less" scoped>
@blue:#2196F3;
@black: #2B2B2B;
@grey-1:#9E9E9E;
@grey-2:#95989A;
@grey-3:#616161;
@grey-4:#E5E5E5;
@red:#f44336;
@background-1:#FAFAFA;

@border-grey:1px solid rgba(0,0,0,.0975);
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
.cards{
  .card{
    margin-top: 2rem;
    background-color: white;
    .card-header{
      padding: 0.7em 0.7em 0 0.7em;
      .avatar-sl{
        width: 3.6rem;
        height: 3.6rem;
      }
      .title{
        display: inline-block;
        vertical-align: middle;
        padding: 0px 0.5em;
        a{
          cursor: pointer;
          font-weight: 600;
          color: @black;
        }
      }
      .role{
        font-size: 0.8em;
      }
    }
    .card-image{
      padding-top: 0.7em;
    }
    .card-body{
      font-size: 1.1em;
      .time{
        margin-top: 0.5em;
        font-size: 0.8em;
        color: @grey-2;
      }
    }
    .card-footer{
      /* 本来的padding-top太大 [美观] */
      padding: 0em 1em 0.6em 1em;

      .action{
        display: inline-block;
        /* 增加icon之前的间距 */
        padding-right: 0.5em;
        margin-bottom: 5px;
        cursor: pointer;
        color: @grey-2;
        user-select:none;
        -moz-user-select:none;
        -webkit-user-select:none;
        /* 这里的span指的是icon和字,例子：
          <a class="action">
          <span class="icon"></span>
          <span>Comment</span>
          </a>
         */
        span{
          display: inline-block;
          vertical-align: middle;
          font-size: 1em;
          padding: 3px;
        }
      }
      .action.comment:hover , .action.reply:hover{
        color:@blue;
      }
      .action.share:hover{
        color:@grey-3;
      }
      .love-active{
        color: @red;
      }
      .tile{
        .tile-content{
          .tile-title{
            font-weight: 600;
          }
          .tile-title,.tile-subtitle{
            margin-bottom: 0px;
            color: @black;
          }
          .comment-action{
            display: inline-block;
            padding: 2px 10px 2px 0px;
          }
          .comment-action.share span{
            font-size: 10px;
          }
        }
      }
      .comment-here{
        textarea{
          width:100%;
          border: 0;
          border-top: solid 1px rgba(0,0,0,.0975);
          padding: 5px 2px;
          resize: none;
          &:focus{
            outline:none;
          }
        }
        .tips{
          font-size:1rem;
        }
      }
    }
  }
}
</style>
