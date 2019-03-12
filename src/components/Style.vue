<template>
	<div class="style">
		<div class="three" :class='dyClass'>{{msg}}</div>
		<div class="three" :class='{first:true,second:false}'>{{msg}}</div>
		<div class="three" :class='[a,b]'>{{msg}}</div>

		<ul class="nav">
			<li v-for='c in arr' 
				:class="{current:c.current}">
				{{c.name}} ,{{c.current}}
			</li>
		</ul>

		{{ids}}
		<ul>
			<li v-for='c in arr'>
				<span>
					<input type="checkbox" 
					v-model='ids' :value='c.id'>
				</span>
				<span>{{c.name}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				dyClass:'first second',
				msg:'hello',
				a:'one',
				b:'two',
				ids:[],
				arr:[{
					id:1,
					name:'推荐'
				},{
					id:2,
					name:'娱乐',
					current:true
				},{
					id:3,
					name:'IT'
				},{
					id:4,
					name:'军事'
				}]
			}
		}
	}
</script>
<style>
	ul.nav {
		list-style: none;
		margin: 0;
		padding: 0;
		background-color: teal;
		color: #fff;
	}
	ul.nav::after {
		content: "";
		display: block;
		clear: both;
	}
	ul.nav > li{
		line-height: 2em;
		float: left;
		width: 100px;
		text-align: center;
		cursor: pointer;
	}
	ul.nav > li.current {
		background-color: pink;
	}



	.one {
		color: orange;
	}
	.first {
		color: lightblue;
	}
	.two {
		font-size: 10px;
	}
	.second{
		font-size: 18px;
	}
	.three {
		background-color: pink;
	}
</style>