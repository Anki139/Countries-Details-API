import React, { useState } from 'react'

export default function Header({theme}) {
    const [isDark, setIsDark] = theme

  return (
    <>
      <header className={`header-conatainer ${isDark?'dark':''}`}>
      <div className="header-content">
        <h2 className="title"><a href="/">Where in the world....????</a></h2>
        <p className="theme-changer"onClick={()=>{
          setIsDark(!isDark)
          localStorage.setItem('DarkMode',!isDark)
        }  
        }>
          <i className={`fa-solid fa-${isDark?'sun':'moon'}`}></i>&nbsp; &nbsp;{isDark?'Light Mode':'Dark Mode'}</p>
      </div>
    </header>
    </>
  )
}
