// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.component('my-warning',{
	template:`
		<div style="border: 1px solid red; padding:.3em; border-radius: 3px; color: red; margin:.5em" @click='warning'>
			{{msg}}
		</div>
	`,
	data(){
		return {
			msg:'警告！'
		}
	},
	methods:{
		warning(){
			alert(this.msg);
		}
	}
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
