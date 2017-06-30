<template>
  <div class="sidebar">
    <ul class="menu" v-for="menu in menus">
      <!-- menu header text -->
      <li class="divider" :data-content="menu.title">
        <a :href="menu.explore" v-if="menu.explore !== ''">
          explore<span class="icon-navigate_next icomoon" style="top:2px;"></span>
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
</template>

<script>
  export default{
    data(){return{
      menus:[
        {
          title:'ORGANIZATION',
          explore:'#zz',
          menu_items:[
            {
              img:'logo.svg',
              name:'Steve Rogers'
            }
          ],
        },
        {
          title:'Projects',
          explore:'',
          menu_items:[
            {
              img:'key.jpg',
              name:'Smart key'
            },
            {
              img:'bicycle.jpg',
              name:'Smart BIKE'
            },
          ],
        },
        {
          title:'Followed Projects',
          explore:'',
          menu_items:[
            {
              img:'user.png',
              name:'Linux'
            },
            {
              img:'aircooler.png',
              name:'Air cooler'
            },
          ],
        },
      ]
    }}
  }
</script>

<style lang="less" scoped>
  .menu{
    box-shadow: none;
    border: 0;
    background: none;
    padding: 0;
    margin: 0;
  }
  .sidebar{
    width: 100%;
		position: -webkit-sticky;
  	position: sticky;
		top:70px;
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
</style>
