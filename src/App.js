function App() {
  
  const values = ["value 1","value 2","value 3","value 4", "value 5"];

  return (
    <div>
      { 
        values.map(
        (val, index)=>
        (index !== 0 && index !== 1) && <div key={val}>  {val}  </div> ) 
      }
    </div>
  );
}

export default App;
