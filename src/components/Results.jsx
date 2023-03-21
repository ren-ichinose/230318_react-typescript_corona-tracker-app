const Results = ({ countryData }) => {
  const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered } =
    countryData
  return (
    <div>
      <p>日付：{date}</p>
      <p>
        新規感染者：{newConfirmed ? `${newConfirmed.toLocaleString()}人` : ''}
      </p>
      <p>
        感染者総数：
        {totalConfirmed ? `${totalConfirmed.toLocaleString()}人` : ''}
      </p>
      <p>
        新規回復者：{newRecovered ? `${newRecovered.toLocaleString()}人` : ''}
      </p>
      <p>
        回復者総数：
        {totalRecovered ? `${totalRecovered.toLocaleString()}人` : ''}
      </p>
    </div>
  )
}

export default Results
