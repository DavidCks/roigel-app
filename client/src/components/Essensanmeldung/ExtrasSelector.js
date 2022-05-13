import ExtrasDisplay from "./ExtrasDisplay"
import ExtrasControls from "./ExtrasControls"
import { Container, Row, Col } from "react-bootstrap"

const ExtrasSelector = ({ date }) => {
  return (
    <div className='extras-selector'>
      <Container>
        <Row>
          <Col className='extras-display-col'>
            <ExtrasDisplay date={date} />
          </Col>
        </Row>
        <Row>
          <ExtrasControls />
        </Row>
      </Container>
    </div>
  )
}

export default ExtrasSelector
