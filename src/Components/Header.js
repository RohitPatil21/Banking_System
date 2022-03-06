import React, { Component } from 'react';
import '../App.css'
import Tabs from 'react-bootstrap/Tabs'


class Header extends Component {
	render() {
		return (
			<header>
				<div className='left-header'>
					<h1 className="bank-name">Online Banking System</h1>
				</div>
				<div className='right-header'>
					<button className='balance-btn' disabled > Account Balance : {this.props.balance} </button>
				</div>
			</header>
		)
	}
}

export default Header;
