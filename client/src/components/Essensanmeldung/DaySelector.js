import MeatSVG from "../SVGs/MeatSVG"
import VegiSVG from "../SVGs/VegiSVG"

const DaySelector = ({ userIndex, dates, date, datesDayIndex, setAndUpdateDates }) => {
  
  const updateDate = () => {
    date.selection = date.selection === 'meat' ? 'vegi' :
                    date.selection === 'vegi' ? 'none' : 'meat'
    dates[userIndex][datesDayIndex] = date
    setAndUpdateDates(dates)
  }
  
  return (
    <div onClick={updateDate} className={`day-selector-item ${date.selection === 'meat' ? 'meat' :
                                        date.selection === 'vegi' ? 'vegi' : ''}`}>
      <p> {date.day} </p> 
      <p> {date.date} </p>
      {date.selection === 'meat' && <MeatSVG size={6} />}
      {date.selection === 'vegi' && <VegiSVG size={6} />}
      <p style={{ fontSize: '22px'}}> {date.month} </p>    
    </div>
  )
}

export default DaySelector
