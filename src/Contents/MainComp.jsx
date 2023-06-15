import StatsCardComponents from '../Components/StatsCardComponent'
import StatsDatas from '../Data/StatsPreviewData'
function MainComp() {
  const StatsElem = StatsDatas.map(data => {

    return(
        
      <StatsCardComponents
        key={data.id}
        {...data}
      />
    )
  })
  return (
    <main>
        {StatsElem}
    </main>
  )
}

export default MainComp