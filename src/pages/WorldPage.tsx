import Card from '../components/Card'
import Header from '../components/Header'
import Title from '../components/Title'
import { AllCountryData } from '../App'

interface WorldPageProps {
  allCountriesData: AllCountryData[]
  isLoading: Boolean
}

const WorldPage = ({ allCountriesData, isLoading }: WorldPageProps) => {
  return (
    <div>
      <Header />
      <Title title="World Page" />
      <Card allCountriesData={allCountriesData} isLoading={isLoading} />
    </div>
  )
}

export default WorldPage
