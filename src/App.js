import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Loading from './Hoc/Loading';
import Home from './Hoc/Home';
import Counter from './components/Counter';

// const Homeloadingdata = Loading(Home);

function App() {
  // const [Loading, setloading] = useState(false);
  // const [data, setdata] = useState([]);

  // const orgdata = [{
  //   id: 101, name: "Amit"
  // }, {
  //   id: 102, name: "Ajay"
  // }];

  // useEffect(() => {
  //   setloading(true)
  //   setTimeout(() => { setloading(false); setdata(orgdata) }, 2000);
  // }, [])

  return (
    <div>
      {/* <Homeloadingdata 
      isloading={Loading} 
      data={data} 
      /> */}
    <Counter/>
    </div>
  );
}

export default App;
