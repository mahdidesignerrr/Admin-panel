import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ErrorBoundary } from "react-error-boundary";
import PageNotFound from './pages/PageNotFound.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={PageNotFound}
      onReset={() => window.location.replace("/")}
    >
    <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
