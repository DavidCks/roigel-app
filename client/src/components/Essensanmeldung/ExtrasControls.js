import { Col } from "react-bootstrap"
import ToggleButton from "./ToggleButton"

const ExtrasControls = () => {
  return (
    <>
      <Col className='extras-controls' style={{margin: '0px', padding: '0px', display: 'block'}}>
        <button style={{zIndex: 1}} className='button'>+</button>
        <button style={{zIndex: 1}} className='button'>-</button>
      </Col>
      <Col className='extras-controls food-type-switch' style={{ zIndex: 20, margin: '0px', padding: '0px', display: 'block'}}>
        <ToggleButton />
      </Col>
    </>
  )
}

export default ExtrasControls
