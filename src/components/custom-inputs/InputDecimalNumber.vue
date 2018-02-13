<template>

	<input type="text"
		:value="quantity"
		@input="validateInput($event)"
	>

</template>

<script>
	export default{
		props: ['quantity'],
		methods:{
			validateInput(event){
				if(isNaN(event.target.value)){
					this.$emit('onUpdateInput', event.target.value)
				} else {
					this.$emit('onUpdateInput', Math.floor(event.target.value))
				}
			}
		}
	}
</script>