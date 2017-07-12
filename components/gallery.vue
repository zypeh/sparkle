<template>
  <div>
  <!--Add one more container(overflow:visible) to let the next and prev btn appear-->
    <div class="sticky">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="slide in slides">
            <a :href="'#' + slide.img">
              <img :src="slide.img" class="img-responsive"/>
            </a>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  data () {
    return {
      swiperOption: {
			  pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        autoHeight: true
			},
    }
  },
  props:{
    slides  : { default: null },
  },
}

</script>
<style scoped>
.swiper-container{
  height:auto;
  
}
.my-swiper {
	height: 300px;
	width: 100%;
  
}
.sticky{
  position:sticky;
  top:100px;
	position: -webkit-sticky;
}
.my-swiper .swiper-slide {
	text-align: center;
	font-size: 38px;
	font-weight: 700;
	background-color: #eee;
	display: flex;
	justify-content: center;
	align-items: center;
}

.my-swiper .swiper-pagination > .swiper-pagination-bullet {
	background-color: #fff !important;
}
</style>

