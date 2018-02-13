<template>
	<div class="col-md-6 col-sm-6">
		<div class="panel panel-default">
			<div class="panel-heading">
				<p>Name: {{ mystock.name }}</p>
				<p>Quantity: {{ mystock.myQuantity }}</p>
				<p>Price: {{ mystock.price }}</p>
			</div>
			<div class="panel-body">
				<input-decimal :quantity="quantity" @onUpdateInput="function(data){quantity = data}"></input-decimal>
				<button class="btn btn-default" @click="sell(mystock)">Sell</button>
			</div>
		</div>
	</div>
</template>

<script>
	import InputDecimalNumber from './custom-inputs/InputDecimalNumber.vue';

	export default{
		data(){
			return{
				quantity: 0
			}
		},
		props: ['mystock'],
		watch:{
			'this.mystock.myQuantity': () => {
				console.log(here)
			}
		},
		methods: {
			sell(mystock){
				this.$store.commit('sell', {mystock: mystock, quantity: this.quantity})
			}
		},
		components: {
			'input-decimal': InputDecimalNumber
		}
	}
</script>