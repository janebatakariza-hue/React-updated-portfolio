import React from 'react';
function Goo(){
  var person={
    namer:"Jane",
    age:2009,
    city:"Kigali",
    country:"Rwanda",
    premium:false,

  };
  const StyleForNow={
    background:'blue',
    color:'yellow',
    padding:'20px',
  }


  const Identity=[
    {idNumber :123456789,name:"Jane" , age:14 },
    {idNumber:987654321,name:"John" , age:16 }
  ]

  

  return(
    <div >
  <h1>{person.namer}</h1>
  <h2>{person.age}</h2>
  <h3>{person.city}</h3>
  <p>"I was born :" {2025-person.age}</p>
  <span>{person.premium? "Pay first" : "Normal member"}</span>
  <hr/>
  <button style =  {StyleForNow}>Click here</button>
 
 <ReachOut age = {20} /> 
  <div>
    {Identity.map((info)=>(

<div key={info.idNumber}>
      <h1>{info.name}</h1>
      <h2>{info.age}</h2>
      <h3>{info.idNumber}</h3>
    </div>


    )
  
)}
  </div>

  </div>

  )

}
 const ReachOut = (props) =>{
  return (
    <h1>{props.age}</h1>
  )
}

export default Goo;
{}