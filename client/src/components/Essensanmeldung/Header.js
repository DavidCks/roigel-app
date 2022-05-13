import { MdRestaurant } from 'react-icons/md'

const Header = ({ heading, textColor }) => {
  return (
    <>
      <h2>
        <MdRestaurant style={{marginTop: '-.3em'}} color={textColor}/> 
        {` ${heading}`}
      </h2>
    </>
  )
}

export default Header
