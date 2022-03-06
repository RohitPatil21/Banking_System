import React, {Component} from 'react';

class Deposite extends Component {
    constructor(props) {
        super(props)
    }
   

    render() {
        return (
            <>
                <div className='deposite-container'>
                    <h2 className='heading-deposite'> Deposite</h2>
                    <form action='#'>
                        <button onClick={this.props.deposite}> Add 1000 Rs </button>
                    </form>
                </div>
            </>
        )
    }
}

export default Deposite