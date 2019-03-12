<template>
	<div class="bind">
		<div>{{a}}</div>
		<div v-html='a'></div>
		<div v-bind:id='b'>one</div>
		<div>
			姓名：{{firstName+lastName}}
		</div>
		<div>
			{{b.split('').reverse().join('')}}
		</div>
		<div>{{name}}</div>
		<div>{{getName()}}</div>
		<div>{{name}}</div>
		<div>{{getName()}}</div>
		<div>{{name}}</div>
		<div>{{getName()}}</div>

		<div>num: {{num}}</div>
		<div>queryObj: {{queryObj}}</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				a:"<h2>hello world</h2>",
				b:"first",
				firstName:'张',
				lastName:'一山',
				num:1,
				queryObj:{
					grade:0,
					clazz:0,
					type:0,
					keywords:''
				}
			}
		},
		mounted(){
			setInterval(()=>{
				this.num++;
				this.queryObj.grade++;
			},5000);
		},
		watch:{
			num:function(now,old){
				console.log('num值改变：',now,old);
			},
			queryObj:{
				handler:function(now,old){
					console.log('queryObj值改变：',now,old);
				},
				deep:true
			}
		},
		methods:{
			getName(){
				console.log('getName');
				return this.firstName + this.lastName;
			}
		},
		computed:{
			name(){
				console.log('computed');
				return this.firstName + this.lastName;
			}
		}
	}
</script>






