import React, {Component} from 'react';

class Deposite extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    updateAmount = () => {
        const newVal =parseInt(this.inputRef.current.value);
        this.props.deposite(newVal);
        console.log(newVal);
    }

   

    render() {
        return (
            <>
                <div className='deposite-container'>
                    <h2 className='heading-deposite'> Deposite</h2>
                    <form action='#'>
                        <input placeholder='Enter Amount' type="text" ref={this.inputRef} /> <br />
                        {/* <button onClick={this.props.deposite}> Add 1000 Rs </button> */}
                        <button onClick={this.updateAmount}> Add Money </button>
                    </form>
                </div>
            </>
        )
    }
}

export default Deposite