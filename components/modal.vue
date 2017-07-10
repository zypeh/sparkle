<template>
  <section class="cards">
    <div class="modal active">
    <div class="modal-overlay"></div>
    <div class="modal-container">
      <div class="modal-header">
      <button class="btn btn-clear float-right"></button>
      <div class="modal-title">Modal title</div>
      </div>
      <div class="modal-body">
      <div class="content">
          <img src="">
      </div>
      </div>
      <div class="modal-footer">
      ...
      </div>
    </div>
    </div>
    <!-- NewsFeed Card End -->
  </section>  
</template>

<script>
export default{
  props:{
    cards  : { default: null },
  },

  data(){
    return{}
  },
}
</script>
