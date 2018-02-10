import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridsize: '3',
      user_symbol: '',
      computer_symbol: '',
      error: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault(); 

    const { gridElement, playerSymbol, compSymbol } = this.refs;
    const validationResult = playerSymbol.value === compSymbol.value;
    console.log('result', gridElement.value, playerSymbol.value, compSymbol.value, validationResult);

    if(validationResult) {
      const error = "The symbols cannot be same.";
      this.setState({error})
      return;
    }
  }

 

  render() {
    return (
      <div className="tic-tac-toe">
        <h1>Tic Tac Toe</h1>
        <div className="boardsize">
          <form onSubmit={this.handleSubmit}>
            <label className="button button1">
              <select ref="gridElement" className="styled-select green rounded" defaultValue={this.state.gridsize}>
                <option value="3">3 X 3</option>
                <option value="4">4 X 4</option>
                <option value="5">5 X 5</option>
                <option value="6">6 X 6</option>
                <option value="7">7 X 7</option>
                <option value="8">8 X 8</option>
                <option value="9">9 X 9</option>
                <option value="10">10 X 10</option>
              </select>
            </label>
            <input ref="playerSymbol" type="text" className="symbol" placeholder="Your Symbol" />
            <input ref="compSymbol" type="text" className="symbol" placeholder="Opponent symbol"/>
            {this.state.error}
            <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
          </form>
        </div>
      </div>
    );
  }
}

export default App;

