import React from 'react';


const seasonConfig = {
    summer :{
        text: "Let's hit the beach",
        icon: "0 sun"
    },
    winter: {
        text:"Burr.... its chilly!",
        icon:'*star'     
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
         return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth());
      const{text, icon} = seasonConfig[season]

    // const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    // const icon = season === '*star' ? 'snowflake' : 'O sun'; 


    return (
    <div> 
    <div>{icon}</div> 
    <h1>{text}</h1> 
    <div> {icon}</div>
    </div>
    );
};

export default SeasonDisplay;
