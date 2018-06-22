<template>
	<div class="sales-board">
		<div class="sales-board-intro">
			<h2>流量分析</h2>
			<p>dklfjaijfjosdjakljldjslakjiodjcda,dfiosjaojjcxlkajfdksa
			fdsaafdsafdsfadsakl;f;ldksal;kl;dksaokcdksoavoijdsaijdsavj
			jdisjfjdiosajfoidsjjodjsajfoidsjfoijdsijfodjasjfsaoifjifjd
			dksalkfldksakflkdlskalkfldks;al</p>
		</div>

		<div class="sales-board-form">
			<div class="sales-board-line">
				<div class="sales-board-line-left">
					购买数量：
				</div>
				<div class="sales-board-line-right">
					<Counter @counter="getGoodInfo('counter',$event)" :max="Counter.max" :min="Counter.min"/>
				</div>
			</div>

			<div class="sales-board-line">
				<div class="sales-board-line-left">
					产品类型：
				</div>
				<div class="sales-board-line-right">
					<DownMenu @downmenu="getGoodInfo('downmenu',$event)" :DownData="DownMenu"/>
				</div>
			</div>

			<div class="sales-board-line">
				<div class="sales-board-line-left">
					有效时间：
				</div>
				<div class="sales-board-line-right">
					<Radios @radios="getGoodInfo('radios',$event)" :Radios="Radios"/>
				</div>
			</div>

			<div class="sales-board-line">
				<div class="sales-board-line-left">
					总价：
				</div>
				<div class="sales-board-line-right">
					{{ getTotalPrice }}元
				</div>
			</div>

			<div class="sales-board-line">
				<div class="sales-board-line-left">
				</div>
				<div class="sales-board-line-right">
					<a class="button" href="#">立即购买</a>
					<a class="button" href="#">添加购物车</a>
				</div>
			</div>
			<!-- {{ getOrder }} -->
		</div>	

		<div class="sales-board-des">
			<h2>产品说明</h2>
			<p>jafiodajclkxnsacnlkjslkajijeoiwjoa,jfdjsaljckljkcjkjxj
			fdkslajlfkjkdslackjlkxjlkajoijeoiwjoijaf;dslajckljlksjaij
			fkldkjsklkaj;lkjfkldsaa</p>

			<h3>用户行为指标</h3>
			<ul>
				<li>hfjsahkhkhdksajhcjkhcndsnakjcnjkdnsacnjnsjkancjnjknskajc
				cdsjacsacjksackljxasjckljxasj</li>
				<li>cdshachjdhsjkahckjhdjask</li>
				<li>cxsajdkhjkshjakcjkxjkjjk</li>
				<li>cdskajkjdekjwlkcjkldjsljckl</li>
				<li>cdskankjcnkndjksanjfhhjdsfj</li>
			</ul>

			<h3>浏览网站方式</h3>
			<ul>
				<li>hfjsahkhkhdksajhcjkhcndsnakjcnjkdnsacnjnsjkancjnjknskajc
				cdsjacsacjksackljxasjckljxasj</li>
				<li>cdshachjdhsjkahckjhdjask</li>
				<li>cxsajdkhjkshjakcjkxjkjjk</li>
				<li>cdskajkjdekjwlkcjkldjsljckl</li>
				<li>cdskankjcnkndjksanjfhhjdsfj</li>
			</ul>
		</div>
	</div>
</template>
<script>

import Counter from "./components/Counter"
import DownMenu from "./components/DownMenu"
import Radios from "./components/Radios"

export default{
	name:"earth",
	data(){
		return{
			counter:1,
			downmenu:1,
			radios:1,
			totalprice:0,
			Counter:{
				max:10,
				min:1
			},
			DownMenu:[
				{
					name:"初级版",
					value:1
				},
				{
					name:"中级版",
					value:2
				},
				{
					name:"高级版",
					value:3
				}
			],
			Radios:[
				{
					title:"1个月",
					value:1
				},
				{
					title:"3个月",
					value:3
				},
				{
					title:"半年",
					value:6
				},
				{
					title:"一年",
					value:12
				}
			]
		}
	},
	components:{
		Counter,
		DownMenu,
		Radios
	},
	computed:{
		getTotalPrice(){
			this.$store.dispatch("updatePrice",this.counter*5 + this.downmenu*2 + this.radios*10);
			return this.$store.getters.getTotalPrice;
		},
		getOrder(){
			return this.$store.getters.getOrder;
		}
	},
	methods:{
		// getCounterNum(data){
		// 	console.log(data);
		// },
		// getDownMenu(data){
		// 	console.log(data);
		// },
		// getRadios(data){
		// 	console.log(data);
		// }
		getGoodInfo(key,value){
			// console.log(key,value);
			this[key]=value;
			// var readyData = {
			// 	"counter":this.counter,
			// 	"downmenu":this.downmenu,
			// 	"radios":this.radios
			// }
			// console.log(readyData);
		}
	}
}

</script>
<style scoped>

.buy-dialog-title {
	font-size: 16px;
	font-weight: bold;
}
.buy-dialog-btn {
	margin-top: 20px;
}
.buy-dialog-table {
	width: 100%;
	margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
	border: 1px solid #e3e3e3;
	text-align: center;
	padding: 5px 0;
}
.buy-dialog-table th {
	background: #4fc08d;
	color: #fff;
	border: 1px solid #4fc08d;
}
.button {
	background: #4fc08d;
	color: #fff;
	display: inline-block;
	padding: 10px 20px;
	cursor: pointer;
}
	
</style>