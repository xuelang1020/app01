<template>
	<div class="event container">
		<div>
			{{num}}, {{flag}}
		</div>
		<div>
			<button class="btn btn-primary btn-sm" @click='foo'>切换flag</button>
			<button class="btn btn-primary btn-sm" @click='++num; foo()'>增加</button>
		</div>

		<a href="https://www.baidu.com" @click='bar($event)'>百度一下</a>


		<div>
			<select name="" id="">
				<option value="">one</option>
				<option value="">two</option>
				<option value="">three</option>
			</select>
			<input type="text" @keyup.enter='outer'>
			<!-- <input type="submit"> -->
		</div>

		<div class="outer" @click='outer'>
			<div class="center" @click='center'>
				<div class="inner" @click.once='inner'>
					
				</div>
			</div>
		</div>

		

	</div>
</template>
<script>
	export default {
		data(){
			return {
				num:0,
				flag:true
			}
		},
		methods:{
			outer(){
				alert('outer');
			},
			center(){
				alert('center');
			},
			inner(){
				alert('inner');
			},
			bar(event){
				console.log(event);
				alert('百度一下');
				event.preventDefault();
			},
			foo(){
				this.flag = !this.flag;
			}
		}
	}
</script>

<style>
	.outer,.inner,.center {
		border:1px solid #ccc;
	}
	.outer {
		width: 500px;
		height: 500px;
		margin:0 auto;
		padding:50px;
	}
	.center {
		height: 100%;
		padding:50px;
	}
	.inner {
		height: 100%;
	}
</style>







