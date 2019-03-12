<template>
	<div class="life">
		<my-warning></my-warning>
		
		{{msg}}
		<div>{{num}}</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				msg:'hello world',
				num:1
			}
		},
		methods:{

		},
		beforeCreate(){
			console.log(this);
			alert('beforeCreate');
		},
		created(){
			console.log(this);
			alert('created');
		},
		beforeMount(){
			console.log(this);
			alert('beforeMount');
		},
		mounted(){
			alert('mounted');
			setInterval(()=>{
				this.num++;
			},5000);
		},
		beforeUpdate(){
			//alert('beforeUpdate');
		},
		updated(){
			//alert('updated');
		},
		beforeDestroy(){

		},
		destroyed(){
			
		}
	}
</script>










