<template>
  <div class="commentarea">
  <!-- UserComment Area -->
  <div class="tile" v-for="comment in comments">

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
        @click="replyuser = comment.name">
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
  <div class="comment-here">
    <span v-text="ShowReply(replyuser)"></span>
    <autosize :placeholder="'Comment here...'"></autosize>
    <div class="tips">Press enter to comment</div>
  </div>
  </div>
</template>
<script>
import autosize from '~components/autoresize-textarea'
	export default {
    components:{
      autosize,
    },
    data(){
      return{
        replyuser:'',
      }
    },
    props:{
      comments  : { default: null },
    },
    methods:{
      ShowReply :(text) => text ? 'Reply ' + text + ' : ' : null
    }
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

.tile{
  margin-bottom:10px;
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
</style>
