import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "../src/assets/styles/App.css";
import LegalNotices from "./pages/LegalNotices";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Layout from "./layout/Layout";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/LegalNotices" element={<LegalNotices />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          </Routes>
    </Router>
  );
}

export default App;
