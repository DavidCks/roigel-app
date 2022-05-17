import { useAuth0 } from "@auth0/auth0-react"
import Profile from "../Profile/Profile";

const Authenticate = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Lädt ...</div>;
  }

  return (
    <Profile/>
  )
}

export default Authenticate