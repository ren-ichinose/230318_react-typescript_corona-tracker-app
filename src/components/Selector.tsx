import { CountryJson } from '../pages/TopPage'

interface SelectorProps {
  countriesJson: CountryJson[]
  setCountry: React.Dispatch<React.SetStateAction<string>>
}

const Selector = ({ countriesJson, setCountry }: SelectorProps) => {
  return (
    <select onChange={(e) => setCountry(e.target.value)}>
      {countriesJson.map(({ Country, Slug }: CountryJson) => {
        return (
          <option key={Slug} value={Slug}>
            {Country}
          </option>
        )
      })}
    </select>
  )
}

export default Selector
