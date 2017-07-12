<template>
  <section>
    <div class="container">
      <div class="columns">
        
        <div class="col-7 column product-content">
          <div class="area" style="padding-top:0px;">
            <h2>Folkk</h2>
            <p>Folkk is a social business that connects Balkan rural artisans with emerging young designers to make the highest quality homeware.</p>
          </div>
          <div class="divider"></div>
          <div class="area">
            <div class="creator">
              <p>Design • Food • Lifestyle<br>
                Created by <a href="#">GoldenJet</a>
              </p>
              <span class="avatar avatar-lg"><img src="user.png"></span>
            </div>
            <p><span class="icomoon icon-map"></span> Kuala Lumpur, Malaysia</p>
            <p><span class="icomoon icon-mail-1"></span> folkk-support@gmail.com</p>
            <p><span class="icomoon icon-date"></span> Created in 20 May 2017</p>
          </div>

          <div class="tx-tabs">
            <a href="#" class="active">Introduction</a>
            <a href="#">Timeline</a>
            <a href="#">Comments</a>
          </div>
          <div class="tx-tab text-center" id="#intro">
            <div class="area">
              <h3>Our Ideas</h3>
              <p>Our aim is to preserve centuries-long legacy of craftsmanship of the Balkan artisans, by providing them with a steady income, as well as to give the locally designed and manufactured products worldwide visibility through our online platform. We make sure to provide ethical and fair compensation to all the people involved in the production and supply chain. Folkk is an initiative of Nova Iskra creative hub from Belgrade, Serbia.</p>
            </div>
						<div class="area">
              <h3>Our Products</h3>
              <p>All our product are made of 100% natural, carefully and locally sourced materials, grown and harvested around our country side.</p>
            </div>
            <div class="area">
              <h3>TAPA</h3>
              <p>- Wooden serving & cutting board -<br>This modular, triform serving board lets you arrange a compelling dinner or snack arrangement with ease. You can use it as a single large board, or play around with trapeze-like cuts and use the segments to make up your own, unique table setting.</p>
            </div>
						<div class="area">
              <h3>PLATO</h3>
              <p>- Two-sided wooden plate -<br>Enhancing the functionality of a much-used everyday object such as a plate, this beautifully imagined and carefully crafted piece has a two-sided design. Use Plato for everyday meals or arrange a unique combination of finger food and nibbles to share in those special moments.</p>
            </div>
						<div class="area">
              <h3>About us</h3>
              <p>Folkk is initiated by the team of Nova Iskra, a creative hub founded in Belgrade, Serbia, that empowers emerging creative professionals and helps develop innovative businesses. Nova Iskra aims to strengthen local and regional economies and support people on the social margins, in a creative approach that is rooted in design-thinking process. </p>
            </div>
            <div class="area">
              <h3>Makers</h3>
              <div class="maker">
                  <div class="maker-img"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- Gallery -->
        <div class="col-5 column">
          <div id="side-gallery">
            <gallery :slides="data.slides"></gallery>
            <div class="action">
              <p>
              19,300 followers<br>
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
import gallery    from '~components/gallery.vue';
import data    from '../data/index';
	export default {
    components: {
    gallery,
  },
  data(){
		return{ 
      data: data,
    }
  },
	methods:{
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
		width: 980px;
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
        padding-bottom:0.7rem;
        .icomoon{
          padding-right:5px;
          font-size:2rem;
          color:@black;
        }      
      }
    }
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
  a:focus{
    box-shadow:none;
  }
</style>
