import Header from "./Header"
import DateSlider from "./DateSlider"
import SeparatorSVG from "../SVGs/SeparatorSVG"
import FullDayDisplay from "./FullDayDisplay"
import DualCard from "../Global/DualCard"
import MeatSVG from "../SVGs/MeatSVG"
import VegiSVG from "../SVGs/VegiSVG"
import dateCalc from "../functions/dateCalc"
import { useEffect, useState } from "react"

const Essensanmeldung = () => {
  //structure: array of array of dates
  /*  all entries > per user (where the [0]th object is user specifics)
      per user > all date specifics for that user (starting at the [1]st object)   
      [1]st element should always be todays date
  */
  const [dates, setDates] = useState([
    [
      {
        user: 'Jonas Dransfeld'
      },
      {
        day: 'Di',
        date: '2',
        month: 'Okt',
        year: '2021',
        selection: 'meat',
        extraMeat: 3,
        extraVegi: 1
      },
      {
        day: 'Mi',
        date: '3',
        month: 'Okt',
        year: '2021',
        selection: 'meat',
        extraMeat: 1,
        extraVegi: 1
      },
      {
        day: 'Do',
        date: '4',
        month: 'Okt',
        year: '2021',
        selection: 'vegi',
        extraMeat: 5,
        extraVegi: 4
      },
      {
        day: 'Fr',
        date: '5',
        month: 'Okt',
        year: '2021',
        selection: 'none',
        extraMeat: 0,
        extraVegi: 2
      },
      {
        day: 'Sa',
        date: '6',
        month: 'Okt',
        year: '2021',
        selection: 'meat',
        extraMeat: 0,
        extraVegi: 3
      },
      {
        day: 'So',
        date: '7',
        month: 'Okt',
        year: '2021',
        selection: 'none',
        extraMeat: 0,
        extraVegi: 1
      }
    ],
    [
      {
        user: 'Marvin'
      },
      {
        day: 'Di',
        date: '2',
        month: 'Okt',
        year: '2021',
        selection: 'none',
        extraMeat: 2,
        extraVegi: 1
      },
      {
        day: 'Mi',
        date: '3',
        month: 'Okt',
        year: '2021',
        selection: 'meat',
        extraMeat: 0,
        extraVegi: 1
      }
    ],
    [
      {
        user: 'Christ'
      },
      {
        day: 'Di',
        date: '2',
        month: 'Okt',
        year: '2021',
        selection: 'vegi',
        extraMeat: 3,
        extraVegi: 3
      }
    ],
    [
      {
        user: 'Göttert'
      },
      {
        day: 'Di',
        date: '2',
        month: 'Okt',
        year: '2021',
        selection: 'meat',
        extraMeat: 5,
        extraVegi: 1
      }
    ],
  ])

  {/* remove after testing */}
  const [testMsg, setTestMsg] = useState()

  {/* remove after testing */}
  useEffect(()=> {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setTestMsg(data.message));
  }, [])

  const calcDualCardData = () => {
    // array: [[0] = 'Day, Date'
    //         [1] = {Ammount Meat}
    //         [2] = {Ammount Vegi}
    //        ]

    let arr = [
      ['', 0, 0],
      ['', 0, 0],
      ['', 0, 0],
      ['', 0, 0],
      ['', 0, 0],
      ['', 0, 0],
      ['', 0, 0],
    ]

    dates.forEach(datesPerUser => {
      datesPerUser.forEach((date, i) => {
        if(i !== 0) {
          //define the day
          arr[i-1][0] = dateCalc(date.day, date.date, date.month, date.year)

          //sum up the values for each day
          if(date.selection !== 'none'){
            arr[i-1][1] += date.extraMeat
            arr[i-1][2] += date.extraVegi

            date.selection === 'meat' && arr[i-1][1]++
            date.selection === 'vegi' && arr[i-1][2]++
          }
        }
      })
    });

    return arr
  }

  //data needs to be populated in full in order for the site to work properly

  return (
    <>
      <Header heading='Essensanmeldung'/>
      <SeparatorSVG />
      {/* remove after testing */}
      {testMsg}
      <DateSlider dates={dates} />
      <FullDayDisplay dates={dates}/>
      {calcDualCardData().map((dataByDay, i) =>
        <DualCard key={i} titleText={dataByDay[0]}
                  Icon1={MeatSVG} h1='Fleisch' t1={dataByDay[1]}
                  Icon2={VegiSVG} h2='Vegi'    t2={dataByDay[2]} />
      )}
    </>
  )
}

export default Essensanmeldung
