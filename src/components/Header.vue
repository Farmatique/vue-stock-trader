<template>
	<div class="row">
		<div class="logo navbar-brand">
			<router-link tag="a" exact to="/">Stock Trader</router-link>
		</div>
		<ul class="nav navbar-nav nav-pills">
			<router-link tag="li" active-class="active" to="/portfolio"><a>Portfolio</a></router-link>
			<router-link tag="li" active-class="active" to="/stocks"><a>Stocks</a></router-link>
		</ul>
		<ul class="nav navbar-nav navbar-right right-side">
			<li class="end-day" @click="randomizePrice"><a class="btn btn-success">End Day</a></li>
			<li class="dropdown" :class="{open: dropdownIsOpened}" @click="dropdownIsOpened = !dropdownIsOpened">
				<a class="btn btn-warning dropdown-toggle" data-toggle="dropdown" id="dropdownMenu1">Save & Load <span class="caret"></span></a>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
					<li><a @click="loadFromDatabase">Load from database</a></li>
					<li><a class="save" @click="saveToDatabase">Save to database</a></li>
				</ul>
			</li>
			<li class="your-funds">
				<a>Your funds: {{ displayFunds }}$</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				dropdownIsOpened: false
			}
		},
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
		margin: 0;
	}
  .logo a{
    font-weight: 600;
    color: black;
    text-decoration: underline;
  }
  .your-funds{
  	font-size: 1.2em;
  	font-weight: 600;
  }
  .your-funds a:hover{
		cursor: initial;
		background-color: transparent !important;
  }
  .dropdown{
  	display: inline-block;
  }
  .dropdown > .btn{
  	color: black;
  }
  .dropdown-menu > li > a{
  	cursor: pointer;
  }
  .end-day a{
  	color: #000;
  }
  .end-day a:hover{
		background-color: transparent !important;
		cursor: pointer;
		color: #000;
  }
</style>