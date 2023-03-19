const Selector = ({ countriesJson, setCountry, getCountryData }) => {
  return (
    <>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option>select A country</option>
        {countriesJson.map(({ Country, Slug }) => {
          return (
            <option key={Slug} value={Slug}>
              {Country}
            </option>
          )
        })}
      </select>
      <button onClick={getCountryData}>Get Data</button>
    </>
  )
}

export default Selector
