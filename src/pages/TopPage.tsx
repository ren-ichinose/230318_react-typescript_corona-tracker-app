import Header from '../components/Header'
import Selector from '../components/Selector'
import Title from '../components/Title'
import Results from '../components/Results'
import { CountryData } from '../App'

export interface CountryJson {
  Country: string
  Slug: string
}

interface TopPageProps {
  countriesJson: CountryJson[]
  setCountry: React.Dispatch<React.SetStateAction<string>>
  countryData: CountryData
  isLoading: boolean
}

const TopPage = ({
  countriesJson,
  setCountry,
  countryData,
  isLoading,
}: TopPageProps) => {
  return (
    <>
      <Header />
      <Title title="Covid Tracker" />
      <Selector countriesJson={countriesJson} setCountry={setCountry} />
      <Results countryData={countryData} isLoading={isLoading} />
    </>
  )
}

export default TopPage
