import ExtrasDisplay from "./ExtrasDisplay"
import SelectionSingle from "./SelectionSingle"

const FullDayDisplay = ({ dates }) => {
  return (
    <div className='full_day_display_box'>
      <p className="big_first center bold">DIENSTAG</p>
      <p className="sub bold center">02.10.2021</p>
      <div className="names_and_extras">
        {dates.map((perUser, index) => 
          // exclude entries that have selected none
          /* [1]st element is always going to be todays date entry */
          perUser[1].selection !== 'none' && 
          (<div key={index}>
            {/* exclude the first entry from the hacky upward moving so stuff aligns properly */}
            <div style={{ marginTop: `${index !== 0 ? '-18px' : '0px'}` }} className='full_day_display_entry'>
              <span className='small-p'> 
                <SelectionSingle mode={perUser[1].selection}/>
                <span style={{paddingLeft: '2px'}}>{perUser[0].user}</span>
              </span>
              {/* [1]st element is always going to be todays date entry*/}
              <div className='full_extras_display_today'>
                <ExtrasDisplay date={perUser[1]}/>
              </div>
            </div>
            <svg style={{marginTop: '-25px', width: '100%'}}xmlns="http://www.w3.org/2000/svg" width="1000mm" height="2mm" version="1.1" viewBox="0 0 1000 2">
                <g strokeWidth="2"/>
                <path d="m1000 0.13229-1000 1e-8" fill="#e50000" stroke="#959595" strokeWidth="2"/>
            </svg>
          </div>)
        )}
      </div>
    </div>
  )
}

export default FullDayDisplay
