<template>
  <div class="timeline">
    <div class="timeline-item" v-for="(timeline,index) in data">
      <div class="timeline-left">
        <a :href="'#timeline-example-'+ index" class="timeline-icon tooltip" :data-tooltip="timeline.time">
          <i class="icon icon-check"></i>
        </a>
      </div>
      <div class="timeline-content">
        <div class="tile">
          <div class="tile-content">
            <p class="tile-subtitle">{{timeline.time}}</p>
            <card :cards="[timeline.card]"></card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import card from "~components/card.vue";
	export default {
    components:{
      card,
    },
    props:{
      data  : { default: null },
    },
  }
</script>

<style lang="less" scoped>

@blue:#2196F3;
@black: #2B2B2B;
@grey-1:#9E9E9E;
@grey-2:#95989A;
@grey-3:#616161;
@grey-4:#E5E5E5;
@red:#f44336;
@background-1:#FAFAFA;

@border-grey:1px solid rgba(0,0,0,.0975);

.timeline-icon{
  background:@blue;
  .icon{
    top:1.5px;
  }
}
.timeline{
  margin-top:40px;
}

</style>
