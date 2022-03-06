import React, {Component} from 'react';

class Tab extends Component {
	render() {
		return (
			<>
				<div className='tab-container'>
					<button className='tab' onClick={() => this.props.switchTab("home")}>Home</button>
					<button className='tab' onClick={() => this.props.switchTab("deposite")} >Deposite</button>
					<button className='tab' onClick={() => this.props.switchTab("withdraw")}>Withdraw</button>
					<button className='tab' disabled>Inquery</button>
					<button className='tab' disabled>Complaints</button>
				</div>	
			</>
		)
	}
}

export default Tab;