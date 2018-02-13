<template>
	<div>
		<div class="row">
			<mystock-component v-for="mystock in getMyStocks" :mystock="mystock"></mystock-component>
		</div>
	</div>
</template>

<script>
	import MyStockSingle from './MyStockSingle.vue';
	import { mapGetters } from 'vuex'

	export default{
		components: {
			'mystock-component': MyStockSingle
		},
		computed: {
			...mapGetters(['getMyStocks'])
		}
	}
</script>