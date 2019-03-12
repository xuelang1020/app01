<!-- 列表渲染 -->
<template>
	<div class="list">
		
		<my-warning></my-warning>

		<div class="container">
			<button class="btn btn-success" @click="toAddUser">添加</button>
			<button class="btn btn-danger" @click="batchDeleteUser" >批量删除</button>
			<table class="table">
				<thead>
					<tr>
						<th>序号</th>
						<th>编号</th>
						<th>姓名</th>
						<th>性别</th>
						<th>年龄</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for='(user,index) in users'>
						<td>{{index+1}}</td>
						<td>
							<input type="checkbox" v-model='ids' :value='user.id'>
						</td>
						<td>{{user.name}}</td>
						<td>{{user.gender}}</td>
						<td>{{user.age}}</td>
						<td>
							<i class="fa fa-trash" @click='deleteUser(user)'></i>
							<i class="fa fa-pencil" @click='toEditUser(user)'></i>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div>
			<div v-for='(v,k) in zb'>
				<h3>{{k}}</h3>
				<ul>
					<li v-for='(d,i) in v' :key='i'>
						周{{i+1}}:    {{d}}
					</li>
				</ul>
			</div>
		</div>

		<div>
			<h2 v-for='n in 5'>{{n}}</h2>
		</div>


		<!-- 模态框 -->
		<div id='userModal' class="modal fade" tabindex="-1" role="dialog">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title">{{title}}</h4>
		      </div>
		      <div class="modal-body">
		      	{{user}}
		      	<form>
		      		<div class="form-group" :class='validate.name'>
						    <label class="control-label" for="name">姓名</label>
						    <input v-model.trim='user.name' type="text" class="form-control" id="name" placeholder="name" @keyup="validateName">
						  </div>
						  <div class="form-group">
						    <label for="age">年龄</label>
						    <input v-model.number='user.age' type="text" class="form-control" id="age" placeholder="age">
						  </div>
						  <div class="form-group">
						    <label>性别</label>
						    <label>
						    	<input v-model='user.gender' type="radio" value='male'>男
						    </label>
						    <label>
						    	<input v-model='user.gender' type="radio" value='female'>女
						    </label>
						  </div>
		      	</form>  
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		        <button @click='saveOrUpdate' type="button" class="btn btn-primary">Save changes</button>
		      </div>
		    </div><!-- /.modal-content -->
		  </div><!-- /.modal-dialog -->
		</div><!-- /.modal -->

	</div>
</template>
<script>
	export default {
		data(){
			return {
				title:'',
				zb:{
					'出勤':[90,94,92,98,100],
					'卫生':[89,100,98,96,92]
				},
				validate:{
					name:{
						'has-error':false
					},
					age:{}
				},
				ids:[],
				user:{
					gender:'female'
				},
				users:[{
					id:1001,
					age:12,
					name:'terry',
					gender:'male'
				},{
					id:1002,
					age:12,
					name:'larry',
					gender:'male'
				},{
					id:1003,
					age:12,
					name:'tom',
					gender:'male'
				},{
					id:1004,
					age:12,
					name:'vicky',
					gender:'female'
				},{
					id:1005,
					age:12,
					name:'lisa',
					gender:'female'
				}]
			}
		},
		methods:{
			validateName(){
				let pattern = /\w{6,}/
				if(pattern.test(this.user.name)){
					this.validate.name['has-error'] = false;
				} else {
					this.validate.name['has-error'] = true;
				}
			},
			deleteUser(user){
				alert(user.id);
			},
			saveOrUpdate(){
				alert(JSON.stringify(this.user));
			},
			batchDeleteUser(){
				alert(this.ids);
			},
			toEditUser(user){
				this.user = user;
				this.title = '修改用户'
				$('#userModal').modal('show')
			},
			toAddUser(){
				this.user = {gender:'male'};
				this.title = '添加用户'
				$('#userModal').modal('show');
			}
		}
	}
</script>
<style>
	.table .fa {
		padding: 0 .5em;
		cursor: pointer;
	}
	.table .fa.fa-trash {
		color: red;
	}
</style>

