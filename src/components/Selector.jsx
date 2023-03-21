const Selector = ({ countriesJson, setCountry }) => {
  return (
      <select onChange={(e) => setCountry(e.target.value)}>
        {countriesJson.map(({ Country, Slug }) => {
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
