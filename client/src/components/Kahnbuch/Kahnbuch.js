import { useState } from 'react';
import Header from "./Header"
import SeparatorSVG from "../SVGs/SeparatorSVG"
import KahnCalendar from './KahnCalendar';
import KahnTimePicker from './KahnTimePicker';
import { ListGroup } from 'react-bootstrap';
import AddButton from './AddButton';
import DualCard from '../Global/DualCard';
import CalendarSVG from '../SVGs/CalendarSVG';
import ClockSVG from '../SVGs/ClockSVG';
import { useAuth0 } from "@auth0/auth0-react"

const Kahnbuch = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [time1Value, setTime1Value] = useState(new Date());
  const [time2Value, setTime2Value] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [reserved, setReserved] = useState([
    "Klark Kendrix",
    new Date("September 21, 2022"),
    "15:00 - 18:00",
    "Janis Göttert",
    new Date("October 25, 2022"),
    "15:00 - 18:00",
    "Klark Kendrix",
    new Date("May 1, 2022"),
    "15:00 - 18:00",
    "Janis Göttert",
    new Date("April 1, 2022"),
    "15:00 - 18:00"
  ]);

  const addButtonOnClick = (e, d = date, t1 = time1Value, t2 = time2Value) => {
    //check for authentication before sending the reservation request
    if(!isLoading && isAuthenticated) {
      console.log("Reservierung wird für " + d.toDateString() + " von " + t1 + " bis " + t2 + " eingetragen");
    } else {
      alert("Du musst dich zuerst einloggen, bevor du den Kahn reservieren kannst.");
    }
  }
  
  //Generates the Dual Cards containing the information about when its reserved
  const genDualCard = () => {
    let a = [];
    let canDelete = false;
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    for (let i = 0; i < reserved.length; i += 3) {
      if(!isLoading) {
        canDelete = isAuthenticated && user.name === reserved[i];
      }
      a.push(<DualCard key={(i + 3) / 3 -1} titleText={reserved[i]} 
                      Icon1={CalendarSVG} h1='Datum' t1={reserved[i+1].toLocaleDateString('de-DE', options)}
                      Icon2={ClockSVG} h2='Uhrzeit'    t2={reserved[i+2]} 
                      canDelete={canDelete}/>);
    }
    return a;
  }

  return (
    <>
    <Header heading='Kahnbuch' />
    <SeparatorSVG />
    <KahnCalendar date={date} setDate={setDate} reserved={reserved} />
    <ListGroup horizontal className="list-group_KahnTimePicker">
      <ListGroup.Item>
        <KahnTimePicker value={time1Value} setValue={setTime1Value} caption='von'/>
      </ListGroup.Item>
      <ListGroup.Item>
        <KahnTimePicker value={time2Value} setValue={setTime2Value} caption='bis'/>
      </ListGroup.Item>
    </ListGroup>
    <AddButton onClick={addButtonOnClick}/>
    {genDualCard()}
    </> 
  )
}

export default Kahnbuch