import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';
import City from './containers/City';
import Cityfun from './containers/Cityfun';
import Contry from './containers/Contry';
import Countryfun from './containers/Countryfun';
import Time from './components/Time';
import Timefun from './containers/Timefun';

function App() {
  return (
     <div>
       {/* <Time/> */}
       <Timefun/>
       {/* <City/> */}
       {/* <City id="101"/> */}
       {/* <Cityfun/> */}
       {/* <Contry /> */}
     </div>
  );
}

export default App;
