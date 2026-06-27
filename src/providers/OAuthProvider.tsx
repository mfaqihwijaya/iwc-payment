import type { OAuthSession } from "../shared/types/oauthSession.type";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const OAuthContext = createContext(null);

const CLIENT_ID = "52278260391-4rret8ivsbu301cek2kuh69i2u4rvp6l.apps.googleusercontent.com";
const CLIENT_SCOPE = "https://www.googleapis.com/auth/spreadsheets.readonly"

export function OAuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<OAuthSession | null>(null);

  useEffect(() => {
    type CredentialResponse = {
      access_token: string,
      credential: string
    }
    window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: CLIENT_SCOPE,
      callback: (res: CredentialResponse) => {
        const credential = JSON.parse(
          atob(res.credential.split(".")[1])
        );

        setSession({
          name: credential.name,
          email: credential.email,
          spreadsheet_access_token: res.access_token 
        })
      },
    });
  }, [])

  function login(data) {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  }

  function logout() {
    window.google.accounts.id.disableAutoSelect();
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <OAuthContext.Provider value = {{ session, login, logout }}>
      {children}
    </OAuthContext.Provider>
  );
}

export function useOAuth() {
  const ctx = useContext(OAuthContext);
  if (!ctx) throw new Error("useOAuth must be inside OAuthProvider");
  return ctx;
};