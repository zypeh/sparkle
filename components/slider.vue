<template>
  <!--Add one more container(overflow:visible) to let the next and prev btn appear-->
  <div class="swiper-container swiper-container-horizontal" style="overflow:visible">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in slides">
          <a class="card" href="#modal-1">
            <div class="card-image">
              <img :src="`${slide.img}`" class="img-responsive"/>
            </div>
            <div class="card-body text-ellipsis">
              <h6>{{ slide.title }}</h6>
              {{ slide.slogan }}
            </div>
            <div class="card-footer">
              {{ slide.follower }} follower
            </div>
          </a>
        </div>
      </div>
    </div>
  <div class="swiper-button-prev swiper-button-grey" slot="button-prev"></div>
  <div class="swiper-button-next swiper-button-grey" slot="button-next"></div>
  </div>
</template>

<script>
  export default {
  data () {
    return {
      swiperOption: {
				slidesPerView: 3,
				paginationClickable: true,
				spaceBetween: 30,
				autoplay: 5000,
				initialSlide: 1,
				loop: true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				onSlideChangeEnd: swiper => {
					console.log('onSlideChangeEnd', swiper.realIndex)
				}
			},
      slides:[
        {
          title:'Smart Bike',
          img:'bicycle.jpg',
          slogan:'Enjoy refreshing cool air in hot summer months and much needed humidity',
          follower:'1122'
        },
        {
          title:'Smart Key',
          img:'key.jpg',
          slogan:'Enjoy refreshing cool air in hot summer months and much needed humidity',
          follower:'11220'
        },
      ]
    }
  },

  mounted () {
    console.log('app init')
    setTimeout(() => {
      this.banners.push('/user.png')
      console.log('banners update')
    }, 3000)
    console.log(
      'This is current swiper instance object', this.mySwiper,
      'It will slideTo banners 3')
    this.mySwiper.slideTo(3)
  }
}

</script>

<style lang="less" scoped>
  .my-swiper {
    height: 300px;
    width: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
	.swiper-button-prev{
		margin-left: -50px !important;
	}
	.swiper-button-next{
		margin-right: -50px !important;
	}
	.swiper-button-next.swiper-button-grey, .swiper-button-prev.swiper-button-grey{
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%232D2D2D'/%3E%3C/svg%3E");
		width: 18px;
    height: 27px;
    margin-top: -13.5px; /* -height/2 */
    -moz-background-size: 27px 44px;
    -webkit-background-size: 27px 44px;
    background-size: 18px 27px;
	}
	.swiper-button-prev.swiper-button-grey{
		transform: rotate(180deg);
	}
	.card-image img{
		height: 200px;
	}
	.card-footer{
		font-size: 1.1rem;
	}
  .card{
    color:inherit!important;
  }
  .card:hover{
    text-decoration: none;
  }
</style>
