import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import AidScreen from './Screens/AidScreen'
import CaseScreen from './Screens/CaseScreen'
import DonationScreen from './Screens/DonationScreen'
import RegionScreen from './Screens/RegionScreen'
import UserScreen from './Screens/UserScreen';
import {Container} from 'react-bootstrap';
import Navi from './Components/Navi';
import Footer from './Components/Footer';

function App() {
  return (

    <Router>
      <Navi/>
      <Container className="shadow p-3 mb-5 bg-white rounded" style={{background:"#e8eaed" }}>
        <Route path="/" component={HomeScreen} exact/>
        <Route path="/home" component={HomeScreen}/>
        <Route path="/aid" component={AidScreen}/>
        <Route path="/case" component={CaseScreen}/>
        <Route path="/donation" component={DonationScreen}/>
        <Route path="/region" component={RegionScreen}/>
        <Route path="/users" component={UserScreen}/>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
