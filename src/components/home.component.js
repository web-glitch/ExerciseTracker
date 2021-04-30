import React, { Component } from "react";
import exer from "./team.jpg"; 
 
class Home extends Component {
  render() {
    return (
     
      <div>
       
        <h2>Sign Up With Exercise Tracker </h2>
        
        <p><b>KEEP A TRACK OF ALL THE EXERCISES YOU PERFORM</b> </p>

         <img src={exer} alt="exer" />

       
 
        <p> <em>ExerciseTracker @copyright 2021 .</em></p>
      </div>
    );
  }
}
 
export default Home;