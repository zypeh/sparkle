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

<style>
  .container{
		width: 980px;
		margin-top: 20px;
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
</style>
