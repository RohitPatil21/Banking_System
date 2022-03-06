import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js';
import Tab from './Components/Tabs.js';
import React, { Component } from 'react';
import Withdraw from './Components/Withdraw';
import Home from './Components/Home';
import Deposite from './Components/Deposite';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tab : "home",
			balance : 5000,
			// amount : 0,
		}
	}

	depositeMoney = (newVal) => {
		if(isNaN(newVal) != true) {
			this.setState({
				balance : this.state.balance + newVal
			})
		}
		else{
			alert("please enter correct amount")
		}
	}

	
	withdrawMoney = (newVal) => {
		if(this.state.balance < newVal) {
			alert("Please insert correct amount")
		}
		else if(isNaN(newVal) != true) {
			this.setState({
				balance : this.state.balance - newVal
			})
		}
		else {
			alert("Please insert correct amount")
		}
	}

	changeTab = (newTab) => {
		this.setState({
			tab : newTab
		})	
	}

	renderTab = () => {
		switch(this.state.tab) {
			case 'home':
				return <Home  /> 
			case 'deposite':
				return <Deposite deposite={this.depositeMoney} />
			case 'withdraw':
				return <Withdraw withdraw={this.withdrawMoney} />
			default:
				return <Home />
		}
	}

		


	render() {
		return (
			<div className="App">
				<Header balance={this.state.balance} />
				<Tab switchTab={this.changeTab} />
				{this.renderTab()}
			</div>
		);
	}
	
}

export default App;
