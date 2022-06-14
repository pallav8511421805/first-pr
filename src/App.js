import { useEffect, useState } from "react";
import Data from "./Exam/Data";
import Loading from "./Exam/Loading";

const Hoc = Loading(Data);
function App() {
  
  const [Edata,setEdata] = useState([]);
  const [Eload,setEload] = useState(true);
  const Employee =[{
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
}];
  useEffect(()=>{
  setEload(true);
  setInterval (setEload(false),setEdata({Employee}),2000);
  },[])
  return (
      <Hoc isload={Eload} data={Edata}/>
  );
}

export default App;
