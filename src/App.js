import './App.css';
import {Route,Routes} from 'react-router-dom'
import Employee from './Employee.js';
import SecondPage from './SecondPage.js';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Employee/>}/>
    <Route path="/2" element={<SecondPage />} />
    </Routes>
    </>
  );
}

export default App;
