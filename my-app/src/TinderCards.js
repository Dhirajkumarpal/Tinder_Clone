import React, { useState } from "react"
import './TinderCards.css';

function TinderCards() {
  const [people,setPeople]  = useState([
      {
          name:"dhirAJ PAL",
          url:"",
      },
            {
          name:"ram PAL",
          url:"",
      },
  ])  
  return (
    <div className="tinderCards">
          {
              people.map((person)=>(
              <h1>{person.name}</h1>
              ))
          }
    
    </div>
    
    //header
    //tindercard
    //buttons
  );
}

export default TinderCards;
