<template>
  <section>
    <div class="container">
      <div class="slogan">
        <h2>The world need you to</h2>
        <h1 class="blue-text">Re-invent</h1>
      </div>
      <slider/>
      <modal/>
      <div style="margin-top:20px;">
        <div class="float-left" style="width:250px;">
          <sidebar/>
        </div>
        <div class="float-right newsfeed">
          <newsfeed/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import Sidebar from '~components/sidebar.vue';
  import Newsfeed from '~components/newsfeed.vue';
  import Slider from '~components/slider.vue';
  import Modal from '~components/modal.vue';
  export default {
    components: {
      Sidebar,
      Newsfeed,
      Slider,
      Modal
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
  .container{
		width: 980px;
	}
  .newsfeed{
    width: calc(100% - 250px);
    padding: 5px 0px;
  }
  .black{
    color: #2B2B2B;
  }
  .grey{
    color: #95989A;
  }
</style>
