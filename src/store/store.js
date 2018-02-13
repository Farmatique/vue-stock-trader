import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
        stocks: [
          {name: 'BMW', price: 15, quantity: 100, myQuantity: 1},
          {name: 'Apple', price: 10, quantity: 80, myQuantity: 0},
          {name: 'Google', price: 20, quantity: 75 },
          {name: 'Microsoft', price: 25, quantity: 90 }
        ],
        myFunds: 1000
	},
	getters: {
		getStocks: state => {
			return state.stocks;
		},
		getMyStocks: state =>{
			return state.stocks.filter(function(elem){
				return elem.myQuantity > 0;
			})
		},
		getFunds: state => {
			return state.myFunds
		}
	},
	mutations: {
		buy(state, payload){
			if(typeof payload.quantity == 'string'){
				alert('Please use correct number');
			} else {
				if(payload.stock.quantity > payload.quantity || payload.stock.quantity == payload.quantity){

					/* check if enough money */
					if(state.myFunds > (+payload.quantity) * payload.stock.price){

						/* decrease total funds */
						state.myFunds -= (+payload.quantity) * payload.stock.price;
						payload.stock.quantity-=payload.quantity;

						/* add items to portfolio (increase myQuantity) */
						if(payload.stock.myQuantity !== undefined){
							payload.stock.myQuantity += +payload.quantity;
						} else {
							Vue.set(payload.stock, 'myQuantity', +payload.quantity);
						}
					} else {
						alert('Not enough money to buy');
					}

				} else if (payload.stock.quantity == 0){
					alert('Out of stock')
				} else {
					alert('Currently you cannot buy more than ' + payload.stock.quantity +' stocks')
				}
			}
		},
		sell(state, payload){
			if(typeof payload.quantity == 'string'){
				alert('Please use correct number');
			} else {
				if(payload.mystock.myQuantity > payload.quantity || payload.mystock.myQuantity == payload.quantity){
					payload.mystock.myQuantity-=payload.quantity;

					/* increase total funds */
					state.myFunds += (+payload.quantity) * payload.mystock.price;

					/* add items back to stocks (decrease myQuantity) */
					payload.mystock.quantity += +payload.quantity;

				} else if (payload.mystock.myQuantity == 0){
					alert('You`re out of stocks')
				} else {
					alert('Currently you cannot sell more than ' + payload.mystock.myQuantity +' stocks')
				}
			}
		},
		randomizePrice(state){
			state.stocks.forEach(function(elem){
				elem.price = Math.floor((Math.random()*100)+40);
			});
		},
		fetchStocks(state, payload){
			console.log(payload);
			state.stocks = payload;
		}
	}
})