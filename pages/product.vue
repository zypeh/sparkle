<template>
  <section>
    <div class="container">
      <div class="columns">
        
        <div class="col-7 col-md-12 column product-content">
        
          <div class="area" style="padding-top:0px;">
            <h2>{{intro.name}}</h2>
            <p>{{intro.desc}}</p>
          </div>
          <div class="divider"></div>
          <div class="area">
            <div class="creator" >
              <p>{{intro.tags}}<br>
                Created by <a href="#">{{intro.creator}}</a>
              </p>
              <span class="avatar avatar-lg"><img :src="intro.creator_img"></span>
            </div>
            <p><span class="icomoon icon-map"></span> {{intro.location}}</p>
            <p><span class="icomoon icon-mail-1"></span> {{intro.email}}</p>
            <p><span class="icomoon icon-date"></span> Created in {{intro.date}}</p>
          </div>

          <!-- Tabs -->
          <div class="tx-tabs">
            <a v-on:click="tabs(1)" 
            :class="[ tab == 1 ? 'active': '' ]">Introduction</a>
            <a v-on:click="tabs(2)"
            :class="[ tab == 2 ? 'active': '' ]">Timeline</a>
            <a v-on:click="tabs(3)"
            :class="[ tab == 3 ? 'active': '' ]">Comment</a>
          </div>

          <!-- Introduction tab -->
          <div v-if="tab == 1" class="tx-tab text-center">
            <div class="area"  v-for="content in intro.content">
              <h3>{{content.title}}</h3>
              <p>{{content.content}}</p>
            </div>
            <div class="area">
              <h3>Makers</h3>
              <div class="tile text-left">
                <div class="tile-icon">
                  <figure class="avatar avatar-lg">
                    <img src="user.png" />
                  </figure>
                </div>
                <div class="tile-content">
                  <a href="#"   class="tile-title">Linus everland</a>
                  <p class="tile-subtitle">Zypeh has been running his woodwork workshop for more than two decades. Zy's workshop is a small family business, with his two sons Peter and Srdan already well-versed in both the basics and the secrets of the craft. Working with Folkk, he contributed invauable insights into how Tapa boards and Plato plates shold be adjusted , treated and maintained, as well as which sorts of wood will offter the best results and textures.</p>
                </div>
              </div>
              <div class="tile text-left">
                <div class="tile-icon">
                  <figure class="avatar avatar-lg">
                    <img src="user.png" />
                  </figure>
                </div>
                <div class="tile-content">
                  <a href="#"   class="tile-title">Linus everland</a>
                  <p class="tile-subtitle">Zypeh has been running his woodwork workshop for more than two decades. Zy's workshop is a small family business, with his two sons Peter and Srdan already well-versed in both the basics and the secrets of the craft. Working with Folkk, he contributed invauable insights into how Tapa boards and Plato plates shold be adjusted , treated and maintained, as well as which sorts of wood will offter the best results and textures.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline tab -->
          <div v-if="tab == 2" class="tx-tab">
            <timeline :data="data.product_timelines" ></timeline>
          </div>

          <div v-if="tab == 3" class="tx-tab">
            <comment :comments="data.product_comments" ></comment>
          </div>
        </div>
        <!-- Gallery -->
        <div class="col-5 col-md-12 column gallery float-left">
          <div id="side-gallery">
            <gallery :slides="data.slides"></gallery>
            <div class="action">
              <p>
              {{intro.followers}} followers<br>
              <a href="#"><span class="icomoon icon-social"></span></a>
              <a href="#"><span class="icomoon icon-social2"></span></a>
              <a href="#"><span class="icomoon icon-mail-1"></span></a>
              <a href="#"><span class="icomoon icon-copy"></span></a>
              </p> 
              <div class="btn">Follow</div>
            </div>
          </div>
        </div>
      </div> 
    </div>

    <!-- 放置Gallery的modal -->
    <div v-for="slide in data.slides">
      <div class="modal" :id="slide.img" style="z-index:999999;">
        <a class="modal-overlay" href="#"></a>
          <div class="modal-container">
            <div class="modal-body">
              <img :src="slide.img">
            </div>
        </div>
      </div> 
    </div>
  </section>
</template>
<script>
import gallery  from '~components/gallery.vue';
import timeline from '~components/timeline.vue';
import comment  from '~components/comment.vue';
import data     from '../data/index';
	export default {
    components: {
      gallery,
      timeline,
      comment,
    },
    data(){
      return{
        data: data,
        intro: data.product_intro,
        tab: 1,
      }
    },
    methods:{
      tabs(tabindex){
       this.tab = tabindex
      }
    },
    layout: 'normal',
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

	section{
		padding-top: 20px;
	}
  .container{
		max-width: 980px;
	}
  .p-img-container{
    width: 100%;
    padding-top: 56.25%; /* 1:1 Aspect Ratio */
    position: relative; 
  }
  .product-img{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-size: cover;
    background-position: center;
  }
  .product-content{
    h2{
		  margin: 0;
      font-weight:600;
	  }
    p{
      font-size:1.7rem;
    }
    .thin{
      font-weight:300;
    }
    .divider{
      border-top-color:@border-grey;
    }
    .creator{
      p,span{
        display:inline-block;
        vertical-align:middle;
      }
      width:100%;
      span{
        float:right;
      }
    }
    .area{
      padding:10px 0px;
    }
  }
  .tx-tabs{
    border-bottom:@border-grey;
    position:sticky;
    top:83px;
		position: -webkit-sticky;
    z-index:400;
    background-color:white;

    a{
      display:inline-block;
      padding:10px;
      border-bottom:solid 2px transparent;
      transition:border 200ms;
      cursor:pointer;
      color:@black;

      &:hover{
        border-color:@blue;
      }
    }
    .active{
      border-color:@blue;
    }
  }
  .tx-tab{
    margin-top:15px;
  }
	
  #side-gallery{
    position:sticky;
    top:92px;
		position: -webkit-sticky;
    .action{
      width:100%;
      display:inline-flex;
      justify-content:space-between;
      align-items:center;
      
      padding:10px 0px;
      .btn{
        width:100px;
      }
      p{
        align-self:stretch;
        font-size:1.7rem;
        .icomoon{
          padding-right:5px;
          font-size:2rem;
          color:@black;
        }      
      }
    }
  }
  .tile-title {
    line-height: 2rem;
    font-size:1.7rem;
    font-weight:600;
    color:@black;
  }
  .tile-subtitle {
    font-size:1.7rem;
    font-weight:300;
    color:@black;
  }
  .modal:target .modal-container, .modal.active .modal-container{
    max-width:inherit !important;
  }
  .modal-body{
    max-height:inherit !important;
    padding:0px;
  }
  .modal{
    line-height:0px;
    z-index:1000;
  }
  .modal-container{
    z-index:999;
  }
@media screen {

  @media (max-width: 980px) {
    .tx-tabs{
      top:63px;
    }
    
  }
  @media (max-width: 840px) {
    .columns{
      flex-direction: column-reverse !important;
    }
  }
  @media (max-width: 480px) {
  }
}
</style>
