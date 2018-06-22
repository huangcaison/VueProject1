<template>
	<div>
		使命必达{{ getOrder }}
	</div>
</template>
<script>

export default{
	name:"car",
	data(){
		return{
			
		}
	},
	computed:{
		getOrder(){
			return this.$store.getters.getOrder
		}
	}
}

</script>