
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ItemDetails from "./ItemDetails";
import { AuthProvider } from 'react-oidc-context';

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_7G7X4g3hh",
  client_id: "4kc00r6finqj4fdqkdud1lsa9d",
  redirect_uri: "https://d3w1essk5is7g0.cloudfront.net",
  response_type: "code",
  scope: "email openid phone",
};

createRoot(document.getElementById('root')).render(
<AuthProvider {...cognitoAuthConfig}>
  <Router>
    <div>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  </Router>
</AuthProvider>

)