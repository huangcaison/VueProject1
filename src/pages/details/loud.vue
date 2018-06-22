<template>
	<div>
		品牌营销
	</div>
</template>
<script>

export default{
	name:"loud",
	data(){
		return{
			
		}
	},
	created(){
		this.$http.get("http://www.wwtliu.com/sxtstu/blueberrypai/getChengpinInfo.php")
		.then(res => {
			console.log(res.body);
		})
		.catch(error => {
			console.log(error);
		})
	}
}

</script>