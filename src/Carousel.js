import "./App.css"

function Carousel() {
    const data = [
        "https://www.motortrend.com/uploads/2022/10/033-2022-Mercedes-Amg-G63-4x4-Squared-First-Drive-1.jpg",
        "https://www.motortrend.com/uploads/sites/5/2021/07/2022-Ram-Rebel-GT-1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvN5gL8Utqxw9UCNj9kRrnoSsAMHwmcFCwIw&usqp=CAU",
        "https://www.motortrend.com/uploads/sites/5/2020/11/2021-Dodge-Charger-Hellcat-Redeye-8.jpg?fit=around%7C875:492"
    ]
    console.log(data)
  return (
    <div className="App">
        <h1>Carousel</h1>
        <img width="100%" src= {data[0]} alt="" />
        <div>
            <button>Left</button>
            <button>Right</button>
        </div>
    </div>
  )
}

export default Carousel;