import { useState } from 'react'
import countriesJson from '../countries.json'

const Selector = () => {
  const [country, setCountry] = useState('')
  const [countryData, setCountryData] = useState('')
  const getCountryData = () => {
    fetch(
      `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`
    )
      .then((res) => res.json())
      .then((data) => setCountryData(data))
  }

  return (
    <>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option>select A country</option>
        {countriesJson.map(({ Country, Slug }) => {
          return (
            <option key={Slug} value={Slug}>
              {Country}
            </option>
          )
        })}
      </select>
      <button onClick={getCountryData}>Get Data</button>
    </>
  )
}

export default Selector
