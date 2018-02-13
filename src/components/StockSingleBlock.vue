<template>
	<div class="col-md-6 col-sm-6">
		<div class="panel panel-default">
			<div class="panel-heading">
				<p>Name: {{ stock.name }}</p>
				<p>Quantity: {{ stock.quantity }}</p>
				<p>Price: {{ stock.price }}</p>
			</div>
			<div class="panel-body">
				<input-decimal :quantity="quantity" @onUpdateInput="function(data){quantity = data}"></input-decimal>
				<button class="btn btn-default" @click="buy(stock)">Buy</button>
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
		props: ['stock'],
		methods: {
			buy(stock){
				this.$store.commit('buy', {stock: stock, quantity: this.quantity});
			}
		},
		components: {
			'input-decimal': InputDecimalNumber
		}
	}
</script>