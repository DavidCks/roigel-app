import { useState } from 'react';
import Header from "./Header"
import SeparatorSVG from "../SVGs/SeparatorSVG"
import KahnCalendar from './KahnCalendar';
import KahnTimePicker from './KahnTimePicker';
import { ListGroup } from 'react-bootstrap';

const Kahnbuch = () => {
  const [time1Value, setTime1Value] = useState(new Date());
  const [time2Value, setTime2Value] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [reserved, setReserved] = useState([
    "Jonas Dransfeld",
    new Date("May 21, 2022"),
    "15:00 - 18:00",
    "Janis Göttert",
    new Date("May 25, 2022"),
    "15:00 - 18:00",
    "Janis Göttert",
    new Date("May 1, 2022"),
    "15:00 - 18:00",
    "Janis Göttert",
    new Date("April 1, 2022"),
    "15:00 - 18:00"
  ]);
  
  return (
    <>
    <Header heading='Kahnbuch' />
    <SeparatorSVG />
    <KahnCalendar date={date} setDate={setDate} reserved={reserved}/>
    <ListGroup horizontal className="list-group_KahnTimePicker">
      <ListGroup.Item>
        <KahnTimePicker value={time1Value} setValue={setTime1Value} caption='von'/>
      </ListGroup.Item>
      <ListGroup.Item>
        <KahnTimePicker value={time2Value} setValue={setTime2Value} caption='bis'/>
      </ListGroup.Item>
    </ListGroup>
    </> 
  )
}

export default Kahnbuch