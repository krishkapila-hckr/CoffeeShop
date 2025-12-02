import { useEffect, useState } from "react";
import "./App.css";
import { useAuth } from "react-oidc-context";
import Home from "./Home";

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "4kc00r6finqj4fdqkdud1lsa9d";
    const logoutUri = "https://d3w1essk5is7g0.cloudfront.net";
    const cognitoDomain = "https://us-east-27g7x4g3hh.auth.us-east-2.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <button onClick={() => auth.removeUser()}>Sign out</button>
        <Home />
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
}

export default App;
