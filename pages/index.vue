<template>
  <section>
    <div class="out container">
      <div class="slogan">
        <h2>The world need you to</h2>
        <h1 class="blue-text">Re-invent</h1>
      </div>
      <slider :slides="data.slides"></slider>
    </div>
		<div class="main container">
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
