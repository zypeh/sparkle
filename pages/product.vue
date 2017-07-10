<template>
  <section>
    <div class="container">
      <div class="columns">
        <div class="col-7 column">
          
        </div>
        <div class="col-5 column">
          <gallery :slides="data.slides"></gallery>
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

<style scoped>
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
	h3{
		margin: 0;
	}
	p{
		line-height: 1.3em;
	}
</style>
