<template>
	<div>
		<div class="row">
			<stock-component v-for="stock in getStocks" :stock="stock"></stock-component>
		</div>
	</div>
</template>

<script>
	import StockBlock from './StockSingleBlock.vue';
	import { mapGetters } from 'vuex';

	export default{
		computed: {
			...mapGetters(['getStocks'])
		},
		components: {
			'stock-component': StockBlock
		}
	}
</script>