import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './Landing';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/channel" element={<Home/>}/>
        <Route path="/channel/:channelId" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;