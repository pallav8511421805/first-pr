import { useEffect, useState } from "react";
import Data from "./Exam/Data";
import Loading from "./Exam/Loading";

function App() {
  const Hoc = Loading(Data);
  const [Edata,setEdata] = useState([]);
  const [Eload,setEload] = useState(true);
  useEffect(()=>{
    setEdata(Employee =[{
      id: 101,
      name: 'Amit',
      joining_date: "01-06-2021",
      salary: 50000
  },
  {
      id: 102,
      name: 'Piyush',
      joining_date: "01-01-2019",
      salary: 60000
  },
  {
      id: 103,
      name: 'Meet',
      joining_date: "01-03-2020",
      salary: 25000
  },
  {
      id: 104,
      name: 'Lalit',
      joining_date: "01-12-2021",
      salary: 30000
  }])
  const Employee = []
  setInterval (setEload(false),setEdata(),2000);
  },[])

  return (
      <Hoc isload = {Eload} isdata ={Edata}/>
  );
}

export default App;
