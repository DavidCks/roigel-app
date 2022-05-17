import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
    <button className="nm-shadow nm-bg nm-border authbtn" onClick={() => loginWithRedirect()}>Einloggen</button>
    </>
  )
}

export default Login