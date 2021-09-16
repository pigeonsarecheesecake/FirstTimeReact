import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
   <>
   <Router>
      <Navbar />  
      <switch>
        <Route path='/' exact />
      </switch>
   </Router>
      
    </>
  );
}

export default App;
