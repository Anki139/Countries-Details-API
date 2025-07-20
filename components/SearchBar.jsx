import React from 'react'

export default function SearchBar({ setQuery,query }) {
  return (
       <div className="search-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text"placeholder="Search for a country..."value={query} onChange={(e) => {
  console.log("Input value:", e.target.value );
  setQuery(e.target.value.toLowerCase());
}}  />
         
        </div>
    
  )
}
