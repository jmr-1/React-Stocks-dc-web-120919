import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stockList.map(stock => <Stock stockInfo={stock} id={Date.now()+stock.id+stock.name} clickHandler={this.props.addToPortfolio}/>)
          
        }
      </div>
    );
  }

}

export default StockContainer;
