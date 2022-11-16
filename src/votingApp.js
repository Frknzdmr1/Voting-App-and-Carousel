import React, { useState } from 'react'

const data = [
    {title:"Python", id:1, count:0},
    {title:"Javascript", id:2, count:0},
    {title:"Pascal", id:3, count:0},
    {title:"Sharp", id:4, count:0},
    {title:"C++", id:5, count:0}
]

function VotingApp() {
  const [stateData, setStateData] = useState(data)
  const customStyle = { 
    padding:"10px",
    marginBottom:"5px",
    boxShadow:"0px 0px 5px grey"
  }

  const handleIncrease =(index) => {
    const newData=[...stateData]
    newData[index].count++
    setStateData(newData)
  }

  const handleDecrease =(index) => {
    const newData=[...stateData]
    if (newData[index].count > 0){

    newData[index].count--
    setStateData(newData)
  }
}
return (  
    <div className='App '>
    <h1>Voting</h1>
    {
       stateData.map((lang, ind)=>{
            return (
                <div style={customStyle}>
                    <h3>{lang.title}</h3>
                    <h3>{lang.count}</h3>
                    <button onClick={()=>handleIncrease(ind)}>+</button>
                    <button onClick={()=>handleDecrease(ind)}>-</button>
                </div>
            )
        })
    }

    </div>
  )
}
export default VotingApp;