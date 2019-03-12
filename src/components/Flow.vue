<!-- 流程控制 -->
<template>
	<div class="flow">
		<!-- 条件渲染 -->
		<div class="person" :class="dyClass" v-if='false'>
			{{age}}
			<div v-if='age<18' >未成年</div>
			<div v-else-if='age>=18 && age < 40'>青年人</div>
			<div v-else>老年人</div>
		</div>

		<div class="login">
			<div v-if='loginType=="username" '>
				<label>用户名</label>
				<input key="one" type="text" placeholder="请输入用户名">
			</div>
			<div v-else>
				<label>email</label>
				<input key="two" type="text" placeholder="请输入email">
			</div>
			<button @click='togger'>切换</button>
		</div>

		<div v-show='false'>
			this is show
		</div>


	</div>
</template>
<script>
	export default {
		data(){
			return {
				age:0,
				loginType:'username'
			}
		},
		methods:{
			togger(){
				if(this.loginType == 'username'){
					this.loginType='email';
				} else {
					this.loginType = 'username';
				}

			}
		},
		computed:{
			dyClass:function(){
				let result = '';
				if(this.age < 18){
					result = 'young';
				} else if (this.age>=18 && this.age<40){
					result = 'strong';
				} else {
					result = 'old';
				}
				return result;
			}
		},
		mounted(){
			let interval = setInterval(()=>{
				this.age++;
				if(this.age >= 80){
					clearInterval(interval);
				}
			},100);
		}
	}
</script>
<style>
	.young {
		font-size: 10px;
	}
	.strong {
		font-size: 18px;
	}
	.old {
		font-size: 26px;
	}
</style>




