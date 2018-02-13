<template>
	<div class="row">
		<div class="logo col-md-2 col-sm-2">
			<router-link tag="a" exact to="/">Stock Trader</router-link>
		</div>
		<ul class="nav nav-pills col-md-6 col-sm-6">
			<router-link tag="li" active-class="active" to="/portfolio"><a>Portfolio</a></router-link>
			<router-link tag="li" active-class="active" to="/stocks"><a>Stocks</a></router-link>
			<li @click="randomizePrice">End Day</li>
		</ul>
		<div class="col-md-2 col-sm-2">
			<button @click="loadFromDatabase">Load from database</button>
			<button class="save" @click="saveToDatabase">Save</button>
		</div>
		<div class="col-md-2 col-sm-2">
			Your funds: {{ displayFunds }}$
		</div>
	</div>
</template>

<script>
	export default{
		computed: {
			displayFunds(){
				return this.$store.getters.getFunds;
			},
			displayStocks(){
				/* temp */
				return this.$store.getters.getStocks;
			}
		},
		methods: {
			randomizePrice(){
				this.$store.commit('randomizePrice')
			},
			saveToDatabase(){
				this.$http.put('https://vue-http-353ff.firebaseio.com/data.json', this.$store.state.stocks)
					.then(response => {
						console.log(response)
					}, error => {
						console.error(error)
					})
			},
			loadFromDatabase(){
				this.$http.get('https://vue-http-353ff.firebaseio.com/data.json')
					.then(response => {
						return response.json();
					})
					.then(data => {
						const receivedData = [];
						for(let key in data){
							receivedData.push(data[key])
						};
						this.$store.commit('fetchStocks', receivedData);
					})
			}
		}
	}
</script>