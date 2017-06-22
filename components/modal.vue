<template>
  <div class="modal" id="modal-1">
    <a href="#modal-1" class="modal-overlay" aria-label="Close"></a>
    <div class="modal-container" role="document">
      <div class="modal-body">
      <div class="content">
        <div class="columns">
          <div class="column col-xs-12 col-lg-8 col-8 product-img">
          </div>
          <div class="column col-xs-12 col-lg-4 col-4 product-action">
            <h4>SmartKey</h4>
            <h6 class="card-subtitle">Portable, Multi-Room Smart Key</h6>
            <p><figure class="avatar avatar-sm">
              <img src="~static/user.png" />
            </figure>
              <a href="#"> Louis Ventus</a><span> created in June 8 2017 </span></p>
            <p style="font-size:1.4rem;"><span class="icon-map"></span><span> Kuala Lumpur, Malaysia</span></p>
            <div class="statistic">
              <h3>530</h3>
              <p>followers</p>
            </div>
            <div class="statistic">
              <h3>230</h3>
              <p>up-vote</p>
            </div>
            <button class="btn btn-primary product-btn">Follow</button>
            <div class="columns">
              <div class="column col-xs-6 col-lg-6">
                <button class="btn product-btn"><i class="icon icon-arrow-up" style="margin-bottom:-2px"></i> Up-vote</button>
              </div>
              <div class="column col-xs-6 col-lg-6">
                <button class="btn product-btn"><span class="icon icon-share"></span> Share</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="modal-footer">
      <a href="#" class="btn btn-link">Close</a>
      <button class="btn btn-primary">Share</button>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.modal-container{
  margin-top:50px;
  max-width: 1160px !important;
  width:1160px;
  height:100%;
  padding:10px 20px;
  overflow: auto;
}
.modal-body{
  max-height:inherit !important;
}
  .product-img{
    height: 380px !important;
    background: url("~static/key.jpg");
    background-size: cover;
  }
  .product-action span,.product-action a,.product-action figure{
    vertical-align: middle;
  }
  .product-action a{
    font-weight: 500;
  }
  .content h4{
    font-weight: 500;
  }
  .card-subtitle{
    margin-top: -10px;
  }
  .statistic h3{
    margin: 0;
  }
  .product-btn{
    width: 100%;
    padding: 10px;
    height: auto !important;
  }
</style>
