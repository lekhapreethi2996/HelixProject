import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Create from './components/Create';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';


const routing = (
  <Router>
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/create" element={<Create/>} />
      </Routes>
    </React.StrictMode>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(routing);

reportWebVitals(console.log);
