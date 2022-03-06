import React, {Component} from 'react';
import '../App.css';

class Withdraw extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef();
    }


    render() {
        return (
            <>
                <div className='deposite-container'>
                <form> 
                    <h2 className='heading-deposite'> Withdraw </h2>
                    <button onClick={this.props.withdraw}> withdraw 1000 Rs </button>
                    </form>
                </div>
            </>
        )
    }
}

export default Withdraw