import { FaUserTie } from 'react-icons/fa'

const Header = ({ heading, textColor }) => {
  return (
    <>
      <h2>
        <FaUserTie style={{marginTop: '-.3em'}} color={textColor}/> 
        {` ${heading}`}
      </h2>
    </>
  )
}

export default Header