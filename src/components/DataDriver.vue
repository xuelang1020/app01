<template>
	<div class="dataDriver">
		{{num}}
		<div>{{ getNum() }}</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				num:1
			}
		},
		mounted(){
			setInterval(()=>{
				this.num ++;
			},3000);
		},
		methods:{
			getNum(){
				console.log('getNum');
				return this.num+1;
			}
		}
	}
</script>