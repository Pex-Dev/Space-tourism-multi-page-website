import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
