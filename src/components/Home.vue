<template>
	<div>
		<div class="panel panel-success">
			<div class="panel-heading">
				<h2>Welcome to Stock-trader app</h2>
			</div>
			<div class="panel-body">
				<p>Here you can buy and sell stocks.</p>
				<p>Your current funds is: <b>{{ showFunds }}$</b></p>
				<hr>
				<p>Click on <i>Portfolio</i> to check your details</p>
				<p>Click on <i>Save & Load</i> to load or save your status</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			showFunds(){
				return this.$store.getters.getFunds;
			}
		}
	}
</script>
<style scoped>
	i{
		text-decoration: underline;
	}
</style>