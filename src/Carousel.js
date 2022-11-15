import "./App.css"
import { useState } from "react"

function Carousel() {
    const data = [
        {name: "Mercedes", img: "https://www.motortrend.com/uploads/2022/10/033-2022-Mercedes-Amg-G63-4x4-Squared-First-Drive-1.jpg"},
        {name: "RAM", img: "https://www.motortrend.com/uploads/sites/5/2021/07/2022-Ram-Rebel-GT-1.jpg"},
        {name: "Toyota", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvN5gL8Utqxw9UCNj9kRrnoSsAMHwmcFCwIw&usqp=CAU"},
        {name: "Dodge", img: "https://www.motortrend.com/uploads/sites/5/2020/11/2021-Dodge-Charger-Hellcat-Redeye-8.jpg?fit=around%7C875:492"}
    ]

    const [imageIndex, setImageIndex] = useState(0)
    const handleRight = () => {
      if(imageIndex < data.length -1){
        setImageIndex(imageIndex+1)
        }else{
        setImageIndex(0)
      }
    }

    const handleLeft = () => {
      if(imageIndex > 0){
        setImageIndex(imageIndex-1)
        }else{
        setImageIndex(data.length -1)
     }
   }

  return (
    <div className="App">
        <h1>{data[imageIndex].name}</h1>
        <img width="100%" height="280px" src= {data[imageIndex].img} alt="" />
        <div>
            <button onClick={handleLeft}>Left</button>
            <button onClick={handleRight}>Right</button>
        </div>
    </div>
    )
  }

export default Carousel;