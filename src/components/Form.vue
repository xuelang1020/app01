<template>
	<div class="form">
		{{user}} 
		<div>
			用户名<input type="text" v-model.trim='user.name'>
		</div>
		<div>
			密码<input type="password" v-model.number='user.password'>
		</div>
		<div>
			描述<textarea v-model='user.description' cols="30" rows="3"></textarea>
		</div>
		<div>
			性别
				<label> <input type="radio" value='男' v-model='user.gender'>男</label>
				<label> <input type="radio" value='女' v-model='user.gender'>女</label>
		</div>
		<div>
			年龄
				<input type="text" v-model.number="user.age">
		</div>
		<div>
			爱好
			<!-- 单一复选框绑定到布尔值 -->
			  <label><input type="checkbox" v-model="user.checked">{{user.checked}}</label><br>
			<!-- 多个复选框绑定到同一数组 -->
				<label><input type="checkbox" v-model='user.hobbis' value="backetball">篮球</label>
				<label><input type="checkbox" v-model='user.hobbis' value="football">足球</label>
				<label><input type="checkbox" v-model='user.hobbis' value="reading">阅读</label>
		</div>
		<div>
			家乡
			<select v-model='user.address'>
				<option value="gs">甘肃</option>
				<option value="sx">山西</option>
				<option value="js">江苏</option>
			</select><br>
			年级：
			<select v-model="user.class">
				<option :value="n" v-for="n in 5" :key="n" >{{n}}年级</option>
			</select>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				user:{
					name:'',
					age:'',
					class:4,
					password:'',
					description:'',
					gender:'女',
					checked:false,
					hobbis:[],
					address:'js'
				}
			}
		},
		methods:{

		}
	}
</script>

