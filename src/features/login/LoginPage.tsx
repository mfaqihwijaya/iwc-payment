import { useEffect } from "react";
import { useAuth } from "../../providers/OAuthProvider";

export default function Login() {
  const { login } = useAuth();

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      {
        theme: "outline",
        size: "large",
      }
    );
  }, []);

  function handleCredentialResponse(response) {
    const jwt = response.credential;

    const payload = JSON.parse(
      atob(jwt.split(".")[1])
    );

    login({
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
      token: jwt,
    });
  }

  return (
    <div style={{ textAlign: "center", marginTop: 80 }}>
      <h1>Login with Google</h1>
      <div id="googleBtn"></div>
    </div>
  );
}