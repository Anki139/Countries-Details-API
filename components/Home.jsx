import React from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { useState } from 'react'
import './CountryDetails.css'
import { useOutletContext } from 'react-router-dom'
export default function Home() {
    const [query, setQuery] = useState('')
    const [isDark]=useOutletContext()
  return (
  <main className={`${isDark?'dark':''}`}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} query={query}/>
          <SelectMenu setQuery={setQuery}/>
        </div>
        <CountriesList 
        query={query} />
      </main>
  )
}
