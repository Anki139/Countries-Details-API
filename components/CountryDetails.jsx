import React, { useEffect, useState } from 'react'
import { Link, useLocation, useOutletContext, useParams } from 'react-router-dom'
import CountryDetailShimmer from './CountryDetailShimmer'
export default function CountryDetails() {
  const params=useParams()
  const {state}=useLocation()
  const countryName=params.country
  const [countryData, setCountryData]=useState({})
  const  [notFound,setNotFound]=useState(false)
const [isDark]=useOutletContext()

function updateCountryData(data){
setCountryData({
  name:data.name.common,
  nativeName:Object.values(data.name.nativeName)[0].common,
  population:data.population.toLocaleString('en-IN'),
  region:data.region,
  capital:data.capital.join(', '),
  currency:Object.values(data.currencies).map(currency => currency.name).join(', ') || 'N/A',
  domain:data.tld,
  flag:data.flags.svg,
  subRegion:data.subregion,
  lang:Object.values(data.languages).join(', '),
  borders:[],
})
if(!data.borders) {
          data.borders = []
        }

        Promise.all(data.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common)
        })).then((borders) => {
     setTimeout(()=>
         setCountryData((prevState) => ({...prevState, borders })))
        })
     
}

useEffect(()=>
{
if(state)
{
  updateCountryData(state)
  return;
}
  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=>res.json())
.then(([data])=>{
updateCountryData(data)
})
      .catch((err) => {
        console.log(err);
        setNotFound(true)
      })
  }, [countryName])
 

if(notFound)
  return <div>Country Not found</div>
  return (
  countryData===null? 'Loadinggg.......':(
    <main className={`${isDark?'dark':''}`}>
        <div className="container">
            <span className="back-btn" onClick={()=>history.back()}>
              <i className="fa-solid fa-arrow-left-long"></i>&nbsp; back</span>
              {countryData === null ? (
          <CountryDetailShimmer />
        ) : (
        <div className="country-details">
            <img src={countryData.flag} alt="flag" className="shimmer"/>
            <div className="details-text-container">
                <h1>{countryData.name}</h1>
                <div className="details-text">
                <p><b>native name: </b><span className="native-name">{countryData.nativeName}</span></p>
                <p><b>Population: </b> <span className="pop">{countryData.population}</span></p>
                <p><b>Region: </b><span className="region">{countryData.region}</span></p>
                <p><b>Sub-Region: </b><span className="sub-region">{countryData.subRegion}</span></p>
                <p><b>Capital: </b><span className="capital">{countryData.capital}</span></p>
                
                <p><b>Top level Domain: </b><span className="domain">{countryData.domain}</span></p>
                <p><b>Carrencies: </b><span className="currency">{countryData.currency}</span></p>
                <p><b>Languages: </b><span className="lang">{countryData.lang}</span></p>
                </div>
              {countryData.borders?.length > 0 && (
        <div className="border-countries">
          <b>Border Countries</b>&nbsp;
         {
          countryData.borders.map((border)=>
<Link to={`/${border}`} key={border}>{border}</Link>
          )}
         
        </div>
      )}
            </div>
        </div>
        )}
        </div>
    </main>
  )
)
}
