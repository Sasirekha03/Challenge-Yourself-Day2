import React from 'react';
//import Car from './Components/Car'; 
//import Location from './Components/Location';
function App()
{
class Car extends React.Component{
  render(){
  return(
    <div>
        <h2>1934 Chevrolet Master Series DA Coach </h2>
        <img src="https://www.thestatesman.com/wp-content/uploads/2022/03/iStock-588605048-1.jpg" alt="Car" style={{width:'500px',height:'500px'}}></img>
      </div>
  );
}
}

function Location()
{
  return(
    <div>
    <h3>COMPANY NAME:CHEVROLET</h3>
    <h3>CITY NAME: GEORGIA</h3>
    </div>
  );
}


return(
  <div>
  <Car/>
  <Location/>
  </div>
);

} 
export default App;
