import Logout from "../Auth/Logout"
import Login from "../Auth/Login"
import { useAuth0 } from "@auth0/auth0-react"

const UserInfo = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Lädt ...</div>;
  }

  return (
    isAuthenticated ? (
      <>
        <div className="UserInfo-panel">
          <img className="UserInfo-image" src={user.picture} alt={user.name} />
          <h3 className="UserInfo-name">{user.name}</h3>
        </div>
        <Logout/>
      </>
    ) : <Login/>
  )
}

export default UserInfo