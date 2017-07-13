<template>
  <div class="timeline">
    <div class="timeline-item" id="timeline-example-1">
      <div class="timeline-left icon-lg">
        <a href="#timeline-example-1" class="timeline-icon tooltip" data-tooltip="March 2016"></a>
      </div>
      <div class="timeline-content">
        <div class="tile">
          <div class="tile-content">
            <p class="tile-subtitle">March 2016</p>
            <p class="tile-title">Initial commit</p>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item" id="timeline-example-2">
      <div class="timeline-left">
        <a href="#timeline-example-2" class="timeline-icon tooltip" data-tooltip="hello">
          <i class="icon icon-check"></i>
        </a>
      </div>
      <div class="timeline-content">
        <div class="tile">
          <div class="tile-content">
            <p class="tile-subtitle">February 2017</p>
            <p class="tile-title">New Documents experience</p>
            <p class="tile-title"><a href="components.html#bars">Bars</a>: represent the progress of a task</p>
            <p class="tile-title"><a href="components.html#steps">Steps</a>: progress indicators of a sequence of task steps</p>
            <p class="tile-title"><a href="components.html#tiles">Tiles</a>: repeatable or embeddable information blocks</p>
          </div>
          <div class="tile-action">
            <button class="btn">View</button>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item" id="timeline-example-3">
      <div class="timeline-left">
        <a href="#timeline-example-3" class="timeline-icon tooltip" data-tooltip="March 2017">
          <i class="icon icon-check"></i>
        </a>
      </div>
      <div class="timeline-content">
        <div class="tile">
          <div class="tile-content">
            <p class="tile-subtitle">March 2017</p>
            <p class="tile-title"><a href="elements.html#icons">Icons</a>: single-element, responsive and pure CSS icons</p>
            <p class="tile-title"><a href="components.html#popovers">Popovers</a>: small overlay content containers</p>
            <p class="tile-title"><a href="experimentals.html#calendars">Calendars</a>: date or date range picker and events display</p>
            <p class="tile-title"><a href="experimentals.html#carousels">Carousels</a>: slideshows for cycling images</p>
          </div>
          <div class="tile-action">
            <button class="btn">View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	export default {
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

</style>
