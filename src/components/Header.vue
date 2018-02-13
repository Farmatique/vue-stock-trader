<template>
	<div class="row">
		<div class="logo col-md-2 col-sm-2">
			<router-link tag="a" exact to="/">Stock Trader</router-link>
		</div>
		<ul class="nav nav-pills col-md-4 col-sm-4">
			<router-link tag="li" active-class="active" to="/portfolio"><a>Portfolio</a></router-link>
			<router-link tag="li" active-class="active" to="/stocks"><a>Stocks</a></router-link>
			<li @click="randomizePrice"><a>End Day</a></li>
		</ul>
		<div class="right-side col-md-6 col-sm-6">
			<div class="dropdown">
				<button class="btn btn-warning dropdown-toggle" data-toggle="dropdown" id="dropdownMenu1">Save & Load <span class="caret"></span></button>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
					<li><a @click="loadFromDatabase">Load from database</a></li>
					<li><a class="save" @click="saveToDatabase">Save</a></li>
				</ul>
			</div>
			<div class="your-funds">
				Your funds: {{ displayFunds }}$
			</div>
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
				this.$http.put('https://vue-http-353ff.firebaseio.com/data.json', {stocks: this.$store.state.stocks, funds: this.$store.state.myFunds})
					.then(response => {
						//console.log(response)
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
						for(let key in data.stocks){
							receivedData.push(data.stocks[key])
						};

						this.$store.commit('applyLoadedData', {stocks: receivedData, funds: data.funds});
					})
			}
		}
	}
</script>
<style>
	.right-side{
		text-align: right;
	}
  .logo a{
    line-height: 40px;
    font-weight: 600;
    color: black;
    text-decoration: underline;
  }
  .your-funds{
  	padding-left: 15px;
  	font-size: 1.2em;
  	font-weight: 600;
  	line-height: 40px;
  	display: inline-block;
  }
  .dropdown{
  	display: inline-block;
  }
  .dropdown-menu > li > a{
  	cursor: pointer;
  }
</style>