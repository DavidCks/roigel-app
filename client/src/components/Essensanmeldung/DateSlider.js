import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import DaySelector from './DaySelector'
import ExtrasSelector from './ExtrasSelector'

const DateSlider = ({ dates }) => {
  return (
    <ListGroup horizontal='sm'>
      {dates[0].map((date, index) => index !== 0 && (
        <ListGroup.Item key={index} style={{zIndex: index * -1 + 99999999}}>
            <DaySelector date={date}/>
            {date.selection !== 'none' && 
            <ExtrasSelector date={date} />}
        </ListGroup.Item>))}
    </ListGroup>
  )
}

export default DateSlider
