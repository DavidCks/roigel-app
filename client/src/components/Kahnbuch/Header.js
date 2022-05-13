import KahnGradientSVG from "../Footer/KahnGradientSVG"

const Header = ({ heading, textColor }) => {
  return (
    <>
      <h2>
        <KahnGradientSVG monochrome={true} size={0.5} style={{marginTop: '-.3em'}} color={textColor}/> 
        {` ${heading}`}
      </h2>
    </>
  )
}

export default Header
