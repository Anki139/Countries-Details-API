import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import CountriesList from './components/CountriesList'

import './App.css'
import { Outlet } from 'react-router-dom'

const App = () => {
  const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem('DarkMode')))
  const [query, setQuery] = useState('')
  console.log(query);
  return (
    <>
    <Header theme={[isDark,setIsDark]} />
     <Outlet context={[isDark ,setIsDark]}/>
      
    </>
  )
}

export default App