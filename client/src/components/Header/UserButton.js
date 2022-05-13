import { FaUserTie } from 'react-icons/fa'
import { useAuth0 } from "@auth0/auth0-react"

const UserButton = () => {
  const {user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div style={isAuthenticated && user.picture ? {
      backgroundImage: `url(${user.picture}`,  
      backgroundPosition: 'center top',
      backgroundSize: '100% auto'
      } : {}} className='user-btn'>
      {!isAuthenticated && <FaUserTie />}
    </div>
  )
}

export default UserButton
