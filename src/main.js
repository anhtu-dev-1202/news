import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, BootstrapVueIcons, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import route from './routes/index.js';
import Router from 'vue-router';
import VueFileAgent from 'vue-file-agent';
import 'vue-file-agent/dist/vue-file-agent.css';
require('dotenv');

Vue.use(VueFileAgent);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);

Vue.use(Router);

Vue.config.productionTip = false;

var mixin = {
	data: {

	},
	created() {},
	methods: {
	},
};

new Vue({
	mixins: [mixin],
	router: route,
	render: (h) => h(App),
}).$mount('#app');
