import Loading from './Loading'
import { AllCountryData } from '../App'

interface CardProps {
  allCountriesData: AllCountryData[]
  isLoading: Boolean
}

const Card = ({ allCountriesData, isLoading }: CardProps) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {allCountriesData.map(({ Country, NewConfirmed, TotalConfirmed }) => {
            return (
              <div key={Country}>
                <h3>{Country}</h3>
                <p>新規感染者：{NewConfirmed.toLocaleString()}人</p>
                <p>感染者総数：{TotalConfirmed.toLocaleString()}人</p>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Card
