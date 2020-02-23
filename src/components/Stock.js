import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" onClick={(e)=>props.clickHandler(e, props.stockInfo)}>
      <div className="card-body">
        <h5 className="card-title">{
            props.stockInfo.name
          }</h5>
        <p className="card-text">
          {props.stockInfo.ticker}: {props.stockInfo.price}</p>
        <p className="card-text">Type: {props.stockInfo.type}</p>
      </div>
    </div>


  </div>
);

export default Stock
