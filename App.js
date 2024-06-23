import { useState, useEffect } from "react";

const App = () => {
  const[currentTime, setCurrentime]=useState(new Date().toLocalTimeString())
  useEffect(()=>{
    setInterval(()=>{
      setCurrentime(new Date().toLocalTimeString())
    },1000);
    console.log("Já jsem uvnitř useEffectu");
  })
  return (
    <div>
      <h1>Aktuální čas</h1>
      <p>{currentTime}</p>
      {console.log("Text uvnitř return");}
    </div>
  );
};

export default App;
