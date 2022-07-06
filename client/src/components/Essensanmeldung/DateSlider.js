import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import DaySelector from './DaySelector'
import ExtrasSelector from './ExtrasSelector'
import { useAuth0 } from "@auth0/auth0-react"

const DateSlider = ({ dates, setAndUpdateDates }) => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <p>Lädt ...</p>;
  }

  if (!isAuthenticated) {
    return <p>Du musst dich einloggen, um dich zum Essen eintragen zu können.</p>;
  }

  //Generate data for empty selectors for the date slider where the isnt any data defined yet
  (() => {
    let datesForUser = dates.filter((datesbyuser) => datesbyuser[0].user === user.name)[0]
    datesForUser = datesForUser === [] ? [{ user: user.name }] : datesForUser
    const todayUNIX = new Date().getTime();
    let date, month, year, noneAtDayI
    for (let i = 0; i < 10; i++) {
      date = new Date(todayUNIX + i * 86400 * 1000).getDate()
      month = new Date(todayUNIX + i * 86400 * 1000).toLocaleString('de-DE', {month: 'short'})
      year = new Date(todayUNIX + i * 86400 * 1000).toLocaleString('de-DE', {year: 'numeric'})
      noneAtDayI = {
        day: new Date(todayUNIX + i * 86400 * 1000).toLocaleString('de-DE', {weekday: 'short'}),
        date: date,
        month: month,
        year: year,
        selection: 'none',
        extraMeat: 0,
        extraVegi: 0
      }
      if(!datesForUser[i+1]){
        datesForUser[i+1] = noneAtDayI
      }
      if(datesForUser[i+1].date == date && 
        datesForUser[i+1].month == month &&
        datesForUser[i+1].year == year) {
          continue
      }
      datesForUser.splice(i+1,0,noneAtDayI)
    }
  })()

  let userI
  return (
    <ListGroup horizontal='sm'>
      {dates
        .filter((datesbyuser, userIndex) => {
          if(datesbyuser[0].user === user.name){
            userI = userIndex
            return true
          }
        })[0]
        .map((date, index) => index !== 0 && (
        <ListGroup.Item key={index} style={{zIndex: index * -1 + 99999999}}>
            <DaySelector userIndex={userI} dates={dates} date={date} datesDayIndex={index} setAndUpdateDates={setAndUpdateDates}/>
            {date.selection !== 'none' && 
            <ExtrasSelector date={date} />}
        </ListGroup.Item>))}
    </ListGroup>
  )
}

export default DateSlider
