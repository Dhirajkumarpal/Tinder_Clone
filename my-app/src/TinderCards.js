import React, { useState } from "react"
import './TinderCards.css';
import TinderCard from "react-tinder-card";
function TinderCards() {
  const [people,setPeople]  = useState([
      {
          name:"dhirAJ PAL",
          url:"C:/TinderClone/Tinder_Clone/my-app/src/24446-2-shrek-file-thumb.png",
      },
      {
          name:"ram PAL",
          url:"https://images.app.goo.gl/nd3S44b66GsUuwe47",
      },
      {
          name:"shyam PAL",
          url:"https://images.app.goo.gl/nd3S44b66GsUuwe47",
      },
  
  ])  
  const swiped=(direction,nameToDelete)=>{
    console.log("removing"+nameToDelete);
    
  }
  const outOfFrame=(name)=>{
    console.log(name+"left the screen");
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
          {
              people.map((person)=>(
              
              <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up","down"]}
              onSwipe={(dir)=>swiped(dir,person.name)}
              onCardLeftScreen={()=>outOfFrame(person.name)}
              >
              <div style={{backgroundImage:`url(${person.url})`}}
              className="card"
              >
              <h3>{person.name}</h3>
              
              </div>  
               
              </TinderCard>
              ))
          }
      </div>
    </div>
    
    //header
    //tindercard
    //buttons
  );
}

export default TinderCards;
