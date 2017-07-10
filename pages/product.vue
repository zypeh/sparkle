<template>
  <section>
    <div class="container">
      <div class="columns">
        
        <div class="col-7 column product-content">
          <div class="area">
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
            <div class="tx-tab active">Introduction</div>
            <div class="tx-tab">Timeline</div>
            <div class="tx-tab">Comments</div>
          </div>
          <div style="height:1000px;"></div>
        </div>

        <!-- Gallery -->
        <div class="col-5 column">
        <div id="side-gallery">
          <gallery :slides="data.slides"></gallery>
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
    return{ data: data }
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
      &:first-child{
        padding-top:0px;
      }
    }
  }
  .tx-tabs{
    border-bottom:@border-grey;
    position:sticky;
    top:82px;
		position: -webkit-sticky;

    .tx-tab{
      display:inline-block;
      padding:10px;
      border-bottom:solid 2px transparent;
      transition:border 200ms;
      cursor:pointer;

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
    top:100px;
		position: -webkit-sticky;
  }
</style>
