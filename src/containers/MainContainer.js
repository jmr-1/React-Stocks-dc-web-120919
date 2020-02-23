import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {


  constructor(){
    super()
    this.state = {
      allStocks: [],
      stocks: [],
      portfolio: [],
    }
  }

  componentDidMount(){

    console.log('main container fetching stocks');

    this.fetchStocks()
  }

  fetchStocks(){
    return fetch('http://localhost:3000/stocks')
    .then(res=>res.json())
    .then(data => this.setState({stocks: data, allStocks: data}))
  }

  addStockToPortfolio = (event, stockInfo) => {
    this.setState({
      portfolio: [...this.state.portfolio, stockInfo]
    })
  }

  removeStockFromPortfolio = (event, stockInfo) => {

    let stockIndex = parseInt([...this.state.portfolio].findIndex(stock => stock===stockInfo), 10);
    let portfolioCopy = [...this.state.portfolio]
    portfolioCopy.splice(stockIndex, 1)
    let updatedPortfolio = portfolioCopy
    this.setState({
      portfolio: updatedPortfolio
    })

  } 

  sortFunction = (event) => {

    let sortChoice = event.target.value
    console.log('sorting..', sortChoice)
    let sortedArray = [];

    switch(sortChoice){
      case 'Alphabetically':
        sortedArray = [...this.state.stocks].sort((a,b)=> a.name > b.name ? 1 : -1 )
        break;
      case 'Price':
        sortedArray = [...this.state.stocks].sort((a,b)=> a.price > b.price ? 1 : -1 )
        break;
      case 'None':
        sortedArray = [...this.state.stocks]
        break;
      default:
        console.log('How did this happen')
    }
    this.setState({
      stocks: sortedArray
    })
  }

  filterFunction = (event) => {

    let choice = event.target.value
    console.log('filtering..', choice)
    let filteredArray = (choice==='All') ? [...this.state.allStocks] : [...this.state.allStocks].filter(stock => {return stock.type === choice})

    this.setState({
      stocks: filteredArray
    })
  }


  render() {
    return (
      <div>
        <SearchBar sortFunction={this.sortFunction} filterFunction={this.filterFunction}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stockList={this.state.stocks} addToPortfolio={this.addStockToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioList={this.state.portfolio} removeFromPortfolio={this.removeStockFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
