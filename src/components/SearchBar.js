import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={(e)=>{props.sortFunction(e)}}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={(e)=> {props.sortFunction(e)}}/>
        Price
      </label>
      <label>
        <input type="radio" value="None" checked={null} onChange={(e)=> {props.sortFunction(e)}}/>
        None
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e)=>{props.filterFunction(e)}}>
          <option value="All">All Stocks</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
