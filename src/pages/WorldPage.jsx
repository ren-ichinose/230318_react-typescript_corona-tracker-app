import Card from '../components/Card'
import Header from '../components/Header'
import Title from '../components/Title'

const WorldPage = ({ allCountriesData, isLoading }) => {
  return (
    <div>
      <Header />
      <Title title="World Page" />
      <Card allCountriesData={allCountriesData} isLoading={isLoading} />
    </div>
  )
}

export default WorldPage
