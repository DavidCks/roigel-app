import { Container, Row, Col } from "react-bootstrap"
import Zirkel from "./Zirkel"
import BackgroundBand from "./BackgroundBand"
import UserButton from "./UserButton"

const Header = ({Link}) => {
  return (
    <header>
      <BackgroundBand />
      <Container fluid>
        <Row className='header-row'>
          <Col></Col>
          <Col>
            <Zirkel className='Zirkel'/>
          </Col>
          <Col>
            <Link to="/profile">
              <UserButton />
            </Link>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
