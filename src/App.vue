<template>
  <div class="app contener">
    <Header />
      <router-view @onChange="childCallBack"/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/layout/Header.vue';
import Footer from '@/layout/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  computed: {

  },
  data: function () {
    return {}
  },
  methods: {
    childCallBack(data) {
      let currentLink = data.route || {};
      this.currentRoute = currentLink;
      // this.isCms = currentLink.path && currentLink.path.split('/dashboard').length > 1 ? true : false;
      this.$root.$emit('routeBack', {route: this.currentRoute});
    }
  }
}
</script>
<style>
  @import './assets/styles.css';
</style>
