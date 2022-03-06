import React, {Component} from 'react';
import '../App.css';

class Withdraw extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    updateAmount = () => {
        const newVal =parseInt(this.inputRef.current.value);
        this.props.withdraw(newVal);
        console.log(newVal);
    }



    render() {
        return (
            <>
                <div className='deposite-container'>
                <form action='#'> 
                    <h2 className='heading-deposite'> Withdraw </h2>
                    <input placeholder='Enter Amount' type="text" ref={this.inputRef} /> <br />
                    <button onClick={this.updateAmount}> withdraw Money </button>
                    </form>
                </div>
            </>
        )
    }
}

export default Withdraw