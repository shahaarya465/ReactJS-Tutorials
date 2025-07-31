import React from "react";
class Sum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    Validation() {
        const { no1, no2 } = this.state;
        var temperr = {}
        var isValid = true
        if (!no1) {
            temperr.no1 = 'Please enter no1'
            isValid = false
        }
        if (!no2) {
            temperr.no2 = 'Please enter no2'
            isValid = false
        }
        this.setState({ errmsg: temperr })
        return isValid
    }

    dosum() {
        var ans = this.Validation();
        if (ans == true){
            var c = parseInt(this.state.no1) + parseInt(this.state.no2);
            this.setState({ msg: c });
        }

    }

    render() {
        return(
            <>
                <h1>SUM DEMO</h1>
                no1 : <input type='text' onChange={(e) => this.setState({ no1: e.target.value })} />
                <div style={{color:'red'}}>{this.state.errmsg && this.state.errmsg.no1}</div>
                no2 : <input type='text' onChange={(e) => this.setState({ no2: e.target.value })} />
                <div style={{color:'red'}}>{this.state.errmsg && this.state.errmsg.no2}</div>
                <input type='button' value='Sum' onClick={this.dosum.bind(this)} />
                <div>{this.state.msg}</div>
            </>
        ) 
    }
}
export default Sum;