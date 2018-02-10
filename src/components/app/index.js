import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.history.push('/game');
  }

  render() {
    return (
      <div className="tic-tac-toe">
        <h1>Tic Tac Toe</h1>
        <div className="boardsize">
          <form onSubmit={this.handleSubmit}>
            <label className="button button1">
              <select ref="gridElement" className="styled-select green rounded" defaultValue="3">
                { this.getOptions(3, 10) }
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

getOptions(start, end) {
    const items = _.range(start, end + 1);
    return _.map(items, (i) => <option value={i} key={i}> {i} x {i} </option>);
  }
}

export default withRouter(App);

