import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <>
    <button className="nm-shadow nm-bg nm-border authbtn" onClick={() => logout({ returnTo: window.location.origin })}>
      Ausloggen
    </button>
    </>
  )
}

export default Logout