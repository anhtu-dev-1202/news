<template>
  <div class="data">
    <nav class="tab-bar navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="index.html">
        <img style="width: 280px; height: 80px;" src="images/logo.png">
      </a>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 mx-auto fontweb" style="width: 110%">
          <li class="nav-item">
            <b-link class="nav-link" :to="{name: 'Index'}">TRANG CHỦ</b-link>
          </li>
          <li class="nav-item">
            <b-link class="nav-link" :to="{name: 'ThoiSu'}">THỜI SỰ</b-link>
          </li>
          <li class="nav-item">
            <b-link class="nav-link" :to="{name: 'ChinhTri'}">CHÍNH TRỊ</b-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">THỂ THAO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SỨC KHỎE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">THỜI TRANG</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">GIẢI TRÍ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">VỀ CHÚNG TÔI</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">LIÊN HỆ</a>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data: function() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style>
  @import '../assets/menu.css';
</style>