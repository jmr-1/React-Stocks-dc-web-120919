import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolioList.map(stock => <Stock stockInfo={stock} clickHandler={this.props.removeFromPortfolio}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
