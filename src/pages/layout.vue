<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2>全部产品</h2>
				<template v-for="(product,index) in productList">
					<h3>{{ product.category }}</h3>
					<ul>
						<li v-for="item in product.list">
							<a :href="item.url">{{ item.name }}</a>
							<span v-if="item.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
					<div v-if="index%2 == 0" class="hr"></div>
				</template>
			</div>
			<div class="index-left-block lastest-news">
				<h2>最新消息</h2>
				<ul>
					<li v-for="item in news">
						<a :href="item.url">{{ item.author_name }}</a>
					</li>
				</ul>
			</div>	
		</div>
		<div class="index-right">
			<div class="swiper-size">
				<swiper :options="swiperOption">
    <!-- slides -->
			    <swiper-slide>
						<img class="swiperimg" src="../assets/banner_01.jpg">
			    </swiper-slide>
			    <swiper-slide>
						<img class="swiperimg" src="../assets/banner_02.jpg">
			    </swiper-slide>
			    <swiper-slide>
						<img class="swiperimg" src="../assets/banner_03.jpg">
			    </swiper-slide>
			    <swiper-slide>
						<img class="swiperimg" src="../assets/banner_04.jpg">
			    </swiper-slide>
			    <!-- Optional controls -->
			    <div class="swiper-pagination"  slot="pagination"></div>
			    <div class="swiper-button-prev" slot="button-prev"></div>
			    <div class="swiper-button-next" slot="button-next"></div>
			  </swiper>
			</div>
			<div class="index-board-list list">
				<div class="index-board-item" v-for="(board,index) in boardList" :class="{'line-last':index%2 !==0}">
					<div class="index-board-item-inner">
						<h2>{{ board.title }}</h2>
						<p>{{ board.desc }}</p>
						<div class="index-board-button">
							<router-link :to="{path:'/details/'+board.tag}" class="button">立即购买</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="clear"></div>
		<!-- <div id="echart"></div> -->
	</div>
</template>
<script>

// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')	
export default{
	name:"layout",
	data(){
		return{
			Chinese: {
		　　  　nation:'中国'
			},
			Doctor: {
		　　　　career:'医生'
			},　　
			swiperOption: {
				autoplay:true,
				pagination: {
			    el: '.swiper-pagination',
			  },
			  loop:true,
			  navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			},
			boardList:[
				{
					title:"开放产品",
					desc:"开放产品是一款开放产品",
					tag:"earth"
				},
				{
					title:"品牌营销",
					desc:"品牌营销帮组你的产品更好的找到定位",
					tag:"loud"
				},
				{
					title:"使命必达",
					desc:"使命必达快速遗代永远保持最前端的速度",
					tag:"car"
				},
				{
					title:"勇攀高峰",
					desc:"帮你勇攀高峰,到达事业的顶峰",
					tag:"hill"
				},
			],
			news:[],
			productList:[
				{
					category:"手机应用类",
					list:[
						{
							name:"91助手",
							url:"http://www.wwtliu.com/blog",
							hot:false
						},
						{
							name:"豌豆荚",
							url:"http://www.wwtliu.com/blog",
							hot:true
						},
						{
							name:"金山毒霸",
							url:"http://www.wwtliu.com/blog",
							hot:false
						}
					]
				},
				{
					category:"开发工具",
					list:[
						{
							name:"WebStorm",
							url:"http://www.wwliu.com/blog",
							hot:false
						},
						{
							name:"HBuiler",
							url:"http://www.wwliu.com/blog",
							hot:true
						},
						{
							name:"Sublime Text3",
							url:"http://www.wwliu.com/blog",
							hot:false
						},
						{
							name:"Atom",
							url:"http://www.wwliu.com/blog",
							hot:true
						}
					]
				}
			]
		}
	},
	methods: {
		extendCopy(p) {
		　　const c = {}
		　　for (var i in p) { 
		　　　　c[i] = p[i];
		　　}
		　　c.uber = p;
		　　return c;
		},
		copy() {
			Doctor = extendCopy(Chinese)
			console.log(Doctor)
		},
		drawLine () {
			// 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('echart'))
      // 绘制图表
      myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
		}
	},
	mounted () {
		this.drawLine()
	},
	created(){
		this.$axios.get("http://www.wwtliu.com/sxtstu/news/juhenews.php",{
			params:{
				count:10,
				type:"top"
			}
		})
		.then(res => {
			this.news = res.data;
		})
		.catch(error => {
			console.log(error);
		})
		this.extendCopy()
		this.copy()
	}
}

</script>

<style scoped>
	
.index-warp {
	width: 1200px;
	margin: 0 auto;
	overflow: hidden;
}
.index-left {
	float: left;
	width: 300px;
	text-align: left;
}
.index-right {
	float: left;
	width: 900px;
}
.index-left-block {
	margin: 15px;
	background: #fff;
	box-shadow: 0 0 1px #ddd;
	height: 350px;
}
.index-left-block .hr {
	margin-bottom: 20px;
	height: 1px;
	width: 100%;
	background: #ddd; 
}
.index-left-block h2 {
	background: #4fc08d;
	color: #fff;
	padding: 10px 15px;
	margin-bottom: 20px; 
}
.index-left-block h3 {
	padding: 0 15px 5px 15px;
	font-weight: bold;
	color: #222;
}
.index-left-block ul {
	padding: 10px 15px;
}
.index-left-block li {
	padding: 5px;
}
.index-board-list {
	overflow: hidden;
}
.index-board-item {
	float: left;
	width: 400px;
	background: #fff;
	box-shadow: 0 0 1px #ddd;
	padding: 20px;
	margin-right: 20px;
	margin-bottom: 20px;
}
.index-board-item-inner {
	min-height: 125px;
	padding-left: 120px; 
}
/*.index-board-car .index-board-item-inner {
	background: url(../assets/imges/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner {
	background: url(../assets/imges/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner {
	background: url(../assets/imges/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner {
	background: url(../assets/imges/1.png) no-repeat;
}*/
.index-board-item h2 {
	font-size: 18px;
	font-weight: bold;
	color: #000;
	margin-bottom: 15px; 
}
.list {
	margin-top: 15px;
}
.line-last {
	margin-right: 0; 
}
.index-board-button {
	margin-top: 20px; 
}
.lastest-news {
	min-height: 350px;
}
.hot-tag {
	background: red;
	color: #fff;
}
.new-item {
	display: inline-block;
	width: 230px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space:  nowrap;
}
.clear { clear:both; }
.swiperimg {
	width: 100%;
	height: 350px;
}
.swiper-size {
	margin-top: 15px; 
}
.button {
	background: #4fc08d;
	color: #fff;
	display: inline-block;
	padding: 10px 20px;
	cursor: pointer;
}
#echart {
	width: 700px;
	height: 400px;
	border: 1px solid #ccc;
	margin: 0 auto;
}

</style>