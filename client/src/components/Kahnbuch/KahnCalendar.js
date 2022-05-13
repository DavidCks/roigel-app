import Calendar from 'react-calendar';
import KahnCalendarNavSVG from './KahnCalendarNavSVG';

const KahnCalendar = ({date, setDate, reserved}) => {

  const markReserved = ({date, view}) => {
    if(view === 'month') {
      for(let i = 1; i < reserved.length; i += 3){
        if(date.toDateString() === reserved[i].toDateString()){
          return ("reserved")
        }
      }
    }
  }
  
  return (
    <>
    <div className='calendar-container'>
        <Calendar tileClassName={markReserved} prevLabel={<KahnCalendarNavSVG orientation='left' size={1.5}/>} nextLabel={<KahnCalendarNavSVG orientation='right' size={1.5}/>} prev2Label={null} next2Label={null} minDetail="year" onChange={setDate} value={date} />
    </div>
    </>
  )
}

export default KahnCalendar