<template>
  <section>
    <div class="out container">
      <div class="columns">
        <div class="column col-12 slogan" v-html="data.slogan.code">
        </div>
        <div class="column col-12" style="margin-top:20px;">
          <slider :slides="data.slides"></slider>
        </div>
      </div>
    </div>
    <div class="main container">
      <card :cards="data.cards"></card>
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

/* 放slogan和slider的container */
.out.container{
  /*
    960px + container的padding;10px{spectre} = 980px
    让slider保持在960px的容器里工作，使到每个card保持最佳的宽度
  */
  width: 980px;

  .column{
    padding:0px;
  }
  .slogan{
    /* 增加上下的padding[美观] */
    padding: 40px 0px;

    h1,h2{
      /* 修改默认的margin[美观] */
      margin: 0px;
    }
    h2{
      font-size: 5rem;
      color: @blue;
      font-weight:500;
    }
    h1{
      font-size: 6rem;
      font-weight:400;
    }
  }
}

/* 放newsfeed和sidebar的container */
.main.container{
  /* 与.out.contianer隔离 */
  margin-top: 20px;

  /* container默认padding:10px{spectrecss} */
  max-width: 600px;
}
</style>
