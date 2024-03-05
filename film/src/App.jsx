import "./App.css";
import React, { useState} from "react";
import NavBar from "./components/Navbar/NavBar";
import Filter from "./components/Filter/Filter";

function App() {
  
  const[ratingChange,setRatingChange]=useState(1);
  const[serchInput, setSerchInput] = useState("");
  return(
    <>
    <NavBar ratingChange={ratingChange} setRatingChange={setRatingChange} setSerchInput={setSerchInput}/>    
    <Filter ratingChange={ratingChange} serchInput={serchInput}/>
    </>
  );
}
export default App;
