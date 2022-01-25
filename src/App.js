import './App.css';
import Employee from './components/Employee/Employee';
import Admin from './components/Admin/Admin';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/employee" element={<Employee />}></Route>
      <Route path="/" element={<Employee />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
