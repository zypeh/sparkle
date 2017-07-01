<template>
  <section>
    <div class="container">
      <div class="columns">
        <div class="col-8 column">
          <div class="p-img-container">
            <div class="product-img" style="background-image:url('bicycle.jpg')">
          </div>
          </div>
        </div>
        <div class="col-4 column">
          <h3 class="text-strong">Smart Bike</h3>
					<p class="grey-text">Enjoy refreshing cool air in hot summer months and much needed humidity</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    layout: 'default',
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
