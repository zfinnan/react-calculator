import React, { Component } from 'react';

class Calculator extends Component {
    constructor() {
        super()
    
        this.state = {
          num1: 0,
          num2: 0,
          sum: 0,
          num3: 0,
          num4: 0,
          difference: 0
        }
    
      }
    
    add = () => {
        let sum = parseInt(this.state.num1) + parseInt(this.state.num2)

        this.setState({sum: sum})
    }

    subtract = () => {
        let difference = parseInt(this.state.num3) - parseInt(this.state.num4)

        this.setState({difference: difference})
    }


    setNum = (e, num) => {
    this.setState({ [num]: e.target.value});
    }
    
    render() {
        return (
            <div className="container">
            <h1>Add</h1>
          
            <div className="add">
                <input type="number"
                name="num1"
                placeholder="Enter your first number"
                value={this.state.num1}
                onChange={ (e) => this.setNum(e, 'num1') }
                />
                <span>+</span>
                <input type="number"
                name="num2"
                placeholder="Enter your second number"
                value={this.state.num2}
                onChange={ (e) => this.setNum(e, 'num2') }
                />
                <button onClick={this.add}>=</button>
                <h3>{this.state.sum}</h3>
            </div>
            <h1>Subtract</h1>
            <div className="subtract">
                <input type="number"
                name="num3"
                placeholder="Enter your first number"
                value={this.state.num3}
                onChange={ (e) => this.setNum(e, 'num3') }
                />
                <span>-</span>
                <input type="number"
                name="num4"
                placeholder="Enter your second number"
                value={this.state.num4}
                onChange={ (e) => this.setNum(e, 'num4') }
                />
                <button onClick={this.subtract}>=</button>
                <h3>{this.state.difference}</h3>
            </div>
          </div>
        );
    }
}

export default Calculator;