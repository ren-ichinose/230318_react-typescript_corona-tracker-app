import './App.css'
import { useEffect, useState } from 'react'
import countriesJson from './countries.json'
import TopPage from './pages/TopPage'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import WorldPage from './pages/WorldPage'

function App() {
  const [country, setCountry] = useState('')
  const [countryData, setCountryData] = useState({
    date: '',
    newConfirmed: '',
    totalConfirmed: '',
    newRecovered: '',
    totalRecovered: '',
  })
  const [allCountriesData, setAllCountriesData] = useState([])

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
  const getAllCountryData = () => {
    fetch('https://monotein-books.vercel.app/api/corona-tracker/summary')
      .then((res) => res.json())
      .then((data) => {
        const result = data.Countries.map(
          ({ Country, NewConfirmed, TotalConfirmed }) => {
            return { Country, NewConfirmed, TotalConfirmed }
          }
        )
        setAllCountriesData(result)
      })
  }

  useEffect(() => {
    getAllCountryData()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TopPage
              countriesJson={countriesJson}
              setCountry={setCountry}
              getCountryData={getCountryData}
              countryData={countryData}
            />
          }
        />
        <Route
          path="/world"
          element={<WorldPage allCountriesData={allCountriesData} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
