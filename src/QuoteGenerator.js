import "./App.css";
import { quotes } from "./quotes";
import {useState} from "react"

 function Quote() {
    const [index, setIndex] = useState(0)

    const handleRandomQuote = () => {
      const randomIndex = Math.random()*quotes.length
      setIndex(Math.floor(randomIndex))
    }

   return (
     <div className='App'>
        <h1>Quotes</h1>
        <h4>{quotes[index].txt}</h4>
        <span>{quotes[index].author}</span>
        <button onClick={handleRandomQuote}>Generate a Quote</button>
    </div>
   )
 }
 
 export default Quote;