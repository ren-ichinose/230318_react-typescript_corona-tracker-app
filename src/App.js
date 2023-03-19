import './App.css'
import { useState } from 'react'
import countriesJson from './countries.json'
import TopPage from './pages/TopPage'

function App() {
  const [country, setCountry] = useState('')
  const [countryData, setCountryData] = useState('')
  const getCountryData = () => {
    fetch(
      `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data)
      })
  }
  return (
    <div className="App">
      <TopPage
        countriesJson={countriesJson}
        setCountry={setCountry}
        getCountryData={getCountryData}
      />
    </div>
  )
}

export default App
