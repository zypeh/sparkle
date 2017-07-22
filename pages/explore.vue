<template>
  <section>
    <div class="container">
      <div class="columns">
        <div class="column col-3">
          <sidebar :menus="data.explore[0].menus"></sidebar>
        </div>
        <div class="column col-9 col-md-12 products">
          <h4>Recent</h4>
          <div class="divider"></div>
          <div class="tile columns" v-for="product in data.explore[1].products">
            <div class="tile-icon col-4">
              <img :src="product.img" class="img-responsive">
            </div>
            <div class="tile-content col-8">
              <a :href="product.link" class="tile-title">{{product.title}}</a>
              <p class="tile-subtitle">{{product.desc}}</p>
            </div>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Sidebar from '~components/sidebar.vue';
import Slider  from '~components/slider.vue';
import Card    from '~components/card.vue';
import data    from '../data/index';

export default {
  components: {
    Sidebar,
    Card,
    Slider,
  },
  data(){
    return{ data: data }
  },
  layout: 'default',
}
</script>
<style lang="less">
@blue:#2196F3;
@black: #2B2B2B;
@grey-1:#9E9E9E;
@grey-2:#95989A;
@grey-3:#616161;
@grey-4:#E5E5E5;
@red:#f44336;
@background-1:#FAFAFA;

@border-grey:1px solid rgba(0,0,0,.0975);
.container{
  max-width: 980px;
}
.products{
  background-color:white;
  padding:15px;
  margin-top:20px;
  border-radius:2px;
  border:@border-grey;
  .tile{
    background-color:white;
    padding:10px 0px;
    a{
      cursor:pointer;
    }
    .tile-title{
      font-size:1.7em;
    }
    .tile-subtitle{
      font-size:1em;
      font-weight:400;
      color:lighten(@black,40%);
    }
  }
}
@media screen {

  @media (max-width: 980px) {
    .out.container{
      padding:0px 20px;
    }
  }
}
</style>
