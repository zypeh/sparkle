<template>
<section>
<transition name="move-left">
  <div class="sidebar" v-if="menushow">
    <ul class="menu" v-for="menu in menus">
      <!-- menu header text -->
      <li class="divider" :data-content="menu.title">
        <a :href="menu.subtitleLink" v-if="menu.subtitle">
          {{ menu.subtitle }}<span class="icon-navigate_next icomoon" style="top:2px;"></span>
        </a>
      </li>
      <!-- menu item -->
      <li class="menu-item">
        <a href="#" v-for="menu_item in menu.menu_items">
          <div class="tile tile-centered">
            <div class="tile-icon">
              <img :src="menu_item.img" class="avatar">
            </div>
            <div class="tile-content">
              {{menu_item.name}}
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
	</transition>
		<div class="menu-btn" @click="menushow = !menushow" >
				<i class="icon icon-arrow-right" :class="{'menushow': menushow}"></i>
		</div>
    </section>
</template>

<script>
  export default{
    data(){return{
			flipin:true,
			menushow: true,
    }},
    props:
    {
      menus  : { default: null },
    },
  }
</script>

<style lang="less" scoped>
  section{
    width: 100%;
		position: sticky;
		position: -webkit-sticky;
		top: 80px;
    display:block;
    z-index:999999;
    margin-top: -20px;
  }
  .menu{
    margin: 0;
    box-shadow: none;
    border: 0;
    background: none;
    padding: 0;
    
  }
  .divider{
    border:0;
    padding: 5px 0px;
  }
  .divider:after{
    background: none;
    color: #4E4E4E;
    font-weight: 600;
    padding: 0;
    text-transform: uppercase;
  }
  .menu-item{
    margin-bottom: 20px;
    padding: 0;
  }
  .divider a{
    position: absolute;
    right: 0;
    top: -4px;
    font-size: 12px;
    color: #95989A;
  }
  .divider a:hover{
    color: #2196F3;
    text-decoration: none;
  }
	.menu-btn{
		position: fixed;
		top: 70px;
		background-color: rgba(255,255,255,1);
		border: solid 1px rgba(0,0,0,.0975);
		padding: 10px 5px;
		z-index: 999;
		left: 0;
		display: none;
	}
	.menu-btn i{
		transition: transform 200ms;
	}
	.move-left-enter-active {
		animation: moveleft .1s;
	}
	.move-left-leave-active {
		animation: moveleft .1s reverse;
	}
	@keyframes moveleft {
		0% {
			left: -250px;
		}
		100% {
			left: 0px;
		}
	}
	@keyframes flip-horizontal {
		0% {
			transform: scale(100);
		}
		100% {
			transform: scale(0);
		}
	}
	.flip-transition{
  	display: inline-block;
	}
	.menushow{
		transform: rotate(.180deg) !important;
	}
	@media screen and (max-width: 841px) {
		.sidebar{
			position: fixed;
			background-color: white;
			top: 64px;
			z-index: 900;
			width: 250px;
			padding:10px 10px 10px 30px;
			height: 100%;
		}
		.menu-btn{
			display: inline-block;
		}
  }
</style>
