<template>
  <section>
    <div class="out container">
      <div class="slogan">
        <h2>The world need you to</h2>
        <h1 class="blue-text">Re-invent</h1>
      </div>
      <slider :slides="data.slides"></slider>
    </div>
		<div class="main container" style="margin-top:20px;">
			<div class="columns">
					<div class="column col-3" >
						<sidebar :menus="data.menus"></sidebar>
					</div>
				<div class="column col-9 col-md-12">
					<card :cards="data.cards"></card>
				</div>
			</div>
		</div>

  </section>
</template>
<script>
  import Sidebar from '~components/sidebar.vue';
  import Slider from '~components/slider.vue';
  import data from '../data/index';
  import Card from '~components/card.vue';
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

<style>
  .slogan{
    padding: 40px 0px;
  }
  h1,h2{
    margin: 0px;
  }
  h1{
    font-size: 6rem;
  }
  h2{
    font-size: 5rem;
  }
	.out.container{
		width: 980px;
	}
  .main.container{
    max-width: 980px;
  }
  .newsfeed{
    width: calc(100% - 250px);
    padding: 5px 0px;
  }
  .card{
    border-color: rgba(0,0,0,.0975) !important;
  }
	@media screen and (max-width: 840px) {
		.col-3{
			padding: 0px;
		}
  }

</style>
