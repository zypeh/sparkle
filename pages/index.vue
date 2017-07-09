<template>
  
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
