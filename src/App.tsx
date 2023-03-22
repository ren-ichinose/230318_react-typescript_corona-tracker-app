import './App.css'
import { useEffect, useState } from 'react'
import countriesJson from './countries.json'
import TopPage from './pages/TopPage'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import WorldPage from './pages/WorldPage'

export interface CountryData {
  date: string
  newConfirmed: number
  totalConfirmed: number
  newRecovered: number
  totalRecovered: number
}

export interface AllCountryData {
  Country: string
  NewConfirmed: number
  TotalConfirmed: number
}

function App() {
  const [country, setCountry] = useState<string>('japan')
  const [countryData, setCountryData] = useState<CountryData>({
    date: '',
    newConfirmed: 0,
    totalConfirmed: 0,
    newRecovered: 0,
    totalRecovered: 0,
  })
  const [allCountriesData, setAllCountriesData] = useState<AllCountryData[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getCountryData = () => {
    setIsLoading(true)
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

        const year: string = todayCountryData.Date.substring(0, 4)
        const month: string = todayCountryData.Date.substring(5, 7)
        const day: string = todayCountryData.Date.substring(8, 10)
        const formattedDate = `${year}年${month}月${day}日`

        setCountryData({
          date: formattedDate,
          newConfirmed: newConfirmed,
          totalConfirmed: todayCountryData.Confirmed,
          newRecovered: newRecovered,
          totalRecovered: todayCountryData.Recovered,
        })
        setIsLoading(false)
      })
      .catch((err) => {
        alert('エラーが発生しました。再度読み込みをしてください')
      })
  }
  const getAllCountryData = () => {
    setIsLoading(true)
    fetch('https://monotein-books.vercel.app/api/corona-tracker/summary')
      .then((res) => res.json())
      .then((data) => {
        const result: AllCountryData[] = data.Countries.map(
          ({
            Country,
            NewConfirmed,
            TotalConfirmed,
          }: AllCountryData): AllCountryData => {
            return { Country, NewConfirmed, TotalConfirmed }
          }
        )
        setAllCountriesData(result)
        setIsLoading(false)
      })
      .catch((err) => {
        alert('エラーが発生しました。再度読み込みをしてください')
      })
  }

  useEffect(() => {
    getCountryData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country])

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
              countryData={countryData}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/world"
          element={
            <WorldPage
              allCountriesData={allCountriesData}
              isLoading={isLoading}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
