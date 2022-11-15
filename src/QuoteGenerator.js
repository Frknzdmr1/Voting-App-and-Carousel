import "./App.css";
import { quotes } from "./quotes";

 function Quote() {
    console.log(quotes)

   return (
     <div className='App'>
        <h1>Quotes</h1>
        <p>Click button to get quote</p>
        <button>Generate a Quote</button>
    </div>
   )
 }
 
 export default Quote;