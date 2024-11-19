import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import Layout from './components/Layout';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:cca3" element={<CountryDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
