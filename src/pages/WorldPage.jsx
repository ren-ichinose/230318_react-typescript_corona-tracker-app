import Card from '../components/Card'
import Header from '../components/Header'
import Title from '../components/Title'

const WorldPage = ({ allCountriesData }) => {
  return (
    <div>
      <Header />
      <Title title="World Page" />
      <Card allCountriesData={allCountriesData} />
    </div>
  )
}

export default WorldPage
