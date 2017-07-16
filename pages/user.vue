<template>
  <section>
    <div class="cover">
      <div class="container">
         <div class="tile">
            <div class="tile-icon">
              <img src="user.png" />
            </div>
            <div class="tile-content">
              <p class="tile-title">Linus Everland</p>
              <p class="tile-subtitle">@linus</p>
              <p>
                <button class="btn">Follow Linus</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="container">
      <div class="columns">
        <div class="column col-3">
          <sidebar :menus="data.user_orgs"></sidebar>
        </div>
        <div class="column col-9 col-md-12">
          <h4>Recent</h4>
          <card :cards="data.cards"></card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sidebar from '~components/sidebar.vue';
import card    from '~components/card.vue';
import data    from '../data/index';
	export default {
    components: {
      sidebar,
      card,
    },
    data(){
      return{
        data: data,
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

.container{
  max-width: 980px;
}
.cover{
  .container{
    padding:70px 10px;
    img{
      height:150px;
    }
    .tile-content{
          align-self: center;
    }
    .tile-title{
      font-size:30px;
      font-weight:600;
    }
  }
}
/*
  Responsive
*/
/* Large Device */
@media screen {

  @media (max-width: 980px) {
    .cover{
      .container{
        padding:70px 20px;
      }
    }
  }
  @media (max-width: 601px) {
    
  }
  @media (max-width: 480px) {
    .cover{
      .tile-title{
        line-height:3rem;
      }
    }
  }
}

</style>
