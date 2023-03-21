const Card = ({ allCountriesData }) => {
  return (
    <>
      <h2>Card</h2>
      {allCountriesData.map(({ Country, NewConfirmed, TotalConfirmed }) => {
        return (
          <div key={Country}>
            <h3>{Country}</h3>
            <p>新規感染者：{NewConfirmed}人</p>
            <p>感染者総数：{TotalConfirmed}人</p>
          </div>
        )
      })}
    </>
  )
}

export default Card
