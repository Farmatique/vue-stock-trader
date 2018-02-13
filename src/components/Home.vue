<template>
	<div>
		<div class="panel panel-default">
			<div class="panel-heading">
				<h2>Hello, this is Stock-trader app</h2>
			</div>
			<div class="panel-body">
				<p>Here you can buy and sell stocks.</p>
				<p>Your current funds is: <b>{{ showFunds }}$</b></p>
				<hr>
				<p>Click on <router-link tag="i" active-class="active" to="/portfolio">Portfolio</router-link> to check your details</p>
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