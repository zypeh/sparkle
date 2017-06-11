<template>
  <section>
    <div class="container">
      <div class="slogan">
				<h2>The world need you to</h2>
				<h1 class="blue-text">Re-invent</h1>
  		</div>
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in banners">
            <img :src="banner">
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
    </div>
  </section>
</template>


<script>
  export default {
    data () {
      return {
        banners: [ '/public/logo.png', '/public/logo.png', '/public/logo.png' ],
        swiperOption: {
          autoplay: 5000,
          initialSlide: 1,
          loop: true,
          pagination: '.swiper-pagination',
          onSlideChangeEnd: swiper => {
            console.log('onSlideChangeEnd', swiper.realIndex)
          }
        }
      }
    },
    mounted() {
      console.log('app init')
      setTimeout(() => {
        this.banners.push('/public/user.png')
        console.log('banners update')
      }, 3000)
      console.log(
        'This is current swiper instance object', this.mySwiper, 
        'It will slideTo banners 3')
      this.mySwiper.slideTo(3)
    }
  }
</script>

<style>
	.slogan{
		padding: 40px 0px;
	}
	.slogan h1 ,.slogan h2{
		margin: 0px;
	}
	.slogan h1{
		font-size: 6rem;
	}
	.slogan h2{
		font-size: 5rem;
	}
</style>
