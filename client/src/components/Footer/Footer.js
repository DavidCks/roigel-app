import NavButton from "./NavButton"
import KahnGradientSVG from "./KahnGradientSVG"
import BurgerMenuGradientSVG from "./BurgerMenuGradientSVG"
import EssenGradientSVG from "./EssenGradientSVG"
import { Container, Row, Col } from "react-bootstrap"

const Footer = ({Link}) => {
  return (
    <footer>
      <Container fluid className='navbar'>
        <Row>
          <Col>
            <NavButton Icon={BurgerMenuGradientSVG}/>
          </Col>
          <Col>
            <NavButton Icon={BurgerMenuGradientSVG}/>
          </Col>
          <Col>
            <Link to="/essen">
              <NavButton Icon={EssenGradientSVG}/>
            </Link>
          </Col>
          <Col>
            <Link to="/kahn">
              <NavButton Icon={KahnGradientSVG}/>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
