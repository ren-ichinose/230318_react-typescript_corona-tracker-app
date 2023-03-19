import './App.css'
import { useState } from 'react'
import countriesJson from './countries.json'
import TopPage from './pages/TopPage'

function App() {
  const [country, setCountry] = useState('')
  const [countryData, setCountryData] = useState({
    date: '',
    newConfirmed: '',
    totalConfirmed: '',
    newRecovered: '',
    totalRecovered: '',
  })
  const getCountryData = () => {
    fetch(
      `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`
    )
      .then((res) => res.json())
      .then((data) => {
        const todayCountryData = data[data.length - 1]
        const yesterdayCountryData = data[data.length - 2]

        const newConfirmed =
          todayCountryData.Confirmed - yesterdayCountryData.Confirmed
        const newRecovered =
          todayCountryData.Recovered - yesterdayCountryData.Recovered

        const year = todayCountryData.Date.substring(0, 4)
        const month = todayCountryData.Date.substring(5, 7)
        const day = todayCountryData.Date.substring(8, 10)
        const formattedDate = `${year}年${month}月${day}日`

        setCountryData({
          date: formattedDate,
          newConfirmed: newConfirmed,
          totalConfirmed: todayCountryData.Confirmed,
          newRecovered: newRecovered,
          totalRecovered: todayCountryData.Recovered,
        })
      })
  }
  return (
    <div className="App">
      <TopPage
        countriesJson={countriesJson}
        setCountry={setCountry}
        getCountryData={getCountryData}
        countryData={countryData}
      />
    </div>
  )
}

export default App
